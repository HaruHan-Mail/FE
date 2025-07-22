import IsDailyOption from './IsDailyOption';
import PreferedTimeOption from './PreferedTimeOption';
import './css/SettingSectionForm.css';

const SettingSectionForm = ({ settings, handleChange, handleSubmit, loading }) => {
  return (
    <form onSubmit={handleSubmit} className="setting-section-form">
      {/* 이메일 입력 부분 */}
      <div className="setting-form-group">
        <label htmlFor="email">이메일 주소</label>
        <input
          type="email"
          id="email"
          value={settings.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="이메일을 입력하세요"
          required
        />
      </div>

      {/* 수신 빈도 옵션 */}
      <div className="setting-form-group">
        <label className="option-label">수신 빈도</label>
        <div className="options-container">
          <IsDailyOption
            value={true}
            selected={settings.isDaily}
            onChange={(val) => handleChange('isDaily', val)}
            title="하루 1개 지식 받기"
            description="매일 한 가지 주제의 지식을 받아보세요."
          />
          <IsDailyOption
            value={false}
            selected={!settings.isDaily}
            onChange={(val) => handleChange('isDaily', val)}
            title="하루 5개 지식 받기"
            description="한 번에 여러 지식을 받아보세요."
          />
        </div>
      </div>

      {/* 수신 시간 옵션 */}
      <div className="setting-form-group">
        <label className="option-label">수신 시간</label>
        <div className="options-container time-options">
          <PreferedTimeOption
            value="오전 7시"
            name="time"
            selected={settings.preferedTime === '오전 7시'}
            onChange={(val) => handleChange('preferedTime', val)}
            label="오전 7시"
          />
          <PreferedTimeOption
            value="오후 12시"
            name="time"
            selected={settings.preferedTime === '오후 12시'}
            onChange={(val) => handleChange('preferedTime', val)}
            label="오후 12시"
          />
          <PreferedTimeOption
            value="오후 6시"
            name="time"
            selected={settings.preferedTime === '오후 6시'}
            onChange={(val) => handleChange('preferedTime', val)}
            label="오후 6시"
          />
        </div>
      </div>

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? '처리 중...' : '설정 저장하기'}
      </button>
    </form>
  );
};

export default SettingSectionForm;
