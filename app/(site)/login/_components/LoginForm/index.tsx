"use client";

import Link from "next/link";
import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/atoms/Button";
import FormIcon from "@/components/atoms/FormIcon";
import Input from "@/components/atoms/Input";
import FormGroup from "@/components/molecules/FormGroup";
import Toast from "@/components/molecules/Toast";
import { ToastStatus } from "@/types/ToastStatus";
import { loginUser, storeProfileInCookies } from "@/utils/auth";
import navigate from "@/utils/navigate";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../_hooks/useAuth";
import { useProfile } from "../../_hooks/useProfile";

interface LoginFormProps extends Omit<HTMLAttributes<HTMLDivElement>, "onError"> {}

const schema = yup.object({
  username: yup.string().required("Username harus diisi.").min(6, "Username minimal 6 karakter."),
  password: yup.string().required("Password harus diisi.").min(6, "Password minimal 6 karakter."),
  deviceId: yup.string().optional(),
});

const LoginForm: FunctionComponent<LoginFormProps> = ({ ...attrs }) => {
  const [isShowToast, setIsShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastStatus, setToastStatus] = useState<ToastStatus>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUnmaskPassword, setIsUnmaskPassword] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      deviceId: "",
    },
    resolver: yupResolver(schema),
    mode: "all",
  });

  const authentication = useAuth({
    config: {
      onSuccess: (res, key) => {
        const status = res.success;
        const message = res.status_message;
        if (status === true && message === "Success.") {
          setIsShowToast(true);
          setToastStatus("success");
          setToastMessage("Hi, welcome back!");
        }
      },
      onError: (err, key) => {
        console.error("useAuth err", err);
        const status = err.response?.data.success;
        const message = err.response?.data.status_message;

        if (status === false && message === "Invalid API key: You must be granted a valid key.") {
          setIsShowToast(true);
          setToastStatus("error");
          setToastMessage("Invalid username or password");
        }
      },
    },
  });

  const profile = useProfile({
    config: {
      onSuccess(data, key, config) {
        storeProfileInCookies(data);
      },
      onError(err, key, config) {
        console.log("profile login form ERR", err);
      },
    },
  });

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setIsLoading(true);
    try {
      const newToken = loginUser(data.username, data.password);
      if (newToken) {
        await authentication.trigger();
        await profile.trigger();
        navigate("/");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setValue("deviceId", window.navigator.userAgent.replace(/\s+/g, ""), {
      shouldValidate: true,
    });
  }, []);

  useEffect(() => {
    if (isShowToast) {
      const timeoutId = setTimeout(() => {
        setIsShowToast(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isShowToast]);

  return (
    <div {...attrs}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <FormGroup error={error?.message}>
              <Input id="username" data-testid="username" placeholder="Username or Email" variant={error ? "error" : undefined} {...field} />
            </FormGroup>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <FormGroup error={error?.message}>
              <FormIcon data-testid="password-form-icon">
                <Input id="password" data-testid="password" type={isUnmaskPassword ? "text" : "password"} {...field} placeholder="Password" variant={error ? "error" : undefined} className="pr-10" />
                <button className="icon" id="password-toggler-btn" data-testid="password-toggler-btn" type="button" onClick={() => setIsUnmaskPassword(!isUnmaskPassword)}>
                  {isUnmaskPassword ? <i className="fas fa-eye-slash text-foreground"></i> : <i className="fas fa-eye text-foreground"></i>}
                </button>
              </FormIcon>
            </FormGroup>
          )}
        />
        <div className="text-sm font-medium flex justify-end items-center gap-1">
          <span>Forgot password?</span>
          <Link id="forgot-password" data-testid="forgot-password" href="#" className="text-pink-magenta pt-0.5">
            Click here.
          </Link>
        </div>

        <Button size="lg" variant="primary" className="w-full mt-8" isLoading={isLoading} disabled={!isValid} data-testid="submit-btn">
          Login
        </Button>
      </form>

      <Toast
        id="toast"
        data-testid="toast"
        isShow={isShowToast}
        handleClose={() => {
          setIsShowToast(false);
        }}
        status={toastStatus}
      >
        {toastMessage}
      </Toast>
    </div>
  );
};

export default LoginForm;
