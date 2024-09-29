"use client";
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
export default function ProductImage({handleImageChange}) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0) {
      const lastFile = newFileList[newFileList.length - 1];
      if (!lastFile.url && !lastFile.preview) {
        lastFile.preview = await getBase64(lastFile.originFileObj);
      }
      // Update the parent component with the image URL or base64 data
      handleImageChange(lastFile.url || lastFile.preview);
    } else {
      handleImageChange('');  // Reset product image if all images are removed
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
    <Upload
      listType="picture-card"
      fileList={fileList}
      onPreview={handlePreview}
      onChange={handleChange}
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
  )
}
