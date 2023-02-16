import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Tabs, Input } from "antd";
import Link from "next/link";
import {
  PlusOutlined,
  DeploymentUnitOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";
import { Editor } from "@tinymce/tinymce-react";
import imageCompression from "browser-image-compression";
import uploadFile from "../../service/uploadService";

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
      setStore({
        ...store,
        aboutcontent_1: JSON.parse(store.aboutcontent_1),
        aboutImg_1: JSON.parse(store.aboutImg_1),
        abouttitle_2: JSON.parse(store.abouttitle_2),
        aboutcontent_2: JSON.parse(store.aboutcontent_2),
        aboutImg_2: JSON.parse(store.aboutImg_2),
        serviceImg: JSON.parse(store.serviceImg),
        corevalue: JSON.parse(store.corevalue),
      });
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateStore = async () => {
    setLoading(true);
    try {
      await api.put("/admin/store", {
        ...store,
        aboutcontent_1: JSON.stringify(store.aboutcontent_1),
        aboutImg_1: JSON.stringify(store.aboutImg_1),
        abouttitle_2: JSON.stringify(store.abouttitle_2),
        aboutcontent_2: JSON.stringify(store.aboutcontent_2),
        aboutImg_2: JSON.stringify(store.aboutImg_2),
        serviceImg: JSON.stringify(store.serviceImg),
        corevalue: JSON.stringify(store.corevalue),
      });
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

  const handleUploadFile = async (file, folder = "") => {
    let url = "";
    try {
      if (file) {
        const _file = await imageCompression(file, {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1500,
        });
        url = await uploadFile(_file, folder);
      }
      return url;
    } catch (error) {
      message.error(error.message);
    }
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
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center gap-3 items-center">
              <UploadSingleImage
                extraClass="doc"
                image={store.aboutImg_1 ? store.aboutImg_1[0] : ""}
                onChangeUpload={(img) => {
                  if (img) {
                    const _aboutImg_1 = [...store.aboutImg_1];
                    _aboutImg_1[0] = img;
                    setStore({
                      ...store,
                      aboutImg_1: _aboutImg_1,
                    });
                  }
                }}
              />
              <UploadSingleImage
                extraClass="ngang"
                image={store.aboutImg_1 ? store.aboutImg_1[1] : ""}
                onChangeUpload={(img) => {
                  if (img) {
                    const _aboutImg_1 = [...store.aboutImg_1];
                    _aboutImg_1[1] = img;
                    setStore({
                      ...store,
                      aboutImg_1: _aboutImg_1,
                    });
                  }
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="font-semibold uppercase">Về</p>
                <img
                  src="/images/quang-cao-zoom-logo.png"
                  alt=""
                  className="h-10 object-contain"
                />
              </div>
              <Tabs
                defaultActiveKey="1"
                centered
                items={[
                  {
                    key: "1",
                    label: <p className="font-semibold">Tiếng Việt</p>,
                    children: (
                      <Editor
                        apiKey={
                          "4l0v88s9tb22jxc1ina8zg7puwaa00q9uiq7wsu3melv2z65"
                        }
                        value={store?.aboutcontent_1?.content_VN}
                        init={{
                          height: 400,
                          menubar: false,
                          selector: "textarea#file-picker",
                          plugins: "image code link",
                          toolbar:
                            "undo redo | formatselect | link image | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | ",
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          file_picker_callback: function (cb, value, meta) {
                            var input = document.createElement("input");
                            input.setAttribute("type", "file");
                            input.setAttribute("accept", "image/*");
                            input.onchange = async function () {
                              var file = this.files[0];

                              const url = await handleUploadFile(file, "");
                              cb(url, { title: file.name });
                            };

                            input.click();
                          },
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        onEditorChange={(newValue) => {
                          setStore({
                            ...store,
                            aboutcontent_1: {
                              ...store.aboutcontent_1,
                              content_VN: newValue,
                            },
                          });
                        }}
                      />
                    ),
                  },
                  {
                    key: "2",
                    label: <p className="font-semibold">Tiếng Anh</p>,
                    children: (
                      <Editor
                        apiKey={
                          "4l0v88s9tb22jxc1ina8zg7puwaa00q9uiq7wsu3melv2z65"
                        }
                        value={store?.aboutcontent_1?.content_EN}
                        init={{
                          height: 400,
                          menubar: false,
                          selector: "textarea#file-picker",
                          plugins: "image code link",
                          toolbar:
                            "undo redo | formatselect | link image | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | ",
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          file_picker_callback: function (cb, value, meta) {
                            var input = document.createElement("input");
                            input.setAttribute("type", "file");
                            input.setAttribute("accept", "image/*");
                            input.onchange = async function () {
                              var file = this.files[0];

                              const url = await handleUploadFile(file, "");
                              cb(url, { title: file.name });
                            };

                            input.click();
                          },
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        onEditorChange={(newValue) => {
                          setStore({
                            ...store,
                            aboutcontent_1: {
                              ...store.aboutcontent_1,
                              content_EN: newValue,
                            },
                          });
                        }}
                      />
                    ),
                  },
                ]}
                size="small"
              />
            </div>
          </div>

          <div className="mt-16">
            <p className="uppercase font-semibold text-center">
              Giá trị cốt lõi
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
              {store.corevalue
                ? store.corevalue.map((el, index) => {
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
                            onClick={() => deleteCoreValue(index)}
                          ></Button>
                        </div>
                        <div className="flex justify-center m-2">
                          <UploadSingleImage
                            extraClass="icon"
                            image={el.img}
                            onChangeUpload={(img) => {
                              if (img) {
                                const _corevalue = [...store.corevalue];
                                _corevalue[index].img = img;
                                setStore({
                                  ...store,
                                  corevalue: [..._corevalue],
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
                                    const _corevalue = [...store.corevalue];
                                    _corevalue[index].title_VN = e.target.value;
                                    setStore({
                                      ...store,
                                      corevalue: [..._corevalue],
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
                                    const _corevalue = [...store.corevalue];
                                    _corevalue[index].title_EN = e.target.value;
                                    setStore({
                                      ...store,
                                      corevalue: [..._corevalue],
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
                                    const _corevalue = [...store.corevalue];
                                    _corevalue[index].content_VN =
                                      e.target.value;
                                    setStore({
                                      ...store,
                                      corevalue: [..._corevalue],
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
                                    const _corevalue = [...store.corevalue];
                                    _corevalue[index].content_EN =
                                      e.target.value;
                                    setStore({
                                      ...store,
                                      corevalue: [..._corevalue],
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
                  onClick={addCoreValue}
                >
                  Thêm giá trị cốt lõi
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex justify-center items-center gap-2">
              <p className="uppercase font-semibold text-center">Dịch vụ của</p>
              <img
                src="/images/quang-cao-zoom-logo.png"
                alt=""
                className="h-10 object-contain"
              />
            </div>
            <div className="mt-5">
              <div className="flex justify-center gap-3">
                <UploadSingleImage
                  extraClass="ngang"
                  image={store.serviceImg ? store.serviceImg[0] : ""}
                  onChangeUpload={(img) => {
                    if (img) {
                      const _serviceImg = [...store.serviceImg];
                      _serviceImg[0] = img;
                      setStore({
                        ...store,
                        serviceImg: _serviceImg,
                      });
                    }
                  }}
                />
                <UploadSingleImage
                  extraClass="ngang"
                  image={store.serviceImg ? store.serviceImg[1] : ""}
                  onChangeUpload={(img) => {
                    if (img) {
                      const _serviceImg = [...store.serviceImg];
                      _serviceImg[1] = img;
                      setStore({
                        ...store,
                        serviceImg: _serviceImg,
                      });
                    }
                  }}
                />
              </div>
              <div className="flex justify-center gap-3 mt-3">
                <UploadSingleImage
                  extraClass="ngang"
                  image={store.serviceImg ? store.serviceImg[2] : ""}
                  onChangeUpload={(img) => {
                    if (img) {
                      const _serviceImg = [...store.serviceImg];
                      _serviceImg[2] = img;
                      setStore({
                        ...store,
                        serviceImg: _serviceImg,
                      });
                    }
                  }}
                />
                <UploadSingleImage
                  extraClass="ngang"
                  image={store.serviceImg ? store.serviceImg[3] : ""}
                  onChangeUpload={(img) => {
                    if (img) {
                      const _serviceImg = [...store.serviceImg];
                      _serviceImg[3] = img;
                      setStore({
                        ...store,
                        serviceImg: _serviceImg,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <section className="mt-16 z-10 ">
            <div
              className="p-5 rounded-xl lg:rounded-3xl relative"
              style={{ background: "rgba(56, 249, 215, 0.3)" }}
            >
              <Tabs
                items={[
                  {
                    key: "1",
                    label: `Tiêu đề tiếng Việt`,
                    children: (
                      <Input.TextArea
                        value={store?.abouttitle_2?.title_VN}
                        className="w-1/2 font-semibold text-lg"
                        onChange={(e) => {
                          setStore({
                            ...store,
                            abouttitle_2: {
                              ...store.abouttitle_2,
                              title_VN: e.target.value,
                            },
                          });
                        }}
                      />
                    ),
                  },
                  {
                    key: "2",
                    label: `Tiêu đề tiếng Anh`,
                    children: (
                      <Input.TextArea
                        value={store?.abouttitle_2?.title_EN}
                        className="w-1/2 font-semibold text-lg"
                        onChange={(e) => {
                          setStore({
                            ...store,
                            abouttitle_2: {
                              ...store.abouttitle_2,
                              title_EN: e.target.value,
                            },
                          });
                        }}
                      />
                    ),
                  },
                ]}
              />
              <Tabs
                className="mt-2"
                items={[
                  {
                    key: "1",
                    label: `Nội dung tiếng Việt`,
                    children: (
                      <Input.TextArea
                        rows={4}
                        value={store?.aboutcontent_2?.content_VN}
                        className="w-1/2"
                        onChange={(e) => {
                          setStore({
                            ...store,
                            aboutcontent_2: {
                              ...store.aboutcontent_2,
                              content_VN: e.target.value,
                            },
                          });
                        }}
                      />
                    ),
                  },
                  {
                    key: "2",
                    label: `Nội dung tiếng Anh`,
                    children: (
                      <Input.TextArea
                        rows={4}
                        value={store?.aboutcontent_2?.content_EN}
                        className="w-1/2"
                        onChange={(e) => {
                          setStore({
                            ...store,
                            aboutcontent_2: {
                              ...store.aboutcontent_2,
                              content_EN: e.target.value,
                            },
                          });
                        }}
                      />
                    ),
                  },
                ]}
              />
              <div className="mt-5 text-center lg:text-left">
                <button className="bg-[#e40900] px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full opacity-20 cursor-auto">
                  {"Liên hệ với chúng tôi"}
                </button>
              </div>
              <div className="absolute right-[2%] top-[30%] flex items-center gap-3">
                <UploadSingleImage
                  extraClass="ngang"
                  image={store.aboutImg_2 ? store.aboutImg_2[0] : ""}
                  onChangeUpload={(img) => {
                    console.log(img);
                    if (img) {
                      const _aboutImg_2 = [...store.aboutImg_2];
                      _aboutImg_2[0] = img;
                      setStore({
                        ...store,
                        aboutImg_2: _aboutImg_2,
                      });
                    }
                  }}
                />
                <UploadSingleImage
                  extraClass="doc"
                  image={store.aboutImg_2 ? store.aboutImg_2[1] : ""}
                  onChangeUpload={(img) => {
                    if (img) {
                      const _aboutImg_2 = [...store.aboutImg_2];
                      _aboutImg_2[1] = img;
                      setStore({
                        ...store,
                        aboutImg_2: _aboutImg_2,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </section>

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
