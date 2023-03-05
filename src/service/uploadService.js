import api from "./apiService";
import imageCompression from "browser-image-compression";
import { message } from "antd";

const uploadFile = async (file, folder = "") => {
  try {
    if (file.type === "image/jpeg") {
      file = await imageCompression(file, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1500,
      });
    }
    const form = new FormData();
    form.append("file", file, file.name);
    form.append("folder", folder);
    const res = await api.post("/admin/upload", form, true);
    return res.data.url;
  } catch (error) {
    message.error(error.message)
  }
};

export default uploadFile;
