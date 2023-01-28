import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Tabs } from "antd";
import Link from "next/link";
import { DeploymentUnitOutlined } from "@ant-design/icons";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";
import UploadMultipleImage from "../../admin-components/common/UpdateMultipleImage";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";

export default function Cp() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    try {
      const res = await api.get("/admin/service");
      const _services = res.data.map((el) => {
        return { ...el, projectImg: JSON.parse(el.projectImg) };
      });
      setServices(_services);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateServices = async () => {
    setLoading(true);
    try {
      for (let i = 0; i < services.length; i++) {
        await api.put("/admin/service/" + services[i].id, {
          ...services[i],
          projectImg: JSON.stringify(services[i].projectImg),
        });
      }
      message.success("Cập nhật thành công");
    } catch (error) {
      message.error("Cập nhật thất bại");
    } finally {
      setLoading(false);
    }
  };

  const renderTabItems = services.map((el, index) => {
    return {
      key: index,
      label: <p className="font-semibold">{el.name_VN}</p>,
      children: (
        <UploadMultipleImage
          fileList={el.projectImg}
          onChange={(images) => {
            const _services = [...services];
            _services[index].projectImg = images;
            setServices(_services);
          }}
        />
      ),
    };
  });

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="flex items-center gap-2">
              <DeploymentUnitOutlined />
              <span>Nội dung trang dự án</span>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <Tabs
            defaultActiveKey="1"
            centered
            items={renderTabItems}
            size="small"
          />
          <div className="mt-16 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500"
              size="large"
              onClick={updateServices}
            >
              Lưu lại
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

Cp.isAdmin = true;
