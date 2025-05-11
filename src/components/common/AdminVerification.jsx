import Swal from 'sweetalert2';
import { verifyAdminCode } from '../../apis/adminApi';

const AdminVerification = async () => {
  const { value: code } = await Swal.fire({
    title: '관리자 로그인',
    input: 'password',
    inputLabel: '관리자 코드를 입력하세요',
    inputPlaceholder: '관리자 코드',
    showCancelButton: true,
    confirmButtonText: '로그인',
    cancelButtonText: '취소',
  });

  if (!code) return false;

  try {
    const response = await verifyAdminCode(code);
    if (response.stateCode === 200) {
      await Swal.fire({
        icon: 'success',
        title: '관리자 로그인 성공 !',
        text: '관리자 페이지로 이동합니다.',
      });
      return true;
    }
  } catch (err) {
    await Swal.fire({
      icon: 'error',
      title: '관리자 로그인 실패!',
      text: '관리자 코드가 틀렸습니다. 메인 페이지로 이동합니다.',
    });
  }

  return false;
};

export default AdminVerification;
