import React, { useState, useEffect } from "react";
import { Breadcrumb, Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import uploadFile from "../../service/uploadService";
import api from "../../service/apiService";
import Loading from "../../admin-components/common/Loading";

export default function Cp() {
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStore();
  }, []);

  const getStore = async () => {
    try {
      const res = await api.get("/admin/store");
      const store = res.data;
      setStore(store);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateStore = async () => {
    setLoading(true);
    try {
      await api.put("/admin/store", store);
      message.success("Cập nhật thành công");
    } catch (error) {
      message.error("Cập nhật thất bại");
    } finally {
      setLoading(false);
    }
  };

  const props = {
    name: "file",
    fileList: store.capacityProfile
      ? [
          {
            uid: "-xxx",
            status: "done",
            url: store.capacityProfile,
            name: store.capacityProfile.split("/upload/")[
              store.capacityProfile.split("/upload/").length - 1
            ],
          },
        ]
      : [],

    async onChange(info) {
      try {
        if (info.file.status === "removed") {
          setStore({ ...store, capacityProfile: "" });
        }
        if (info.file.status === "uploading") {
          const url = await uploadFile(info.file.originFileObj);
          setStore({ ...store, capacityProfile: url });
        }
      } catch (error) {
        message.error("Tải lên thất bại");
      }
    },
    accept: ".doc,.docx,.pdf,image/*",
  };

  return (
    <div data-aos="fade-up" className="h-full">
      {loading ? <Loading /> : null}
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="flex items-center gap-2">
            <UploadOutlined />
            <span>Hồ sơ năng lực</span>
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mt-4 p-5 bg-white h-full">
        <div className="flex justify-center">
          <Upload {...props}>
            <Button
              icon={<UploadOutlined />}
              className="bg-blue-500 text-white flex items-center"
            >
              Tải lên hồ sơ năng lực
            </Button>
          </Upload>
        </div>
        <div className="mt-16 flex justify-end">
          <Button
            type="primary"
            className="bg-blue-500"
            size="large"
            onClick={updateStore}
          >
            Lưu lại
          </Button>
        </div>
      </div>
    </div>
  );
}

Cp.isAdmin = true;
