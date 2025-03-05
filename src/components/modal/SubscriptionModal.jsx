import React, { useState } from "react";
import axios from "axios";
import "./SubscriptionModal.css";

const SubscriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState("");
  const [preferedTime, setPreferedTime] = useState(""); 
  const [isDaily, setIsDaily] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const TIME_OPTIONS = {
    "오전 8시": "08:00",
    "오후 12시": "12:00",
    "오후 6시": "18:00"
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email || !preferedTime) {
      setError("모든 필드를 입력해주세요");
      return;
    }

    if (!validateEmail(email)) {
      setError("유효하지 않은 이메일 형식입니다");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://semtle.catholic.ac.kr:8082/user",
        {
          email,
          preferedTime,
          isDaily
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.stateCode === 200) {
        alert("구독이 완료되었습니다!");
        onClose();
        setEmail("");
        setPreferedTime("");
        setIsDaily(true);
      }
    } catch (error) {
      console.error("구독 실패:", error);
      
      if (error.response?.data?.statusCode === 409) {
        setError("이미 존재하는 이메일입니다.");
      } else if (error.response?.status === 500) {
        setError("백엔드 담당자에게 연락바람");
      } else {
        setError("구독 처리 중 오류가 발생했습니다");
      }
    } finally {
      setIsSubmitting(false);
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
          <input
            type="radio"
            name="frequency"
            value="daily"
            onChange={() => setIsDaily(true)}
            checked={isDaily}
          />
          <span className="custom-checkbox" />
          하루 하나 (월~금)
        </label>
        <label>
          <input
            type="radio"
            name="frequency"
            value="weekly"
            onChange={() => setIsDaily(false)}
            checked={!isDaily}
          />
          <span className="custom-checkbox" />
          하루 다섯 (월요일)
        </label>

        {/* 수신 시간 */}
        <p>수신 시간</p>
        {Object.entries(TIME_OPTIONS).map(([label, value]) => (
          <label key={value}>
            <input
              type="radio"
              name="time"
              value={label}
              onChange={(e) => setPreferedTime(e.target.value)}
              checked={preferedTime === label}
            />
            <span className="custom-checkbox" />
            {label}
          </label>
        ))}

        {/* 이메일 입력 */}
        <p>이메일</p>
        <input
          type="email"
          placeholder="example@naver.com"
          value={email}
          onChange={handleEmailChange}
          className={error ? "input-error" : ""}
        />

        {error && <div className="error-message">{error}</div>}

        <button   
          className="subscribe-btn" 
          onClick={handleSubscribe}
          disabled={isSubmitting}
        >
          {isSubmitting ? "처리 중..." : "구독하기"}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionModal;