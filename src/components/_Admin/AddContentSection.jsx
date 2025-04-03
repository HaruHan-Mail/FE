import React, { useState } from 'react';
import './css/AddContentSection.css';
import { contentRequest } from '../../mocks/addContentRequest.js';
import { saveNewContent } from '../../apis/adminApi.js';

const AddContentSection = () => {
  const [contentData, setContentData] = useState({});

  const stringFields = ['title', 'summary'];

  const handleInputChange = (title, value) => {
    const parsedValue = stringFields.includes(title)
      ? value
      : value.split(',').map((v) => v.trim());

    setContentData((prev) => ({
      ...prev,
      [title]: parsedValue,
    }));
  };

  const handleSubmitButton = () => {
    const response = saveNewContent(contentData);
  };

  return (
    <section className="add-content-container">
      {contentRequest.map((item, index) => (
        <div key={index} className="add-content-field">
          <label className="add-content-label">{item.label}</label>
          <input
            className="add-content-text"
            type="text"
            placeholder={item.placeholder}
            onChange={(e) => handleInputChange(item.title, e.target.value)}
          ></input>
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
