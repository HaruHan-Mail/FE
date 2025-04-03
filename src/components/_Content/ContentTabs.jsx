import React from 'react';
import './css/ContentTabs.css';

const ContentTabs = ({ activeTab, onTabChange, bookmarkCount }) => {
  return (
    <div className="content-tabs">
      <button
        className={`content-tab ${activeTab[0] === 'all' ? 'active' : ''}`}
        onClick={() => onTabChange('all')}
      >
        전체 지식
      </button>
      <button
        className={`content-tab ${activeTab[0] === 'bookmarks' ? 'active' : ''}`}
        onClick={() => onTabChange('bookmarks')}
      >
        북마크한 지식 {bookmarkCount > 0 && <span className="bookmark-count">{bookmarkCount}</span>}
      </button>
    </div>
  );
};

export default ContentTabs;
