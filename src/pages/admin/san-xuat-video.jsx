import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Popconfirm } from "antd";
import Link from "next/link";
import {
  PictureOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";
import shortid from "shortid";

export default function Cp() {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getServiceData();
  }, []);

  const getServiceData = async () => {
    try {
      const res = await api.get("/admin/banner");
      setServiceData(res.data);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateServiceData = async () => {
    setLoading(true);
    try {
      const bannerRes = await api.get("/admin/banner");
      for (let index = 0; index < bannerRes.data.length; index++) {
        await api.delete("/admin/banner/" + bannerRes.data[index].id);
      }

      for (let index = 0; index < serviceData.length; index++) {
        await api.post("/admin/banner", { ...serviceData[index], id: null });
      }

      message.success("Cập nhật thành công");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const addBanner = () => {
    const _serviceData = [...serviceData];
    _serviceData.push({
      imageUrl: "",
      id: shortid.generate(),
    });
    setServiceData(_serviceData);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/admin" className="flex items-center gap-2">
              <PictureOutlined />
              <span>Sản xuất video</span>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <div>
            <p className="font-semibold">Banner:</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

Cp.isAdmin = true;
