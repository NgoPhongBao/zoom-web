import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Popconfirm } from "antd";
import Link from "next/link";
import { ContactsOutlined } from "@ant-design/icons";
import UploadSingleImage from "../../admin-components/common/UploadSingleImage";
import UploadMultipleImage from "../../admin-components/common/UpdateMultipleImage";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";

export default function Cp() {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const res = await api.get("/admin/partner");
      setCustomer({
        ...res.data[0],
        aboutImg: JSON.parse(res.data[0].aboutImg),
        imageUrl: JSON.parse(res.data[0].imageUrl),
      });
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateCustomer = async () => {
    setLoading(true);
    try {
      await api.put("/admin/partner/" + customer.id, {
        ...customer,
        aboutImg: JSON.stringify(customer.aboutImg),
        imageUrl: JSON.stringify(customer.imageUrl),
      });

      message.success("Cập nhật thành công");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/admin" className="flex items-center gap-2">
              <ContactsOutlined />
              <span>Khách hàng</span>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <div>
            <p className="font-semibold">Hình ảnh trang khách hàng:</p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <UploadSingleImage
                extraClass="ngang"
                image={customer?.aboutImg ? customer.aboutImg[0] : ""}
                onChangeUpload={(img) => {
                  if (img) {
                    const _aboutImg = [...customer.aboutImg];
                    _aboutImg[0] = img;
                    setCustomer({ ...customer, aboutImg: _aboutImg });
                  }
                }}
              />
              <UploadSingleImage
                extraClass="doc"
                image={customer?.aboutImg ? customer.aboutImg[1] : ""}
                onChangeUpload={(img) => {
                  if (img) {
                    const _aboutImg = [...customer.aboutImg];
                    _aboutImg[1] = img;
                    setCustomer({ ...customer, aboutImg: _aboutImg });
                  }
                }}
              />
            </div>
          </div>

          <div className="mt-5">
            <p className="font-semibold">Logo khách hàng:</p>
            <div className="mt-4">
              <UploadMultipleImage
                fileList={customer.imageUrl}
                onChange={(images) => {
                  setCustomer({ ...customer, imageUrl: images });
                }}
              />
            </div>
          </div>

          <div className="mt-16 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500"
              size="large"
              onClick={updateCustomer}
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
