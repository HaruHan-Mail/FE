import { useState } from 'react'
import { registerSubscription } from '../apis/userSubscriptionApi'

const useSubscription = (onSuccess) => {
  const [ formState, setFormState ] = useState({
    email: '',
    preferedTime: '',
    isDaily: true,
    agreed: false,
    error: '',
    isSubmitting: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue;
    if (type === 'checkbox') {
        newValue = checked;
    }else if (type === 'radio' && name === 'frequency') {
        newValue = value === 'true';
    }else {
        newValue = value;
    }
    setFormState((prev) => ({
        ...prev,
        [name]: newValue,
        error: '',
    }))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubscribe = async () => {
    const { email, preferedTime, agreed } = formState;
    if (!email || !preferedTime) {
      setFormState((prev) => ({ ...prev, error: '모든 필드를 입력해주세요' }));
      return;
    }
    if (!validateEmail(email)) {
      setFormState((prev) => ({ ...prev, error: '유효하지 않은 이메일 형식입니다' }));
      return;
    }
    if (!agreed) {
      setFormState((prev) => ({ ...prev, error: '개인정보취급방침에 동의하셔야 합니다.' }));
      return;
    }
    try {
      setFormState((prev) => ({ ...prev, isSubmitting: true }));

      const registrationDate = new Date().toISOString();

      const data = {
        email,
        preferedTime,
        isDaily: formState.isDaily,
        registrationDate,
      };

      await registerSubscription(data);
      onSuccess(email, preferedTime, formState.isDaily);
    } catch (error) {
      console.error('구독 실패:', error);
      let errorMessage = '구독 처리 중 오류가 발생했습니다';
      setFormState((prev) => ({ ...prev, error: errorMessage }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  return {
    formState,
    setFormState,
    handleChange,
    handleSubscribe,
  }
}

export default useSubscription