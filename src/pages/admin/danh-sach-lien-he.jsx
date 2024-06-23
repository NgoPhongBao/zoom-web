import React, { useEffect, useState } from "react";
import { Breadcrumb, message, Button, Table, Input, Popconfirm } from "antd";
import Link from "next/link";
import {
  MessageOutlined,
  DeleteOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";
import moment from "moment";

export default function Cp() {
  const [query, setQuery] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async (newQuery) => {
    try {
      const res = await api.get(
        "/admin/customercontact",
        newQuery ? newQuery : query
      );
      setCustomers(res.data.items);
      setTotal(res.data.totalItems);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const updateCustomer = async () => {
    setLoading(true);
    try {
      for (let i = 0; i < customers.length; i++) {
        await api.put(
          "/admin/customercontact/" + customers[i].id,
          customers[i]
        );
      }
      message.success("Cập nhật thành công");
    } catch (error) {
      message.error("Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await api.delete("/admin/customercontact/" + id);
      getCustomers();
      message.success("Xóa thành công");
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const handleChangePage = (page) => {
    const newQuery = { ...query, pageIndex: page - 1 };
    getCustomers(newQuery);
    setQuery(newQuery);
  };

  const handlePageSizeChange = (current, size) => {
    setTimeout(() => {
      const newQuery = { ...query, pageIndex: 0, pageSize: size };
      getCustomers(newQuery);
      setQuery(newQuery);
    }, 0);
  };

  const columns = [
    {
      title: `STT`,
      dataIndex: "",
      key: "NO",
      width: "70px",
      align: "center",
      render: (value, record, index) => {
        return <p>{query.pageIndex * query.pageSize + index + 1}</p>;
      },
    },
    {
      title: `Tên`,
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: `Email`,
      dataIndex: "email",
      key: "email",
    },
    {
      title: `Số điện thoại`,
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: `Nội dung liên hệ`,
      dataIndex: "content",
      key: "content",
    },
    {
      title: `Ngày liên hệ`,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => {
        return <p className="whitespace-nowrap">{moment(value).format("HH:mm DD/MM/YYYY")}</p>;
      },
    },
    {
      title: `Ghi chú của admin`,
      dataIndex: "note",
      key: "note",
      render: (value, record, index) => {
        return (
          <div className="flex justify-center items-center gap-3">
            <div className="w-[200px]">
              <Input.TextArea
                placeholder="Ghi chú"
                className="w-full text-xs"
                rows={4}
                value={value}
                onChange={(e) => {
                  const _customers = [...customers];
                  _customers[index].note = e.target.value;
                  setCustomers(_customers);
                }}
              />
            </div>
            <div className="mt-3">
              <Button
                type="primary"
                className="m-1 flex items-center justify-center bg-[#1890ff] mx-auto"
                icon={<SaveOutlined />}
                size={"small"}
                onClick={updateCustomer}
              >
                Lưu
              </Button>
            </div>
          </div>
        );
      },
    },
    {
      title: `Hành động`,
      key: "operation",
      render: (text, record) => {
        return (
          <div className="flex justify-center">
            <Popconfirm
              title="Xác nhận xóa"
              description="Bạn có muốn xóa thông tin liên hệ này không?"
              onConfirm={() => deleteCustomer(record.id)}
              onCancel={() => {}}
              okText="Có"
              cancelText="Không"
              placement="left"
            >
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                danger
                className="m-1 flex items-center justify-center"
                size={"small"}
              >
                Xóa
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="flex items-center gap-2">
              <MessageOutlined />
              <span>Danh sách liên hệ</span>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <Table
            dataSource={customers}
            bordered
            scroll={{ x: 800 }}
            columns={columns}
            rowKey={(record) => record.id}
            pagination={{
              pageSizeOptions: ["10", "20"],
              total: total,
              current: query.pageIndex + 1,
              pageSize: query.pageSize,
              showSizeChanger: true,
              showTotal: (total) => `Tổng cộng` + " " + total + " " + `kết quả`,
              onChange: handleChangePage,
              onShowSizeChange: handlePageSizeChange,
            }}
            locale={{
              emptyText: (
                <span className="text-gray-8">{`Không có dữ liệu`}</span>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
}

Cp.isAdmin = true;
