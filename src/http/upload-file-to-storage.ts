import axios from "axios";

interface UploadFileToStorageParams {
  file: File;
}

export async function uploadFileToStorage({ file }: UploadFileToStorageParams) {
  const data = new FormData();
  data.append("file", file);

  const response = await axios.post<{ url: string }>(
    `${import.meta.env.VITE_BACKEND_URL}/upload`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return { url: response.data.url };
}
