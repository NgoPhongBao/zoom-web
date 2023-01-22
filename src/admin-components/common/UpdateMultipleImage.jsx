import React, { useState, useEffect } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../service/uploadService";
import { message } from "antd";
import imageCompression from "browser-image-compression";

const handleUploadFile = async (file, folder = "") => {
  try {
    let url = "";
    if (file) {
      const _file = await imageCompression(file, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1500,
      });
      url = await uploadFile(_file, folder);
    }
    return url;
  } catch (error) {
    message.error(error.message);
  }
};

export default function UploadMultipleImage(props) {
  const [fileList, setFileList] = useState([]);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (props.fileList && props.fileList.length) {
      let _fileList = [...props.fileList];
      _fileList = _fileList.map((el) => {
        return {
          uid: Math.floor(Math.random() * 100000).toString(),
          name: "image.png",
          status: "done",
          url: el,
        };
      });
      setFileList(_fileList);
    }
  }, [props.fileList]);

  const handleChange = async (info) => {
    const _fileList = [...fileList];
    if (info.file.status === "removed") {
      const index = _fileList.findIndex((el) => el.uid === info.file.uid);
      _fileList.splice(index, 1);
    }

    if (info.file.status === "uploading") {
      const url = await handleUploadFile(
        info.file.originFileObj
      );
      _fileList.push({
        uid: Math.floor(Math.random() * 100000).toString(),
        name: "image.png",
        status: "done",
        url,
      });
    }
    setFileList(_fileList);
    const arrImages = _fileList.map((el) => el.url);
    props.onChange(arrImages);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{`Tải lên`}</div>
    </div>
  );

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      // props.beforeUpload(`Invalid image format`);
      message.error(`Hình ảnh không đúng định dạng`);
      return false;
    }
      if (isJpgOrPng) {
        // props.beforeUpload("");
      }
    return isJpgOrPng;
  }

  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok");
          }, 0);
        }}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= (props.maxItem || 100) ? null : uploadButton}
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
}
