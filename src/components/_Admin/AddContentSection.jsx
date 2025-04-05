import React, { useState } from 'react';
import './css/AddContentSection.css';
import { contentRequest } from '../../mocks/addContentRequest.js';
import { saveNewContent } from '../../apis/adminApi.js';

const AddContentSection = () => {
  const [contentData, setContentData] = useState({});

  const handleInputChange = (title, value) => {
    setContentData((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

  const handleSubmitButton = async () => {
    try {
      const response = await saveNewContent(contentData);
      console.log(response)
    } catch (err) {
      console.error('콘텐츠 저장 실패:', err);
    }
  };

  return (
    <section className="add-content-container">
      {contentRequest.map((item, index) => (
        <div key={index} className="add-content-field">
          <label className="add-content-label">{item.label}</label>
          {item.title === 'title' ? (
            <input
              className="add-content-text"
              type="text"
              placeholder={item.placeholder}
              onChange={(e) => handleInputChange(item.title, e.target.value)}
            />
          ) : (
            <textarea
              className="add-content-text"
              placeholder={item.placeholder}
              onChange={(e) => handleInputChange(item.title, e.target.value)}
              rows={4}
            />
          )}
        </div>
      ))}
      <div className="add-content-submit-wrapper">
        <button className="add-content-submit-button" onClick={handleSubmitButton}>
          제출
        </button>
      </div>
    </section>
  );
};

export default AddContentSection;
