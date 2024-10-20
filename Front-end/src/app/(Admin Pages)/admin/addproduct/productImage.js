"use client";
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import { useSelector } from 'react-redux';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function ProductImage({ handleImageChange }) {
  const { bgP, color } = useSelector((state) => state.mode);
//   const [file, setFile] = useState(null);
//   const [previewSource, setPreviewSource] = useState("");
//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     previewFile(file);  // Preview the image
//     setFile(file);
// }
// const previewFile = (file) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onloadend = () => {
//       setPreviewSource(reader.result);  // Base64 encoded string
//       handleImageChange(reader.result);
//   };
// };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  // Preview image when user clicks on the image card
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  // Handle change in file list (adding/removing images)
  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0) {
      const lastFile = newFileList[newFileList.length - 1];
      if (!lastFile.url && !lastFile.preview) {
        lastFile.preview = await getBase64(lastFile.originFileObj);
      }
      // Pass the image URL or base64 data to the parent component
      handleImageChange(lastFile.url || lastFile.preview);
    } else {
      // Reset the image if no files are present
      handleImageChange('');
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <>
    {/* <input
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    accept="image/*"
                />
                {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: "300px" }}
                />
            )} */}
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        className={`text-${color} hover:text-${bgP} cursor-pointer`}
      >
        {fileList.length >= 5 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
}
