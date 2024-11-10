import { AxiosError } from "axios";
import useSWR, { SWRConfiguration } from "swr";

import axiosInstance from "@/config/client/axios";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesSuccessResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
}

export interface MoviesErrorResponse {
  message: string;
}

export interface MoviesProps {
  config?: SWRConfiguration<MoviesSuccessResponse, AxiosError<MoviesErrorResponse>>;
  params?: {
    language?: string;
    page?: string;
  };
}

const fetcher = async (url: string, params: { language?: string; page?: string }): Promise<MoviesSuccessResponse> => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

export const useMovies = (props: MoviesProps) => {
  const { config, params } = props;

  const url = "/movie/now_playing";

  const serializedParams = JSON.stringify(params);

  return useSWR<MoviesSuccessResponse, AxiosError<MoviesErrorResponse>>([url, serializedParams], fetcher, config);
};
