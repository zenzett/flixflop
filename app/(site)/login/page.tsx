"use client";

import { FunctionComponent } from "react";

import LoginForm from "./_components/LoginForm";

const LoginPage: FunctionComponent = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap" style={{ minHeight: "calc(100vh - 64px)" }}>
        <div className="w-fit h-fit m-auto gap-4 flex flex-col">
          <div className="text-lg font-semibold text-primary-90">Hi, please let us know you!</div>
          <div className="border border-pink-magenta rounded-xl p-8">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
