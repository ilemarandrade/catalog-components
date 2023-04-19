import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstances";

interface IHandleRequest {
  method: string;
  url: string;
  config?: AxiosRequestConfig<any>;
  onSuccess: (res: any) => void;
  onError: (err: any) => void;
}
const handleRequest = ({
  method,
  url,
  config = {},
  onSuccess,
  onError,
}: IHandleRequest) => {
  axiosInstance({
    method,
    url,
    ...config,
  })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onError(err);
    });
};

export default handleRequest;
