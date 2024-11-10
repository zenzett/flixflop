import { AxiosError } from "axios";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

import axiosInstance from "@/config/client/axios";
import { AuthenticationResponse } from "@/types/AuthenticationResponse";

export interface AuthenticationSuccessResponse extends AuthenticationResponse {}

export interface AuthenticationErrorResponse extends AuthenticationResponse {}

export interface AuthenticationProps {
  config?: SWRMutationConfiguration<AuthenticationSuccessResponse, AxiosError<AuthenticationErrorResponse>, { url: string }>;
}

const fetcher = async (arg: { url: string }) => {
  try {
    const response = await axiosInstance.get(arg.url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useAuth = (props: AuthenticationProps) => {
  const { config } = props;

  return useSWRMutation({ url: "authentication" }, fetcher, config);
};
