import React from 'react';
import './css/TeamInfoSection.css';
import { teamInfo } from '../../mocks/teamInfoData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TeamInfoSection = () => {
  return (
    <section className="team-info-section-container">
      <h1 className="team-info-section" initial="hidden" animate="visible" variants={fadeInUp}>
        <span className="team-info-section-highlight">HaruHan 지식</span>을 소개합니다.
      </h1>

      {/* 서비스 소개 */}
      <div className="team-info-card">
        <h3 className="team-info-section-title">
          <span className="team-info-section-highlight">HaruHan 지식</span>이란?
        </h3>
        <ul className="team-info-section-text-list">
          {teamInfo.serviceInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 비전 */}
      <div className="team-info-card">
        <h3 className="team-info-section-title">
          <span className="team-info-section-highlight">HaruHan 지식</span>의 비전
        </h3>
        <ul className="team-info-section-text-list">
          {teamInfo.vision.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 목표 */}
      <div className="team-info-card">
        <h3 className="team-info-section-title">
          <span className="team-info-section-highlight">HaruHan 지식</span>의 목표
        </h3>
        <ul className="team-info-section-list">
          {teamInfo.goal.map((item, index) => (
            <li key={index}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 팀원 소개 */}
      <div className="team-info-card">
        <h3 className="team-info-section-title">
          <span className="team-info-section-highlight">HaruHan 지식</span>의 팀원
        </h3>
        <ul className="team-info-section-list">
          {teamInfo.members.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamInfoSection;
