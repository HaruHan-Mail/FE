import React from "react";
import "./SubscriptionModal.css";

const SubscriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>
          <span style={{ color: "orange" }}>HaruHan</span>지식 구독
        </h2>

        {/* 수신 빈도 */}
        <p>수신 빈도</p>
        <label>
          <input type="radio" name="frequency" />
          <span className="custom-checkbox" />
          하루 하나 (월~금)
        </label>
        <label>
          <input type="radio" name="frequency" />
          <span className="custom-checkbox" />
          하루 다섯 (월요일)
        </label>

        {/* 수신 시간 */}
        <p>수신 시간</p>
        <label>
          <input type="radio" name="time" />
          <span className="custom-checkbox" />
          아침 8시
        </label>
        <label>
          <input type="radio" name="time" />
          <span className="custom-checkbox" />
          오후 12시
        </label>
        <label>
          <input type="radio" name="time" />
          <span className="custom-checkbox" />
          저녁 6시
        </label>

        {/* 이메일 입력 */}
        <p>이메일</p>
        <input type="email" placeholder="example@naver.com" />

        {/* 구독 버튼 */}
        <button className="subscribe-btn">구독하기</button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
