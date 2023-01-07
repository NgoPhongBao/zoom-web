import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "antd";

const initialVal = {
  fullName: "",
  phoneNumber: "",
  email: "",
  content: "",
};

export default function index() {
  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required(`Vui lòng nhập họ và tên`)
        .typeError(`ui lòng nhập họ và tên`),
      email: Yup.string()
        .required(`Vui lòng nhập email`)
        .typeError(`Vui lòng nhập email`)
        .email(`Email không đúng định dạng`),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit(values) {},
  });
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    validateField,
    resetForm,
  } = formik;
  return (
    <>
      {/* breadcrumb */}
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>Trang chủ</Link>/
            <span className="opacity-60">Liên hệ</span>
          </div>
        </div>
      </section>
      {/* map */}
      <section>
        <div className="container mx-auto relative z-[2]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.786232811723!2d106.60995521533442!3d10.827664661205297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297f6cc22d45%3A0x24fca86008a24801!2zUGhpbSB0csaw4budbmcgWm9vbW1lZGlh!5e0!3m2!1svi!2s!4v1577181901817!5m2!1svi!2s"
            className="w-full h-80 lg:h-[500px]"
          />
        </div>
      </section>
      <section className="contact-form relative mt-16 lg:mt-24">
        <div className="container mx-auto relative z-[2]">
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl lg:text-4xl font-bold uppercase text-center">
              liên hệ trực tiếp với
            </p>
            <img
              src="/images/quang-cao-zoom-logo.png"
              alt="logo"
              className="h-16 lg:h-20 object-contain"
            />
          </div>
          <p className="text-center mt-5">
            Hãy để chúng tôi làm nên thành công của bạn!
          </p>
          <p className="text-center">Vui lòng để lại thông tin ở đây</p>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="lg:w-[500px] mx-auto mt-10"
          >
            <div>
              <label htmlFor="fullname">
                {`Họ và tên`}
                <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder={`Họ và tên`}
                name="fullName"
                id="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={() => validateField("fullName")}
                className="h-10"
              />
              <p className="text-red-500 text-xs">{errors?.fullName}</p>
            </div>
            <div className="mt-5">
              <label htmlFor="email">
                {`Email`}
                <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder={`Email`}
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={() => validateField("email")}
                className="h-10"
              />
              <p className="text-red-500 text-xs">{errors?.email}</p>
            </div>
            <div className="mt-5">
              <label htmlFor="phoneNumber">{`Số điện thoại`}</label>
              <Input
                placeholder={`Số điện thoại`}
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                className="h-10"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="content">{`Nội dung`}</label>
              <Input.TextArea
                placeholder={`Nội dung`}
                name="content"
                id="content"
                value={values.content}
                onChange={handleChange}
                rows={5}
              />
            </div>
            <div className="text-center mt-5 lg:mt-10">
              <button
                className="bg-red-500 hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
                type="submit"
              >
                Gửi thông tin
              </button>
            </div>
          </form>
        </div>
        <div className="element two animation-moving-left-right-two z-[1] absolute hidden lg:block"></div>
      </section>
    </>
  );
}
