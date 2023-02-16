import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Tabs, Input } from "antd";
import {
  DeploymentUnitOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";
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
        return {
          ...el,
          projectImg: el.projectImg ? JSON.parse(el.projectImg) : [],
        };
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

  const addProjectImg = (serviceIndex) => {
    const _services = [...services];
    _services[serviceIndex].projectImg.push({ img: "", description_VN: "", description_EN: "" });
    setServices(_services);
  };

  const deleteProjectImg = (serviceIndex, projectImgIndex) => {
    const _services = [...services];
    _services[serviceIndex].projectImg.splice(projectImgIndex, 1);
    setServices(_services);
  };

  const renderTabItems = services.map((el, index) => {
    return {
      key: index,
      label: <p className="font-semibold">{el.name_VN}</p>,
      children: (
        <div className="flex flex-wrap gap-4">
          {el.projectImg.map((item, idx) => {
            return (
              <div className="relative">
                <div className="absolute right-[-10px] top-[-10px] z-10">
                  <Button
                    className=""
                    type="primary"
                    danger
                    size="small"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    onClick={() => deleteProjectImg(index, idx)}
                  ></Button>
                </div>
                <UploadSingleImage
                  extraClass="ngang large"
                  image={item.img}
                  onChangeUpload={(img) => {
                    const _services = [...services];
                    _services[index].projectImg[idx].img = img;
                    setServices(_services);
                  }}
                />
                <Tabs
                  centered
                  defaultActiveKey="1"
                  items={[
                    {
                      key: "1",
                      label: (
                        <p className="font-semibold">
                          Mô tả tiếng Việt
                          <span className="text-red-500">*</span>
                        </p>
                      ),
                      children: (
                        <div className="flex justify-center">
                          <Input.TextArea
                            className="w-[300px] mt-2 block"
                            placeholder="Mô tả tiếng Việt"
                            value={item.description_VN}
                            onChange={(e) => {
                              const _services = [...services];
                              _services[index].projectImg[idx].description_VN =
                                e.target.value;
                              setServices(_services);
                            }}
                          />
                        </div>
                      ),
                    },
                    {
                      key: "2",
                      label: (
                        <p className="font-semibold">
                          Mô tả tiếng Anh
                          <span className="text-red-500">*</span>
                        </p>
                      ),
                      children: (
                        <div className="flex justify-center">
                          <Input.TextArea
                            className="w-[300px] mt-2 block"
                            placeholder="Mô tả tiếng Anh"
                            value={item.description_EN}
                            onChange={(e) => {
                              const _services = [...services];
                              _services[index].projectImg[idx].description_EN =
                                e.target.value;
                              setServices(_services);
                            }}
                          />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            );
          })}
          <div>
            <Button
              icon={<PlusOutlined />}
              type="primary"
              className="border-0 bg-green-500 hover:bg-green-400 focus:bg-green-400 flex items-center"
              onClick={() => addProjectImg(index)}
            >
              Thêm hình ảnh
            </Button>
          </div>
        </div>
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
            tabPosition="left"
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
