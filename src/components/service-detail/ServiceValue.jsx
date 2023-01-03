import React from "react";

export default function ServiceValue() {
  return (
    <section className="mt-16 lg:mt-20 ">
      <div className="container mx-auto">
        <p className="text-xl lg:text-3xl font-bold uppercase text-center">
          giá trị dịch vụ
        </p>
        <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-10 bg-gray-50 p-4 lg:p-10 rounded-xl lg:rounded-3xl">
          <div
            className="text-center bg-white p-3 lg:p-10 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/images/services/icon-service-light.jpg"
              className="h-20 object-contain mx-auto"
            />
            <p className="uppercase font-bold py-4">ý tưởng sáng tạo</p>
            <p>
              Sân khấu lại là trung tâm của sự kiện nên một ý tưởng mới lạ là
              yêu cầu rất cần thiết. Khi chọn dịch vụ thiết kế sân khấu đơn vị
              tổ chức nên chú ý đến những ý tưởng độc đáo để sáng tạo thêm điểm
              nhấn cho sự kiện của mình.
            </p>
          </div>
          <div
            className="text-center bg-white p-3 lg:p-10 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/images/services/icon-service-box.jpg"
              className="h-20 object-contain mx-auto"
            />
            <p className="uppercase font-bold py-4">chất lượng cao</p>
            <p>
              Từ khâu lên ý tưởng, phác thảo đến thi công và kiểm tra đều được
              thắt chặt trong một khuôn khổ. Sân khấu không những cần đảm bảo
              tầm nhìn mà các thiết bị âm thanh, ánh sáng, hậu trường... cũng
              cần được tính toán kỹ lưỡng.
            </p>
          </div>
          <div
            className="text-center bg-white p-3 lg:p-10 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/images/services/icon-service-rocket.jpg"
              className="h-20 object-contain mx-auto"
            />
            <p className="uppercase font-bold py-4">tối ưu thời gian</p>
            <p>
              Điểm mạnh của ZoOm Media đó là chúng tôi sở hữu những cộng sự trẻ,
              nhiệt huyết và có niềm đam mê mãnh liệt trong việc sản xuất video
              chuyên nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
