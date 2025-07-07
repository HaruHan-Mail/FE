import { useState, useEffect } from 'react';
import { confirmSubscriptionCode } from '../apis/userSubscriptionApi';
import Swal from 'sweetalert2';

const useVerification = (initialEmail, preferedTime, isDaily, onVerified, onTimeout) => {
  const [formState, setFormState] = useState({
    code: '',
    error: '',
    isSubmitting: false,
  });
  const [timeLeft, setTimeLeft] = useState(300); // 5분 = 300초

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onTimeout]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormState((prev) => ({
      ...prev,
      code: value,
      error: '',
    }));
  };

  const handleVerify = async () => {
    if (!formState.code) {
      setFormState((prev) => ({ ...prev, error: '인증 코드를 입력해주세요' }));
      return;
    }
    
    try {
      setFormState((prev) => ({ ...prev, isSubmitting: true }));
      
      const data = {
        email: initialEmail,
        preferedTime,
        isDaily,
        verificationCode: formState.code,
      };
      
      const responseData = await confirmSubscriptionCode(data);
      
      if (responseData.stateCode === 200) {
        await Swal.fire({
          icon: 'success',
          title: '인증 성공!',
          text: 'Haruhan 구독이 완료되었습니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#E86912',
          timer: 3000,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        onVerified();
      }
    } catch (error) {
      console.error('인증 실패:', error);
      setFormState((prev) => ({ 
        ...prev, 
        error: '인증 코드가 잘못되었습니다. 다시 시도해주세요' 
      }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return {
    formState,
    timeLeft,
    formatTime,
    handleChange,
    handleVerify,
  };
};

export default useVerification; 