import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, message } from "antd";
import { useRouter } from "next/router";
import useTrans from "../../hooks/useTrans";
import api from "../../service/apiService";

const initialVal = {
  fullName: "",
  phoneNumber: "",
  email: "",
  content: "",
};

export default function index({ store }) {
  const { locale } = useRouter();
  const trans = useTrans();
  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required(trans.vui_long_nhap_ho_va_ten)
        .typeError(trans.vui_long_nhap_ho_va_ten),
      email: Yup.string()
        .required(trans.vui_long_nhap_email)
        .typeError(trans.vui_long_nhap_email)
        .email(trans.email_khong_hop_le),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit(values) {
      sendForm(values);
    },
  });

  const sendForm = async (data) => {
    await api.post("/customer", data);
    message.success(trans.cam_on_ban_da_de_lai_thong_tin);
    resetForm();
  };

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    validateField,
    resetForm,
  } = formik;
  return (
    <main>
      {/* breadcrumb */}
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>{trans.home}</Link>/
            <span className="opacity-60">{trans.contact}</span>
          </div>
        </div>
      </section>
      {/* map */}
      <section>
        <div className="container mx-auto relative z-[2]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.786232811723!2d106.60995521533442!3d10.827664661205297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297f6cc22d45%3A0x24fca86008a24801!2zUGhpbSB0csaw4budbmcgWm9vbW1lZGlh!5e0!3m2!1svi!2s!4v1577181901817!5m2!1svi!2s"
            className="w-full h-80 lg:h-[500px] rounded-xl lg:rounded-3xl"
            data-aos="fade-zoom-in"
          />
        </div>
      </section>
      <section className="contact-form relative mt-16 lg:mt-24">
        <div className="container mx-auto relative z-[2]">
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl lg:text-4xl font-bold uppercase text-center">
              {trans.truc_tiep_lien_he_voi}
            </p>
            <img
              src="/images/quang-cao-zoom-logo.png"
              alt="logo"
              className="h-16 lg:h-20 object-contain"
            />
          </div>
          <p className="text-center mt-5">
            {locale === "vi" ? store.slogan_VN : store.slogan_EN}!
          </p>
          <p className="text-center">{trans.vui_long_de_lai_thong_tin_o_day}</p>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="lg:w-[500px] mx-auto mt-10"
          >
            <div>
              <label htmlFor="fullname">
                {trans.ho_va_ten}
                <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder={trans.ho_va_ten}
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
              <label htmlFor="phoneNumber">{trans.so_dien_thoai}</label>
              <Input
                placeholder={trans.so_dien_thoai}
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                className="h-10"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="content">{trans.noi_dung}</label>
              <Input.TextArea
                placeholder={trans.noi_dung}
                name="content"
                id="content"
                value={values.content}
                onChange={handleChange}
                rows={5}
              />
            </div>
            <div className="text-center mt-5 lg:mt-10">
              <button
                className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
                type="submit"
              >
                {trans.gui_thong_tin}
              </button>
            </div>
          </form>
        </div>
        <div className="element two animation-moving-left-right-two z-[1] absolute hidden lg:block"></div>
      </section>
    </main>
  );
}
