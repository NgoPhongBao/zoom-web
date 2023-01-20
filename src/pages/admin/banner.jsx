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

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    try {
      const res = await api.get("/admin/banner");
      setBanners(res.data);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateBanners = async () => {
    setLoading(true);
    try {
      const bannerRes = await api.get("/admin/banner");
      for (let index = 0; index < bannerRes.data.length; index++) {
        await api.delete("/admin/banner/" + bannerRes.data[index].id);
      }

      for (let index = 0; index < banners.length; index++) {
        await api.post("/admin/banner", { ...banners[index], id: null });
      }

      message.success("Cập nhật thành công");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const addBanner = () => {
    const _banners = [...banners];
    _banners.push({
      imageUrl: "",
      id: shortid.generate(),
    });
    setBanners(_banners);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/admin" className="flex items-center gap-2">
              <PictureOutlined />
              <span>Banner trang chủ</span>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {banners.map((el, index) => {
              return (
                <div
                  key={el.id}
                  className="flex justify-center items-center w-full gap-3"
                >
                  <UploadSingleImage
                    extraClass="banner"
                    image={el.imageUrl}
                    onChangeUpload={(img) => {
                      const _banners = [...banners];
                      _banners[index].imageUrl = img;
                      setBanners(_banners);
                    }}
                  />

                  <Button
                    shape="circle"
                    icon={<DeleteOutlined className="text-white" />}
                    className="bg-red-500 hover:bg-red-400 focus:bg-red-500 border-0"
                    onClick={() => {
                      setBanners(banners.filter((item) => item.id !== el.id));
                    }}
                  />
                </div>
              );
            })}
            <div className="w-full flex justify-center mt-5">
              <Button
                icon={<PlusOutlined />}
                type="primary"
                className="bg-green-500 hover:bg-green-400 focus:bg-green-500 border-0 flex items-center"
                onClick={addBanner}
              >
                Thêm banner
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500"
              size="large"
              onClick={updateBanners}
            >
              Lưu lại
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

Banner.isAdmin = true;
