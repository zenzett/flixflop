import { AxiosError } from "axios";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

import axiosInstance from "@/config/client/axios";
import { ProfileResponse } from "@/types/ProfileResponse";
import { getUserId } from "@/utils/auth";

export interface ProfileSuccessResponse extends ProfileResponse {}

export interface ProfileErrorResponse extends ProfileResponse {}

export interface ProfileProps {
  config?: SWRMutationConfiguration<ProfileSuccessResponse, AxiosError<ProfileErrorResponse>, { url: string }>;
}

const fetcher = async (arg: { url: string }) => {
  try {
    const response = await axiosInstance.get(arg.url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const useProfile = (props: ProfileProps) => {
  const { config } = props;

  const userId = getUserId();

  return useSWRMutation({ url: `account/${userId}` }, fetcher, config);
};
