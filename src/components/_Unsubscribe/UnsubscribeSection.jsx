import Swal from 'sweetalert2';
import { cancelSubscription } from '../../apis/userSubscriptionApi';
import SubmitButton from '../common/SubmitButton';
import { useQueryParams } from '../../hooks/useQueryParams';
import './css/UnsubscribSection.css';

const UnsubscribeSection = () => {
  const { email, token } = useQueryParams();

  const handleUnsubscribeSubmit = async () => {
    // 이메일 또는 토큰이 없는 경우 오류 메시지 표시
    if(!email || !token) {
      await Swal.fire({
        icon: 'error',
        title: '이메일 또는 토큰이 없습니다',
        confirmButtonColor: '#e86912',
        confirmButtonText: '확인',
      });
      return;
    }

    const result = await Swal.fire({
      icon: 'warning',
      title: '정말 구독을 해지하시겠습니까?',
      text: '구독 해지 시 사용자 정보가 모두 삭제됩니다!',
      showCancelButton: true,
      confirmButtonColor: '#e86912',
      cancelButtonColor: '#717171',
      confirmButtonText: '구독 해지',
      cancelButtonText: '취소',
    });

    if (result.isConfirmed) {
      await cancelSubscription(email, token);
      Swal.fire({
        icon: 'success',
        title: 'HaruHan 구독 해지 완료',
        text: '구독이 해지되었습니다. 언제든 다시 찾아 주세요!',
        confirmButtonColor: '#e86912',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <section className="unsubscribe-section-container">
      <h1 className="unsubscribe-section-title">HaruHan 구독 해지</h1>
      <h3 className="unsubscribe-section-text">
        HaruHan 구독 해지 시 기존의 모든 정보가 삭제되며,
        <br />그 후에는 메일로 흥미로운 지식을 받아볼 수 없게 됩니다.
      </h3>
      <SubmitButton
        onClick={handleUnsubscribeSubmit}
        text="구독 해지"
        size="medium"
        width="250px"
      />
    </section>
  );
};

export default UnsubscribeSection;
