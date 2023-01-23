import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  message,
  Button,
  Table,
  Input,
  Popconfirm,
  Modal,
} from "antd";
import Link from "next/link";
import {
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Loading from "../../admin-components/common/Loading";
import api from "../../service/apiService";

export default function Cp() {
  const [query, setQuery] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (newQuery) => {
    try {
      const res = await api.get("/admin/user", newQuery ? newQuery : query);
      setUsers(res.data.items);
      setTotal(res.data.totalItems);
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete("/admin/user/" + id);
      getUsers();
      message.success("Xóa thành công");
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  const handleChangePage = (page) => {
    const newQuery = { ...query, pageIndex: page - 1 };
    getUsers(newQuery);
    setQuery(newQuery);
  };

  const handlePageSizeChange = (current, size) => {
    setTimeout(() => {
      const newQuery = { ...query, pageIndex: 0, pageSize: size };
      getUsers(newQuery);
      setQuery(newQuery);
    }, 0);
  };

  const handleCreateOrUpdate = async () => {
    setLoading(true);
    try {
      const { UserId, Username, Password } = selectedUser;
      if (isChangePass && !Password) {
        message.warning("Vui lòng nhập password mới");
        return;
      }
      if (!Username || !Password) {
        message.warning("Vui lòng nhập username và passworrd");
        return;
      }
      if (!UserId) {
        await api.post("/admin/user", selectedUser);
        message.success("Tạo mới thành công");
      } else {
        await api.put("/admin/user/" + UserId, {
          ...selectedUser,
          Password: isChangePass ? selectedUser.Password : null,
        });
        message.success("Cập nhật thành công");
      }
      const newQuery = { ...query, pageIndex: 0, pageSize: 5 };
      getUsers(newQuery);
      setQuery(newQuery);
      setShowModalUpdate(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
      dataIndex: "FullName",
      key: "FullName",
    },
    {
      title: `Username`,
      dataIndex: "Username",
      key: "Username",
    },
    {
      title: `Hành động`,
      key: "operation",
      render: (text, record) => {
        return (
          <div className="flex justify-center">
            <Button
              type="primary"
              icon={<EditOutlined />}
              className="m-1 flex items-center justify-center border-0 bg-blue-500"
              size={"small"}
              onClick={() => {
                setIsChangePass(false);
                setSelectedUser(record);
                setShowModalUpdate(true);
              }}
            >
              Chỉnh sửa
            </Button>
            <Button
              type="primary"
              icon={<EditOutlined />}
              className="m-1 flex items-center justify-center border-0 bg-cyan-500 hover:bg-cyan-400 focus:bg-cyan-400 "
              size={"small"}
              onClick={() => {
                setIsChangePass(true);
                setSelectedUser({ ...record, Password: "" });
                setShowModalUpdate(true);
              }}
            >
              Đổi mật khẩu
            </Button>
            <Popconfirm
              title="Xác nhận xóa"
              description="Bạn có muốn xóa thông tin liên hệ này không?"
              onConfirm={() => deleteUser(record.UserId)}
              onCancel={() => {}}
              okText="Có"
              cancelText="Không"
              placement="left"
              disabled={record.Username === "admin"}
            >
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                danger
                className="m-1 flex items-center justify-center"
                size={"small"}
                disabled={record.Username === "admin"}
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
      {showModalUpdate ? (
        <Modal
          title={
            isChangePass
              ? "Đổi mật khẩu"
              : selectedUser.UserId
              ? "Cập nhật"
              : "Thêm mới"
          }
          open={true}
          onCancel={() => setShowModalUpdate(false)}
          footer={false}
        >
          <div>
            {!isChangePass ? (
              <div>
                <p>Tên</p>
                <Input
                  placeholder="Nhập tên"
                  value={selectedUser.FullName}
                  onChange={(e) => {
                    setSelectedUser({
                      ...selectedUser,
                      FullName: e.target.value,
                    });
                  }}
                />
              </div>
            ) : null}
            {!isChangePass ? (
              <div className="mt-3">
                <p>
                  Username<span className="text-red-500">*</span>
                </p>
                <Input
                  placeholder="Nhập username"
                  disabled={selectedUser.UserId}
                  value={selectedUser.Username}
                  onChange={(e) => {
                    setSelectedUser({
                      ...selectedUser,
                      Username: e.target.value,
                    });
                  }}
                />
              </div>
            ) : null}

            {(isChangePass && selectedUser.UserId) || !selectedUser.UserId ? (
              <div className="mt-3">
                <p>
                  Password {isChangePass ? " mới" : ""}
                  <span className="text-red-500">*</span>
                </p>
                <Input
                  placeholder="Nhập password"
                  value={selectedUser.Password}
                  onChange={(e) => {
                    setSelectedUser({
                      ...selectedUser,
                      Password: e.target.value,
                    });
                  }}
                />
              </div>
            ) : null}
            <div className="mt-3 flex justify-center">
              <Button
                className="bg-blue-500 border-0"
                type="primary"
                onClick={handleCreateOrUpdate}
              >
                {isChangePass
                  ? "Đổi mật khẩu"
                  : selectedUser.UserId
                  ? "Cập nhật"
                  : "Thêm mới"}
              </Button>
            </div>
          </div>
        </Modal>
      ) : (
        true
      )}

      {loading ? <Loading /> : null}
      <div data-aos="fade-up" className="h-full">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="flex items-center gap-2">
              <UserOutlined />
              <span>Tài khoản admin</span>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 p-5 bg-white h-full">
          <div className="my-3 flex justify-end">
            <Button
              className="bg-green-500 hover:bg-green-400 : focus:bg-green-400 border-0 flex items-center"
              size="small"
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setIsChangePass(false);
                setSelectedUser({});
                setShowModalUpdate(true);
              }}
            >
              Tạo mới
            </Button>
          </div>
          <Table
            dataSource={users}
            bordered
            scroll={{ x: 800 }}
            columns={columns}
            rowKey={(record) => record.id}
            pagination={{
              pageSizeOptions: ["5", "10", "20"],
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
