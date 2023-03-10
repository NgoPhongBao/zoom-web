import { useEffect, useState } from "react";
import { Button, Row, Input, Form, message } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import ErrorMessage from "../../admin-components/common/ErrorMessage";
import api from "../../service/apiService";
import Router from "next/router";
import Loading from "../../admin-components/common/Loading";

const initialVal = {
  username: "",
  password: "",
};

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      Router.push("/admin");
    }
  }, []);

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: Yup.object({
      username: Yup.string().required(`Username là bắt buộc`),
      password: Yup.string().required(`Password là bắt buộc`),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit(values) {
      handleLogin(values);
    },
  });

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      const res = await api.post("/admin/auth/login", data);
      localStorage.setItem("accessToken", res.data.accessToken);
      setTimeout(() => {
        message.success("Đăng nhập thành công");
        Router.push("/admin");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      message.error(error.message);
      setIsLoading(false);
    } finally {
    }
  };

  const { values, handleChange, handleSubmit, errors, validateField } = formik;

  return (
    <div>
      {isLoading ? <Loading /> : null}
      <div
        className="w-10/12 md:w-[500px] mx-auto border rounded-2xl p-5 lg:p-10 fixed top-1/2 left-1/2 shadow-2xl"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <img
          alt="logo"
          src={"/images/quang-cao-zoom-logo.png"}
          className="mx-auto h-16 lg:h-20 mb-4 object-contain"
        />
        <Form onFinish={handleSubmit}>
          <div className="my-5 md:my-8">
            <Input
              name="username"
              placeholder={`Username`}
              value={values.username}
              onChange={handleChange}
              className="md:h-11"
              onBlur={() => validateField("username")}
            />
            <ErrorMessage text={errors.username} />
          </div>
          <div className="my-5 md:my-8">
            <Input.Password
              name="password"
              placeholder={`Password`}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              className="md:h-11"
              value={values.password}
              onChange={handleChange}
              onBlur={() => validateField("password")}
            />
            <ErrorMessage text={errors.password} />
          </div>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#1890ff] md:h-11 w-28 mx-auto"
            >
              {`Login`}
            </Button>
          </Row>
        </Form>
      </div>
      <div className="absolute bottom-5 w-full">
        <div className="text-[#00000073] text-center mt-5">
          ZoOm Media @2023
        </div>
      </div>
    </div>
  );
}

Login.isLogin = true;
Login.isAdmin = true;

export default Login;
