import React, { useState } from "react";
import "./SubscriptionModal.css";

const SubscriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState(""); // 이메일 상태
  const [error, setError] = useState(""); // 오류 메시지 상태

  // 이메일 형식 검사 함수
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 입력값 변경 핸들러
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("유효하지 않은 이메일 형식입니다.");
    } else {
      setError("");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2 style={{ margin: "10px 0px 40px 0px" }}>
          <span style={{ color: "#E86912" }}>HaruHan</span>지식 구독
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
        <input
          type="email"
          placeholder="example@naver.com"
          value={email}
          onChange={handleEmailChange} // 입력값 변경 시 검사
          className={error ? "input-error" : ""}
        />
        {error && <span className="error-message">{error}</span>} {/* 오류 메시지 표시 */}

        {/* 구독 버튼 */}
        <button className="subscribe-btn">구독하기</button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
