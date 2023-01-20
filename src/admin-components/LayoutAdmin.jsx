import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
  useEffect(() => {
    const auth = localStorage.getItem("accessToken");
    if (!auth) {
      Router.push("/admin/login");
    }
  }, []);

  const items = [
    getItem(
      <p onClick={() => Router.push("/admin")}>
        Nội dung trang chủ
      </p>,
      "2",
      <HomeOutlined />
    ),
    getItem(
      <p onClick={() => Router.push("/admin/banner")}>Banner trang chủ</p>,
      "1",
      <PictureOutlined />
    ),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);

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
        width={250}
        className="fixed top-0 left-0 z-20 h-full"
      >
        <div className="p-5">
          <img
            src="/images/quang-cao-zoom-logo.png"
            alt=""
            className="w-3/4 object-contain"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          className="h-full"
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="fixed top-0 left-0 w-full z-10">
          <div className="flex items-center h-full text-white justify-end">
            <div className="flex items-center mr-10">
              <UserOutlined className="mr-1" />
              <span>Admin</span>
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
        <Content className="p-4 ml-[250px] mt-16">{children}</Content>
        <Footer className="ml-[250px] mt-3 text-center">
          ZoOm Media ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;
