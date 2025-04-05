import React, { useState } from 'react';
import './css/AddContentSection.css';
import { contentRequest } from '../../mocks/addContentRequest.js';
import { saveNewContent } from '../../apis/adminApi.js';

const initialData = {
  title: "",
  summary: "",
  background: [""],
  importance: [""],
  tip: [""],
  additionalResources: [""],
};

const AddContentSection = () => {
  const [contentData, setContentData] = useState(initialData);

  // title과 summary는 단일 입력, 나머지는 배열 처리
  const isArrayField = (title) => !["title", "summary"].includes(title);

  const handleInputChange = (title, value) => {
    setContentData((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

  const handleArrayInputChange = (title, index, value) => {
    setContentData((prev) => {
      const updatedArray = prev[title] ? [...prev[title]] : [];
      updatedArray[index] = value;
      return {
        ...prev,
        [title]: updatedArray,
      };
    });
  };

  const handleAddInput = (title) => {
    setContentData((prev) => {
      const updatedArray = prev[title] ? [...prev[title]] : [""];
      updatedArray.push("");
      return {
        ...prev,
        [title]: updatedArray,
      };
    });
  };

  const handleSubmitButton = async () => {
    try {
      console.log("전송할 데이터:", contentData);
      const response = await saveNewContent(contentData);
      console.log("응답:", response);
    } catch (err) {
      console.error("콘텐츠 저장 실패:", err);
    }
  };

  return (
    <section className="add-content-container">
      {contentRequest.map((item, index) => (
        <div key={index} className="add-content-field">
          <label className="add-content-label">{item.label}</label>
          {isArrayField(item.title) ? (
            <div className="array-input-container">
              {contentData[item.title].map((value, idx) => (
                <input
                  key={idx}
                  className="add-content-text"
                  type="text"
                  placeholder={item.placeholder}
                  value={value}
                  onChange={(e) =>
                    handleArrayInputChange(item.title, idx, e.target.value)
                  }
                />
              ))}
              <button
                type="button"
                className="add-input-button"
                onClick={() => handleAddInput(item.title)}
              >
                추가
              </button>
            </div>
          ) : (
            <input
              className="add-content-text"
              type="text"
              placeholder={item.placeholder}
              value={contentData[item.title]}
              onChange={(e) => handleInputChange(item.title, e.target.value)}
            />
          )}
        </div>
      ))}
      <div className="add-content-submit-wrapper">
        <button
          className="add-content-submit-button"
          onClick={handleSubmitButton}
        >
          제출
        </button>
      </div>
    </section>
  );
};

export default AddContentSection;
