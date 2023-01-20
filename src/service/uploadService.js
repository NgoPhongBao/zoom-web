import api from "./apiService";

const uploadFile = async (file, folder = "") => {
  try {
    const form = new FormData();
    form.append("file", file, file.name );
    form.append("folder", folder);
    const res = await api.post("/admin/upload", form, true);
    return res.data.url;
  } catch (error) {
    return error;
  }
};

export default uploadFile;
