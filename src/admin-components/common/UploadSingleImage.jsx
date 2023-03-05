import { Upload, Modal } from "antd";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import uploadFile from "../../service/uploadService";
import { message } from "antd";

const handleUploadFile = async (file, folder = "") => {
  let url = "";
  try {
    if (file) {
      url = await uploadFile(file, folder);
    }
    return url;
  } catch (error) {
    message.error(error.message);
  }
};

const UploadSingleImage = ({
  validateUpload,
  folderUpload,
  onChangeUpload,
  image,
  extraClass = "",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setImageUrl(image);
  }, [image]);

  const handleChange = async (info) => {
    setIsLoading(true);
    try {
      if (info.file.status === "removed") {
        setImageUrl("");
        onChangeUpload("");
      } else if (info.file.status === "uploading") {
        const url = await handleUploadFile(
          info.file.originFileObj,
          folderUpload
        );
        onChangeUpload(url);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      // validateUpload(`Hình ảnh không đúng định dạng`);
      message.error(`Hình ảnh không đúng định dạng`);
      return false;
    }
    if (isJpgOrPng) {
      // validateUpload("");
    }
    return isJpgOrPng;
  }

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <CameraOutlined className="text-xl" />}
    </div>
  );
  return (
    <>
      <Upload
        {...props}
        name="imageUrl"
        listType="picture-card"
        fileList={
          imageUrl
            ? [
                {
                  uid: "-xxx",
                  status: "done",
                  url: imageUrl,
                },
              ]
            : []
        }
        className={`single-image-uploader ${extraClass}`}
        showUploadList={{ showRemoveIcon: true, showPreviewIcon: true }}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok");
          }, 0);
        }}
        onPreview={handlePreview}
      >
        {imageUrl ? null : uploadButton}
      </Upload>
      <Modal
        open={previewVisible}
        title={null}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="mt-6">
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </div>
      </Modal>
    </>
  );
};

export default UploadSingleImage;
