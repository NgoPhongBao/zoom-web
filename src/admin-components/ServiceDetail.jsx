import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Tabs, Input } from "antd";
import Link from "next/link";
import {
  BorderOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import UploadSingleImage from "./common/UploadSingleImage";
import Loading from "./common/Loading";
import api from "../service/apiService";
import shortid from "shortid";
import { changeToSlug } from "../utils/fn";

export default function ServiceDetail({ serviceType }) {
  const [serviceData, setServiceData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getServiceData();
  }, []);

  const getServiceData = async () => {
    try {
      const res = await api.get("/admin/service");
      let _serviceData = res.data.find((el) => el.type === serviceType) || {};
      setServiceData({
        ..._serviceData,
        valueService: JSON.parse(_serviceData.valueService),
        projectImg: JSON.parse(_serviceData.projectImg),
        videoUrl: JSON.parse(_serviceData.videoUrl),
        contentCollapse_VN: JSON.parse(_serviceData.contentCollapse_VN),
        contentCollapse_EN: JSON.parse(_serviceData.contentCollapse_EN),
      });
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateServiceData = async () => {
    setLoading(true);
    try {
      await api.put("/admin/service/" + serviceData.id, {
        ...serviceData,
        valueService: JSON.stringify(serviceData.valueService),
        projectImg: JSON.stringify(serviceData.projectImg),
        videoUrl: JSON.stringify(serviceData.videoUrl),
        contentCollapse_VN: JSON.stringify(serviceData.contentCollapse_VN),
        contentCollapse_EN: JSON.stringify(serviceData.contentCollapse_EN),
      });
      message.success("Cập nhật thành công");
    } catch (error) {
      message.error("Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  const addValueService = () => {
    setServiceData({
      ...serviceData,
      valueService: [
        ...serviceData.valueService,
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

  const deletevalueService = (index) => {
    const _valueService = [...serviceData.valueService];
    _valueService.splice(index, 1);
    setServiceData({
      ...serviceData,
      valueService: [..._valueService],
    });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="flex items-center gap-2">
              <BorderOutlined />
              <span>{serviceData.name_VN}</span>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <p className="font-semibold mb-2">
            Tên dịch vụ<span className="text-red-500">*</span>
          </p>
          <div className="ml-5">
            <Tabs
              defaultActiveKey="1"
              centered
              items={[
                {
                  key: "1",
                  label: (
                    <p className="font-semibold">
                      Tên tiếng Việt<span className="text-red-500">*</span>
                    </p>
                  ),
                  children: (
                    <div className="flex justify-center">
                      <Input
                        placeholder="Tên tiếng Việt"
                        className="w-96"
                        value={serviceData.name_VN}
                        onChange={(e) => {
                          setServiceData({
                            ...serviceData,
                            name_VN: e.target.value,
                            url: changeToSlug(e.target.value),
                          });
                        }}
                      />
                    </div>
                  ),
                },
                {
                  key: "2",
                  label: (
                    <p className="font-semibold">
                      Tên tiếng Anh<span className="text-red-500">*</span>
                    </p>
                  ),
                  children: (
                    <div className="flex justify-center">
                      <Input
                        placeholder="Tên tiếng Anh"
                        className="w-96"
                        value={serviceData.name_EN}
                        onChange={(e) => {
                          setServiceData({
                            ...serviceData,
                            name_EN: e.target.value,
                          });
                        }}
                      />
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mt-12">
            <p className="font-semibold mb-2">
              Banner<span className="text-red-500">*</span>
            </p>
            <div className="flex justify-center">
              <UploadSingleImage
                extraClass="banner large"
                image={serviceData.bannerUrl}
                onChangeUpload={(img) => {
                  if (img)
                    setServiceData({
                      ...serviceData,
                      bannerUrl: img,
                    });
                }}
              />
            </div>
          </div>
          <div className="mt-12">
            <p className="font-semibold mb-2">
              Giá trị dịch vụ<span className="text-red-500">*</span>
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {serviceData.valueService
                ? serviceData.valueService.map((el, index) => {
                    return (
                      <div
                        className="border shadow-lg p-4 relative"
                        key={el.img || el._id}
                      >
                        <div className="absolute right-[-10px] top-[-10px]">
                          <Button
                            className=""
                            type="primary"
                            danger
                            size="small"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={() => deletevalueService(index)}
                          ></Button>
                        </div>
                        <div className="flex justify-center m-2">
                          <UploadSingleImage
                            extraClass="icon"
                            image={el.img}
                            onChangeUpload={(img) => {
                              if (img) {
                                const _valueService = [
                                  ...serviceData.valueService,
                                ];
                                _valueService[index].img = img;
                                setServiceData({
                                  ...serviceData,
                                  valueService: [..._valueService],
                                });
                              }
                            }}
                          />
                        </div>

                        <Tabs
                          defaultActiveKey="1"
                          centered
                          sp
                          items={[
                            {
                              key: "1",
                              label: (
                                <p className="font-semibold">
                                  Tiêu đề tiếng Việt
                                  <span className="text-red-500">*</span>
                                </p>
                              ),
                              children: (
                                <Input
                                  placeholder="Tên tiếng Việt"
                                  className="w-72"
                                  value={el.title_VN}
                                  onChange={(e) => {
                                    const _valueService = [
                                      ...serviceData.valueService,
                                    ];
                                    _valueService[index].title_VN =
                                      e.target.value;
                                    setServiceData({
                                      ...serviceData,
                                      valueService: [..._valueService],
                                    });
                                  }}
                                />
                              ),
                            },
                            {
                              key: "2",
                              label: (
                                <p className="font-semibold">
                                  Tiêu đề tiếng Anh
                                  <span className="text-red-500">*</span>
                                </p>
                              ),
                              children: (
                                <Input
                                  placeholder="Tên tiếng Anh"
                                  className="w-72"
                                  value={el.title_EN}
                                  onChange={(e) => {
                                    const _valueService = [
                                      ...serviceData.valueService,
                                    ];
                                    _valueService[index].title_EN =
                                      e.target.value;
                                    setServiceData({
                                      ...serviceData,
                                      valueService: [..._valueService],
                                    });
                                  }}
                                />
                              ),
                            },
                          ]}
                        />
                        <div className="my-4"></div>
                        <Tabs
                          defaultActiveKey="1"
                          centered
                          sp
                          items={[
                            {
                              key: "1",
                              label: (
                                <p className="font-semibold">
                                  Nội dung tiếng Việt
                                  <span className="text-red-500">*</span>
                                </p>
                              ),
                              children: (
                                <Input.TextArea
                                  rows={5}
                                  placeholder="Tên tiếng Việt"
                                  className="w-72"
                                  value={el.content_VN}
                                  onChange={(e) => {
                                    const _valueService = [
                                      ...serviceData.valueService,
                                    ];
                                    _valueService[index].content_VN =
                                      e.target.value;
                                    setServiceData({
                                      ...serviceData,
                                      valueService: [..._valueService],
                                    });
                                  }}
                                />
                              ),
                            },
                            {
                              key: "2",
                              label: (
                                <p className="font-semibold">
                                  Nội dung tiếng Anh
                                  <span className="text-red-500">*</span>
                                </p>
                              ),
                              children: (
                                <Input.TextArea
                                  rows={5}
                                  placeholder="Tên tiếng Anh"
                                  className="w-72"
                                  value={el.content_EN}
                                  onChange={(e) => {
                                    const _valueService = [
                                      ...serviceData.valueService,
                                    ];
                                    _valueService[index].content_EN =
                                      e.target.value;
                                    setServiceData({
                                      ...serviceData,
                                      valueService: [..._valueService],
                                    });
                                  }}
                                />
                              ),
                            },
                          ]}
                        />
                      </div>
                    );
                  })
                : null}
              <div>
                <Button
                  icon={<PlusOutlined className="flex items-center" />}
                  type="primary"
                  className="text-white bg-green-500 hover:bg-green-400 focus:bg-green-400 border-0"
                  onClick={addValueService}
                >
                  Thêm giá trị dịch vụ
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="font-semibold mb-2">
              Nội dung accordion<span className="text-red-500">*</span>
            </p>
            <div>
              <Tabs
                centered
                defaultActiveKey="1"
                items={[
                  {
                    key: "1",
                    label: (
                      <p className="font-semibold">
                        Tiêu đề tiếng Việt
                        <span className="text-red-500">*</span>
                      </p>
                    ),
                    children: (
                      <div className="flex justify-center">
                        <Input
                          placeholder="Tiêu đề"
                          className="w-96"
                          value={serviceData.collapseTitle_VN}
                          onChange={(e) => {
                            setServiceData({
                              ...serviceData,
                              collapseTitle_VN: e.target.value,
                            });
                          }}
                        />
                      </div>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <p className="font-semibold">
                        Tiêu đề tiếng Anh<span className="text-red-500">*</span>
                      </p>
                    ),
                    children: (
                      <div className="flex justify-center">
                        <Input
                          placeholder="Tiêu đề"
                          className="w-96"
                          value={serviceData.collapseTitle_EN}
                          onChange={(e) => {
                            setServiceData({
                              ...serviceData,
                              collapseTitle_EN: e.target.value,
                            });
                          }}
                        />
                      </div>
                    ),
                  },
                ]}
              />
              <div className="my-3"></div>
              <Tabs
                centered
                defaultActiveKey="1"
                items={[
                  {
                    key: "1",
                    label: (
                      <p className="font-semibold">
                        Nội dung tiếng Việt
                        <span className="text-red-500">*</span>
                      </p>
                    ),
                    children: (
                      <>
                        {serviceData.contentCollapse_VN
                          ? serviceData.contentCollapse_VN.map((el, index) => {
                              return (
                                <div key={index} className="my-4 ">
                                  <div className="lg:w-[700px] relative mx-auto border p-4 rounded-lg shadow-lg">
                                    <div className="absolute right-[-10px] top-[-10px] z-10">
                                      <Button
                                        className=""
                                        type="primary"
                                        danger
                                        size="small"
                                        shape="circle"
                                        icon={<DeleteOutlined />}
                                        onClick={() => {
                                          const _contentCollapse_VN = [
                                            ...serviceData.contentCollapse_VN,
                                          ];
                                          _contentCollapse_VN.splice(index, 1);
                                          setServiceData({
                                            ...serviceData,
                                            contentCollapse_VN: [
                                              ..._contentCollapse_VN,
                                            ],
                                          });
                                        }}
                                      ></Button>
                                    </div>
                                    <div className="m-1 flex justify-center">
                                      <Input
                                        className="font-semibold"
                                        placeholder="Tiêu đề"
                                        value={el.title}
                                        onChange={(e) => {
                                          const _contentCollapse_VN = [
                                            ...serviceData.contentCollapse_VN,
                                          ];
                                          _contentCollapse_VN[index].title =
                                            e.target.value;
                                          setServiceData({
                                            ...serviceData,
                                            contentCollapse_VN:
                                              _contentCollapse_VN,
                                          });
                                        }}
                                      />
                                    </div>
                                    <div className="m-1 flex justify-center">
                                      <Input.TextArea
                                        rows={3}
                                        placeholder="Nội dung"
                                        value={el.content}
                                        onChange={(e) => {
                                          const _contentCollapse_VN = [
                                            ...serviceData.contentCollapse_VN,
                                          ];
                                          _contentCollapse_VN[index].content =
                                            e.target.value;
                                          setServiceData({
                                            ...serviceData,
                                            contentCollapse_VN: [
                                              ..._contentCollapse_VN,
                                            ],
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          : null}
                        <div className="flex justify-center">
                          <Button
                            icon={
                              <PlusOutlined className="flex items-center" />
                            }
                            type="primary"
                            className="text-white bg-green-500 hover:bg-green-400 focus:bg-green-400 border-0"
                            onClick={() => {
                              const _contentCollapse_VN = [
                                ...serviceData.contentCollapse_VN,
                              ];
                              setServiceData({
                                ...serviceData,
                                contentCollapse_VN: [
                                  ..._contentCollapse_VN,
                                  {
                                    title: "",
                                    content: "",
                                  },
                                ],
                              });
                            }}
                          >
                            Thêm nội dung
                          </Button>
                        </div>
                      </>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <p className="font-semibold">
                        Nội dung tiếng Anh
                        <span className="text-red-500">*</span>
                      </p>
                    ),
                    children: (
                      <>
                        {serviceData.contentCollapse_EN
                          ? serviceData.contentCollapse_EN.map((el, index) => {
                              return (
                                <div key={index} className="my-4 ">
                                  <div className="lg:w-[700px] relative mx-auto border p-4 rounded-lg shadow-lg">
                                    <div className="absolute right-[-10px] top-[-10px] z-10">
                                      <Button
                                        className=""
                                        type="primary"
                                        danger
                                        size="small"
                                        shape="circle"
                                        icon={<DeleteOutlined />}
                                        onClick={() => {
                                          const _contentCollapse_EN = [
                                            ...serviceData.contentCollapse_EN,
                                          ];
                                          _contentCollapse_EN.splice(index, 1);
                                          setServiceData({
                                            ...serviceData,
                                            contentCollapse_EN: [
                                              ..._contentCollapse_EN,
                                            ],
                                          });
                                        }}
                                      ></Button>
                                    </div>
                                    <div className="m-1 flex justify-center">
                                      <Input
                                        className="font-semibold"
                                        placeholder="Tiêu đề"
                                        value={el.title}
                                        onChange={(e) => {
                                          const _contentCollapse_EN = [
                                            ...serviceData.contentCollapse_EN,
                                          ];
                                          _contentCollapse_EN[index].title =
                                            e.target.value;
                                          setServiceData({
                                            ...serviceData,
                                            contentCollapse_EN: [
                                              ..._contentCollapse_EN,
                                            ],
                                          });
                                        }}
                                      />
                                    </div>
                                    <div className="m-1 flex justify-center">
                                      <Input.TextArea
                                        rows={3}
                                        placeholder="Nội dung"
                                        value={el.content}
                                        onChange={(e) => {
                                          const _contentCollapse_EN = [
                                            ...serviceData.contentCollapse_EN,
                                          ];
                                          _contentCollapse_EN[index].content =
                                            e.target.value;
                                          setServiceData({
                                            ...serviceData,
                                            contentCollapse_EN: [
                                              ..._contentCollapse_EN,
                                            ],
                                          });
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          : null}
                        <div className="flex justify-center">
                          <Button
                            icon={
                              <PlusOutlined className="flex items-center" />
                            }
                            type="primary"
                            className="text-white bg-green-500 hover:bg-green-400 focus:bg-green-400 border-0"
                            onClick={() => {
                              const _contentCollapse_EN = [
                                ...serviceData.contentCollapse_EN,
                              ];
                              setServiceData({
                                ...serviceData,
                                contentCollapse_EN: [
                                  ..._contentCollapse_EN,
                                  {
                                    title: "",
                                    content: "",
                                  },
                                ],
                              });
                            }}
                          >
                            Thêm nội dung
                          </Button>
                        </div>
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          <div className="mt-12">
            <p className="font-semibold mb-2">
              URL video dự án<span className="text-red-500">*</span>
            </p>
            <div>
              {serviceData.videoUrl
                ? serviceData.videoUrl.map((el, index) => {
                    return (
                      <div className="my-3" key={index}>
                        <div className="lg:w-[700px] mx-auto p-4 border shadow-lg rounded-lg relative">
                          <div className="absolute right-[-10px] top-[-10px] z-10">
                            <Button
                              className=""
                              type="primary"
                              danger
                              shape="circle"
                              size="small"
                              icon={<DeleteOutlined />}
                              onClick={() => {
                                const _videoUrl = [...serviceData.videoUrl];
                                _videoUrl.splice(index, 1);
                                setServiceData({
                                  ...serviceData,
                                  videoUrl: [..._videoUrl],
                                });
                              }}
                            ></Button>
                          </div>
                          <Input
                            placeholder="URL"
                            value={!el.includes("key-") ? el : null}
                            onChange={(e) => {
                              const _videoUrl = [...serviceData.videoUrl];
                              _videoUrl[index] = e.target.value;
                              setServiceData({
                                ...serviceData,
                                videoUrl: [..._videoUrl],
                              });
                            }}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="flex justify-center">
              <Button
                icon={<PlusOutlined className="flex items-center" />}
                type="primary"
                className="text-white bg-green-500 hover:bg-green-400 focus:bg-green-400 border-0"
                onClick={() => {
                  const _videoUrl = [
                    ...serviceData.videoUrl,
                    `key-${shortid.generate()}`,
                  ];
                  setServiceData({
                    ...serviceData,
                    videoUrl: [..._videoUrl],
                  });
                }}
              >
                Thêm URL
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500"
              size="large"
              onClick={updateServiceData}
            >
              Lưu lại
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
