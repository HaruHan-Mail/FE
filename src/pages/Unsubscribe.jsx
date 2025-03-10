import React from 'react';
import MailLayout from '../components/Layout/MailLayout';
import Swal from 'sweetalert2';
import { unsubscribeSubmit } from '../apis/unsubscribeApi';
import '../components/css/Unsubscribe.css';

const Unsubscribe = () => {
  const handleUnsubscribeSubmit = async () => {
    const result = await Swal.fire({
      icon: 'warning',
      title: '정말 구독을 해지하시겠습니까?',
      text: '구독 해지 시 사용자 정보가 모두 삭제됩니다!',
      showCancelButton: true, // 취소 버튼 보이기
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '구독 해지',
      cancelButtonText: '취소',
    });

    // 구독 해지 버튼 클릭 시
    if (result.isConfirmed) {
      try {
        const email = 'test@test.com';
        const response = await unsubscribeSubmit(email);

        if (response.stateCode === 200) {
          // token 값, email 값 제거

          // Swal 띄우기
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
    <MailLayout>
      <section className="UnsubscribeContainer">
        <h1 className="UnsubscribeTitle">HaruHan 구독 해지</h1>
        <h3 className="UnsubscribeText">
          HaruHan 구독 해지 시 기존의 모든 정보가 삭제되며,
          <br />그 후에는 메일로 흥미로운 지식을 받아볼 수 없게 됩니다.
        </h3>
        <button className="UnsubscribeSubmitButton" onClick={handleUnsubscribeSubmit}>
          구독 해지
        </button>
      </section>
    </MailLayout>
  );
};

export default Unsubscribe;
