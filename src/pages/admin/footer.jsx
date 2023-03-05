import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Tabs, Input } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";

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

  const addCoreValue = () => {
    setStore({
      ...store,
      corevalue: [
        ...store.corevalue,
        {
          img: "",
          title_VN: "",
          title_EN: "",
          content_VN: "",
          content_EN: "",
        },
      ],
    });
  };

  const deleteCoreValue = (index) => {
    const _corevalue = [...store.corevalue];
    _corevalue.splice(index, 1);
    setStore({
      ...store,
      corevalue: [..._corevalue],
    });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="flex items-center gap-2">
              <DeploymentUnitOutlined />
              <span>Nội dung trang Về Chúng Tôi</span>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <div className="">
            <div>
              <img
                src="/images/quang-cao-zoom-logo.png"
                alt="logo"
                className="h-16 lg:h-20 object-contain mx-auto"
              />
              <Tabs
                centered
                items={[
                  {
                    key: "1",
                    label: "Slogan tiếng Việt",
                    children: (
                      <Input
                        className="w-[500px] block mx-auto"
                        value={store.slogan_VN}
                        onChange={(e) => {
                          setStore({
                            ...store,
                            slogan_VN: e.target.value,
                          });
                        }}
                      />
                    ),
                  },
                  {
                    key: "2",
                    label: "Slogan tiếng Anh",
                    children: (
                      <Input
                        className="w-[500px] block mx-auto"
                        value={store.slogan_EN}
                        onChange={(e) => {
                          setStore({
                            ...store,
                            slogan_EN: e.target.value,
                          });
                        }}
                      />
                    ),
                  },
                ]}
              />
            </div>

            <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
              {/* gioi thieu */}
              <div className="flex gap-4 w-full">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconIntro}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconIntro: img,
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex-auto">
                  <p className="font-bold text-lg">Giới thiệu</p>
                  <Tabs
                    centered
                    items={[
                      {
                        key: "1",
                        label: "Việt",
                        children: (
                          <Input.TextArea
                            rows={8}
                            className="w-full"
                            value={store.intro_VN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                intro_VN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                      {
                        key: "2",
                        label: "Anh",
                        children: (
                          <Input.TextArea
                            rows={8}
                            className="w-full"
                            value={store.intro_EN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                intro_EN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              {/* lien he */}
              <div className="flex gap-4">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconContact}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconContact: img,
                        });
                      }
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Liên hệ</p>
                  <p className="my-1 flex gap-2">
                    <span className="font-bold underline underline-offset-4">
                      Hotline:
                    </span>{" "}
                    <Input
                      className="flex-auto"
                      value={store.hotLine}
                      onChange={(e) => {
                        setStore({
                          ...store,
                          hotLine: e.target.value,
                        });
                      }}
                    />
                  </p>
                  <p className="my-1 flex gap-3">
                    <span className="font-bold underline underline-offset-4">
                      Email:
                    </span>{" "}
                    <Input
                      className="flex-auto"
                      value={store.email}
                      onChange={(e) => {
                        setStore({
                          ...store,
                          email: e.target.value,
                        });
                      }}
                    />
                  </p>
                  <p className="my-1 flex gap-3">
                    <span className="font-bold underline underline-offset-4">
                      Facebook:
                    </span>{" "}
                    <Input
                      className="flex-auto"
                      value={store.faceBook}
                      onChange={(e) => {
                        setStore({
                          ...store,
                          faceBook: e.target.value,
                        });
                      }}
                    />
                  </p>
                  <p className="my-1 flex gap-3">
                    <span className="font-bold underline underline-offset-4">
                      Giờ làm việc:
                    </span>{" "}
                    <Input
                      className="flex-auto"
                      value={store.openTime}
                      onChange={(e) => {
                        setStore({
                          ...store,
                          openTime: e.target.value,
                        });
                      }}
                    />
                  </p>
                </div>
              </div>
              {/* cong viec */}
              <div className="flex gap-4">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconJobInfo}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconJobInfo: img,
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex-auto">
                  <p className="font-bold text-lg">Công việc</p>
                  <Tabs
                    centered
                    items={[
                      {
                        key: "1",
                        label: "Việt",
                        children: (
                          <Input.TextArea
                            rows={8}
                            className="w-full"
                            value={store.jobInfo_VN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                jobInfo_VN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                      {
                        key: "2",
                        label: "Anh",
                        children: (
                          <Input.TextArea
                            rows={8}
                            className="w-full"
                            value={store.jobInfo_EN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                jobInfo_EN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              {/* doi ngu nhan su */}
              <div className="flex gap-4">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconTeamInfo}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconTeamInfo: img,
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex-auto">
                  <p className="font-bold text-lg">Đội ngũ nhân sự</p>
                  <Tabs
                    centered
                    items={[
                      {
                        key: "1",
                        label: "Việt",
                        children: (
                          <Input.TextArea
                            rows={8}
                            className="w-full"
                            value={store.teamInfo_VN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                teamInfo_VN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                      {
                        key: "2",
                        label: "Anh",
                        children: (
                          <Input.TextArea
                            rows={8}
                            className="w-full"
                            value={store.teamInfo_EN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                teamInfo_EN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
              {/* phim truong */}
              <div className="flex gap-4">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconAddress}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconAddress: img,
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex-auto">
                  <p className="font-bold text-lg">Phim trường ZoOm media</p>
                  <p className="text-center font-semibold mt-4">Địa chỉ 1</p>
                  <Tabs
                    centered
                    items={[
                      {
                        key: "1",
                        label: "Việt",
                        children: (
                          <Input.TextArea
                            className="w-full"
                            value={store.address1_VN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                address1_VN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                      {
                        key: "2",
                        label: "Anh",
                        children: (
                          <Input.TextArea
                            className="w-full"
                            value={store.address1_EN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                address1_EN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                  <p className="text-center font-semibold mt-4">Địa chỉ 2</p>
                  <Tabs
                    centered
                    items={[
                      {
                        key: "1",
                        label: "Việt",
                        children: (
                          <Input.TextArea
                            className="w-full"
                            value={store.address2_VN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                address2_VN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                      {
                        key: "2",
                        label: "Anh",
                        children: (
                          <Input.TextArea
                            className="w-full"
                            value={store.address2_EN}
                            onChange={(e) => {
                              setStore({
                                ...store,
                                address2_EN: e.target.value,
                              });
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              {/* email */}
              <div className="flex gap-4">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconEmail}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconEmail: img,
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex-auto">
                  <Input
                    className="font-semibold text-lg"
                    value={store.email}
                    onChange={(e) => {
                      setStore({
                        ...store,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              {/* sdt */}
              <div className="flex gap-4">
                <div>
                  <UploadSingleImage
                    extraClass="icon"
                    image={store.iconHotline}
                    onChangeUpload={(img) => {
                      if (img) {
                        setStore({
                          ...store,
                          iconHotline: img,
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex-auto">
                  <Input
                    className="font-semibold text-lg"
                    value={store.hotLine}
                    onChange={(e) => {
                      setStore({
                        ...store,
                        hotLine: e.target.value,
                      });
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
              onClick={updateStore}
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
