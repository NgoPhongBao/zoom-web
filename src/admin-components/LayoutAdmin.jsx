import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  PictureOutlined,
  BorderOutlined,
  ContactsOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import api from "../service/apiService";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const LayoutAdmin = ({ children }) => {
  const Router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const auth = localStorage.getItem("accessToken");
    if (!auth) {
      Router.push("/admin/login");
      return;
    }
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await api.get("/admin/user/profile");
      setProfile(res.data);
    } catch (error) {}
  };

  const items = [
    getItem(
      <p onClick={() => Router.push("/admin")}>Nội dung trang chủ</p>,
      "2",
      <HomeOutlined />
    ),
    getItem(
      <p onClick={() => Router.push("/admin/banner")}>Banner trang chủ</p>,
      "1",
      <PictureOutlined />
    ),
    getItem("Nội dung trang chi tiết dịch vụ", "sub1", <BorderOutlined />, [
      getItem(
        <p onClick={() => Router.push("/admin/san-xuat-video")}>
          Sản xuất video
        </p>,
        "3"
      ),
      getItem(
        <p onClick={() => Router.push("/admin/livestream")}>Livestream</p>,
        "4"
      ),
      getItem(
        <p onClick={() => Router.push("/admin/thiet-ke-thi-cong-san-khau")}>
          Thiết kế thi công sân khấu
        </p>,
        "5"
      ),
      getItem(
        <p onClick={() => Router.push("/admin/cho-thue-phim-truong")}>
          Cho thuê phim trường
        </p>,
        "6"
      ),
      getItem(
        <p
          onClick={() =>
            Router.push("/admin/cho-thue-thiet-bi-am-thanh-anh-sang")
          }
        >
          Cho thuê thiết bị âm thanh - ánh sáng
        </p>,
        "7"
      ),
      getItem(
        <p onClick={() => Router.push("/admin/cho-thue-thiet-bi-quay-phim")}>
          Cho thuê thiết bị quay phim
        </p>,
        "8"
      ),
    ]),
    getItem(
      <p onClick={() => Router.push("/admin/khach-hang")}>Khách hàng</p>,
      "9",
      <ContactsOutlined />
    ),
    getItem(
      <p onClick={() => Router.push("/admin/danh-sach-lien-he")}>
        Danh sách liên hệ
      </p>,
      "10",
      <MessageOutlined />
    ),
    getItem(
      <p onClick={() => Router.push("/admin/tai-khoan-admin")}>
        Tài khoản admin
      </p>,
      "11",
      <UserOutlined />
    ),
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={300}
        className="fixed top-0 left-0 z-20 h-full"
      >
        <div className="p-5">
          <Link href="/">
            {" "}
            <img
              src="/images/quang-cao-zoom-logo.png"
              alt=""
              className="w-3/4 object-contain"
            />
          </Link>
        </div>
        <Menu theme="dark" mode="inline" items={items} className="h-full" />
      </Sider>
      <Layout className="site-layout">
        <Header className="fixed top-0 left-0 w-full z-10">
          <div className="flex items-center h-full text-white justify-end">
            <div className="flex items-center mr-10">
              <UserOutlined className="mr-1" />
              <span>{profile.fullName || profile.username}</span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                localStorage.removeItem("accessToken");
                Router.push("/admin/login");
              }}
            >
              <LogoutOutlined className="mr-1" />
              <span>Đăng xuất</span>
            </div>
          </div>
        </Header>
        <Content className="p-4 ml-[300px] mt-16">{children}</Content>
        <Footer className="ml-[300px] mt-3 text-center">
          ZoOm Media ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;
