import React from 'react';
import Swal from 'sweetalert2';
import { cancelSubscription } from '../../apis/userSubscriptionApi';
import SubmitButton from '../common/SubmitButton';
import { useQueryParams } from '../../hooks/useQueryParams';
import './css/UnsubscribSection.css';

const UnsubscribeSection = () => {
  const { email, token } = useQueryParams();

  const handleUnsubscribeSubmit = async () => {
    const result = await Swal.fire({
      icon: 'warning',
      title: '정말 구독을 해지하시겠습니까?',
      text: '구독 해지 시 사용자 정보가 모두 삭제됩니다!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '구독 해지',
      cancelButtonText: '취소',
    });

    if (result.isConfirmed) {
      try {
        const data = { email, token };
        const response = await cancelSubscription(data);

        if (response.stateCode === 200) {
          Swal.fire({
            icon: 'success',
            title: 'HaruHan 구독 해지 완료',
            text: '구독이 해지되었습니다. 언제든 다시 찾아 주세요!',
          });
        }
      } catch (error) {
        console.log('구독 해지 실패: ', error.message);
      }
    }
  };

  return (
    <section className="unsubscribe-section-container">
      <h1 className="unsubscribe-section-title">HaruHan 구독 해지</h1>
      <h3 className="unsubscribe-section-text">
        HaruHan 구독 해지 시 기존의 모든 정보가 삭제되며,
        <br />
        그 후에는 메일로 흥미로운 지식을 받아볼 수 없게 됩니다.
      </h3>
      <SubmitButton
        onClick={handleUnsubscribeSubmit}
        text="구독 해지"
        size="medium"
        width="200px"
      />
    </section>
  );
};

export default UnsubscribeSection;
