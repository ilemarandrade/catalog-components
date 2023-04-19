import { AxiosProgressEvent } from "axios";
import axiosInstance from "./axiosInstances";

class UploadFilesService {
  upload(
    file: File,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void
  ): Promise<any> {
    let formData = new FormData();

    formData.append("file", file);

    return axiosInstance.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
}

const newUploadFilesService = new UploadFilesService();

export default newUploadFilesService;
