import React from 'react';

const Invitation: React.FC = () => {
  return (
    <div className="invitation-container">
      <div className="invitation-card">
        <div className="flower">🌸</div>
        <h1>초대합니다</h1>
        <p className="names">유인원 & 최달영</p>
        <p>소중한 분들을 모시고</p>
        <p>같이 한 걸음 내딛고자 합니다.</p>
        <div className="date">2025년 9월 27일 토요일 오후 5시</div>
        <div className="location">서울 더 청담 노블레스홀 2층</div>
      </div>
    </div>
  );
};

export default Invitation;
