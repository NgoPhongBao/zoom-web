import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Select } from "antd";
import Link from "next/link";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";

const Admin = () => {
  const [homeServices, setHomeServices] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHomeServices();
    getServices();
  }, []);

  const getHomeServices = async () => {
    try {
      const res = await api.get("/admin/serviceHome");
      const dataFormated = res.data.map((el) => {
        return { ...el, content: JSON.parse(el.content) };
      });
      setHomeServices(dataFormated);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateHomeService = async () => {
    setLoading(true);
    try {
      for (let index = 0; index < homeServices.length; index++) {
        await api.put("/admin/serviceHome/" + homeServices[index].id, {
          ...homeServices[index],
          content: JSON.stringify(homeServices[index].content),
        });
      }
      message.success("Cập nhật thành công");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getServices = async () => {
    try {
      const res = await api.get("/admin/service");
      setServices(res.data);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/admin" className="flex items-center gap-2">
              <HomeOutlined />
              <span>Nội dung trang chủ</span>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          {/* <div className="flex justify-end">
          <Button type="primary" className="bg-blue-500" size="large">
            Lưu lại
          </Button>
        </div> */}
          <div className="mt-10">
            <p className="uppercase text-center font-semibold">
              TỔ CHỨC SỰ KIỆN - SẢN XUẤT GAMESHOW TRỌN GÓI
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
              <div>
                <UploadSingleImage
                  extraClass="ngang"
                  image={
                    homeServices.find((el) => el.kind === "GAMESHOW")
                      ?.content[0].img
                  }
                  onChangeUpload={(img) => {
                    if (img) {
                      const index = homeServices.findIndex(
                        (el) => el.kind === "GAMESHOW"
                      );
                      if (index >= 0) {
                        const _homeServices = [...homeServices];
                        _homeServices[index].content[0].img = img;
                        setHomeServices(_homeServices);
                      }
                    }
                  }}
                />
              </div>
              <div>
                <UploadSingleImage
                  extraClass="doc"
                  image={
                    homeServices.find((el) => el.kind === "GAMESHOW")
                      ?.content[1].img
                  }
                  onChangeUpload={(img) => {
                    if (img) {
                      const index = homeServices.findIndex(
                        (el) => el.kind === "GAMESHOW"
                      );
                      if (index >= 0) {
                        const _homeServices = [...homeServices];
                        _homeServices[index].content[1].img = img;
                        setHomeServices(_homeServices);
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="my-10 h-[1px] w-3/4 mx-auto bg-blue-500" />
          <div>
            <p className="uppercase text-center font-semibold">
              SẢN XUẤT TVC - KV - BILLBOARD
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <UploadSingleImage
                extraClass="banner"
                image={
                  homeServices.find((el) => el.kind === "TVC")?.content[0].img
                }
                onChangeUpload={(img) => {
                  if (img) {
                    const index = homeServices.findIndex(
                      (el) => el.kind === "TVC"
                    );
                    if (index >= 0) {
                      const _homeServices = [...homeServices];
                      _homeServices[index].content[0].img = img;
                      setHomeServices(_homeServices);
                    }
                  }
                }}
              />
              <UploadSingleImage
                extraClass="banner"
                image={
                  homeServices.find((el) => el.kind === "TVC")?.content[1].img
                }
                onChangeUpload={(img) => {
                  if (img) {
                    const index = homeServices.findIndex(
                      (el) => el.kind === "TVC"
                    );
                    if (index >= 0) {
                      const _homeServices = [...homeServices];
                      _homeServices[index].content[1].img = img;
                      setHomeServices(_homeServices);
                    }
                  }
                }}
              />
              <UploadSingleImage
                extraClass="banner"
                image={
                  homeServices.find((el) => el.kind === "TVC")?.content[2].img
                }
                onChangeUpload={(img) => {
                  if (img) {
                    const index = homeServices.findIndex(
                      (el) => el.kind === "TVC"
                    );
                    if (index >= 0) {
                      const _homeServices = [...homeServices];
                      _homeServices[index].content[2].img = img;
                      setHomeServices(_homeServices);
                    }
                  }
                }}
              />
              {/* <Button
              icon={<PlusOutlined />}
              type="primary"
              className="bg-blue-500"
            /> */}
            </div>
          </div>
          <div className="my-10 h-[1px] w-3/4 mx-auto bg-blue-500" />
          <div>
            <p className="uppercase text-center font-semibold">LIVESTREAM</p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <div className="flex justify-center items-center gap-3 mt-4">
                <UploadSingleImage
                  extraClass="ngang"
                  image={
                    homeServices.find((el) => el.kind === "LIVESTREAM")
                      ?.content[0].img
                  }
                  onChangeUpload={(img) => {
                    if (img) {
                      const index = homeServices.findIndex(
                        (el) => el.kind === "LIVESTREAM"
                      );
                      if (index >= 0) {
                        const _homeServices = [...homeServices];
                        _homeServices[index].content[0].img = img;
                        setHomeServices(_homeServices);
                      }
                    }
                  }}
                />
                <UploadSingleImage
                  extraClass="ngang"
                  image={
                    homeServices.find((el) => el.kind === "LIVESTREAM")
                      ?.content[1].img
                  }
                  onChangeUpload={(img) => {
                    if (img) {
                      const index = homeServices.findIndex(
                        (el) => el.kind === "LIVESTREAM"
                      );
                      if (index >= 0) {
                        const _homeServices = [...homeServices];
                        _homeServices[index].content[1].img = img;
                        setHomeServices(_homeServices);
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="my-10 h-[1px] w-3/4 mx-auto bg-blue-500" />

          {/* rental */}
          <div>
            <p className="uppercase text-center font-semibold">
              Cho thuê PHIM TRƯỜNG - THIẾT BỊ QUAY PHIM - ÂM THANH - ÁNH SÁNG
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <div>
                <div>
                  <UploadSingleImage
                    extraClass="ngang large"
                    image={
                      homeServices.find((el) => el.kind === "RENTAL")
                        ?.content[0].img
                    }
                    onChangeUpload={(img) => {
                      if (img) {
                        const index = homeServices.findIndex(
                          (el) => el.kind === "RENTAL"
                        );
                        if (index >= 0) {
                          const _homeServices = [...homeServices];
                          _homeServices[index].content[0].img = img;
                          setHomeServices(_homeServices);
                        }
                      }
                    }}
                  />
                  <div className="mt-1">
                    <p className="text-xs">Link đến dịch vụ:</p>
                    <Select
                      className="w-[300px] text-xs mx-auto"
                      placeholder="Chọn dịch vụ"
                      value={
                        homeServices.find((el) => el.kind === "RENTAL")
                          ?.content[0].type
                      }
                      onChange={(value) => {
                        const index = homeServices.findIndex(
                          (el) => el.kind === "RENTAL"
                        );
                        if (index >= 0) {
                          const _homeServices = [...homeServices];
                          _homeServices[index].content[0].type = value;
                          setHomeServices(_homeServices);
                        }
                      }}
                    >
                      {services.map((el) => {
                        return (
                          <Select.Option
                            className="text-xs"
                            value={el.type}
                            key={el.id}
                          >
                            {el.name_VN}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </div>
                </div>
                <div className="flex justify-center mt-3">
                  <div>
                    <UploadSingleImage
                      extraClass="ngang"
                      image={
                        homeServices.find((el) => el.kind === "RENTAL")
                          ?.content[1].img
                      }
                      onChangeUpload={(img) => {
                        if (img) {
                          const index = homeServices.findIndex(
                            (el) => el.kind === "RENTAL"
                          );
                          if (index >= 0) {
                            const _homeServices = [...homeServices];
                            _homeServices[index].content[1].img = img;
                            setHomeServices(_homeServices);
                          }
                        }
                      }}
                    />
                    <div className="mt-1">
                      <p className="text-xs">Link đến dịch vụ:</p>
                      <Select
                        className="w-[150px] text-xs mx-auto"
                        placeholder="Chọn dịch vụ"
                        value={
                          homeServices.find((el) => el.kind === "RENTAL")
                            ?.content[1].type
                        }
                        onChange={(value) => {
                          const index = homeServices.findIndex(
                            (el) => el.kind === "RENTAL"
                          );
                          if (index >= 0) {
                            const _homeServices = [...homeServices];
                            _homeServices[index].content[1].type = value;
                            setHomeServices(_homeServices);
                          }
                        }}
                      >
                        {services.map((el) => {
                          return (
                            <Select.Option
                              className="text-xs"
                              value={el.type}
                              key={el.id}
                            >
                              {el.name_VN}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </div>
                  <div>
                    <UploadSingleImage
                      extraClass="ngang"
                      image={
                        homeServices.find((el) => el.kind === "RENTAL")
                          ?.content[2].img
                      }
                      onChangeUpload={(img) => {
                        if (img) {
                          const index = homeServices.findIndex(
                            (el) => el.kind === "RENTAL"
                          );
                          if (index >= 0) {
                            const _homeServices = [...homeServices];
                            _homeServices[index].content[2].img = img;
                            setHomeServices(_homeServices);
                          }
                        }
                      }}
                    />
                    <div className="mt-1">
                      <p className="text-xs">Link đến dịch vụ:</p>
                      <Select
                        className="w-[150px] text-xs mx-auto"
                        placeholder="Chọn dịch vụ"
                        value={
                          homeServices.find((el) => el.kind === "RENTAL")
                            ?.content[2].type
                        }
                        onChange={(value) => {
                          const index = homeServices.findIndex(
                            (el) => el.kind === "RENTAL"
                          );
                          if (index >= 0) {
                            const _homeServices = [...homeServices];
                            _homeServices[index].content[2].type = value;
                            setHomeServices(_homeServices);
                          }
                        }}
                      >
                        {services.map((el) => {
                          return (
                            <Select.Option
                              className="text-xs"
                              value={el.type}
                              key={el.id}
                            >
                              {el.name_VN}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <UploadSingleImage
                    extraClass="banner large"
                    image={
                      homeServices.find((el) => el.kind === "RENTAL")
                        ?.content[3].img
                    }
                    onChangeUpload={(img) => {
                      if (img) {
                        const index = homeServices.findIndex(
                          (el) => el.kind === "RENTAL"
                        );
                        if (index >= 0) {
                          const _homeServices = [...homeServices];
                          _homeServices[index].content[3].img = img;
                          setHomeServices(_homeServices);
                        }
                      }
                    }}
                  />
                  <div className="mt-1">
                    <p className="text-xs">Link đến dịch vụ:</p>
                    <Select
                      className="w-[300px] text-xs mx-auto"
                      placeholder="Chọn dịch vụ"
                      value={
                        homeServices.find((el) => el.kind === "RENTAL")
                          ?.content[3].type
                      }
                      onChange={(value) => {
                        const index = homeServices.findIndex(
                          (el) => el.kind === "RENTAL"
                        );
                        if (index >= 0) {
                          const _homeServices = [...homeServices];
                          _homeServices[index].content[3].type = value;
                          setHomeServices(_homeServices);
                        }
                      }}
                    >
                      {services.map((el) => {
                        return (
                          <Select.Option
                            className="text-xs"
                            value={el.type}
                            key={el.id}
                          >
                            {el.name_VN}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <UploadSingleImage
                  extraClass="doc large"
                  image={
                    homeServices.find((el) => el.kind === "RENTAL")?.content[4]
                      .img
                  }
                  onChangeUpload={(img) => {
                    if (img) {
                      const index = homeServices.findIndex(
                        (el) => el.kind === "RENTAL"
                      );
                      if (index >= 0) {
                        const _homeServices = [...homeServices];
                        _homeServices[index].content[4].img = img;
                        setHomeServices(_homeServices);
                      }
                    }
                  }}
                />
                <div className="mt-1">
                  <p className="text-xs">Link đến dịch vụ:</p>
                  <Select
                    className="w-[300px] text-xs mx-auto"
                    placeholder="Chọn dịch vụ"
                    value={
                      homeServices.find((el) => el.kind === "RENTAL")
                        ?.content[4].type
                    }
                    onChange={(value) => {
                      const index = homeServices.findIndex(
                        (el) => el.kind === "RENTAL"
                      );
                      if (index >= 0) {
                        const _homeServices = [...homeServices];
                        _homeServices[index].content[4].type = value;
                        setHomeServices(_homeServices);
                      }
                    }}
                  >
                    {services.map((el) => {
                      return (
                        <Select.Option
                          className="text-xs"
                          value={el.type}
                          key={el.id}
                        >
                          {el.name_VN}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          {/* rental */}
          <div className="my-10 h-[1px] w-3/4 mx-auto bg-blue-500" />
          <div>
            <p className="uppercase text-center font-semibold">
              THIẾT KẾ - THI CÔNG SÂN KHẤU
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <div className="flex justify-center items-center gap-3 mt-4">
                <div>
                  <UploadSingleImage
                    extraClass="banner"
                    image={
                      homeServices.find((el) => el.kind === "DESIGN")
                        ?.content[0].img
                    }
                    onChangeUpload={(img) => {
                      if (img) {
                        const index = homeServices.findIndex(
                          (el) => el.kind === "DESIGN"
                        );
                        if (index >= 0) {
                          const _homeServices = [...homeServices];
                          _homeServices[index].content[0].img = img;
                          setHomeServices(_homeServices);
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500"
              size="large"
              onClick={updateHomeService}
            >
              Lưu lại
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Admin.isAdmin = true;

export default Admin;
