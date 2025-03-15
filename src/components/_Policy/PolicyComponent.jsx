import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import './css/PolicyComponent.css';
import { privacyPolicyData } from './PrivacyPolicySection';

const Privacy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="PrivacyContainer">
      <div className="PrivacyMainWrapper">
        <h1 className="PrivacyTitle">Haruhan 개인정보취급방침</h1>
      </div>
      <ul className="PrivacyList">
        {privacyPolicyData.map((section, index) => (
          <li key={index} className="PrivacyWrapper" onClick={() => toggleSection(index)}>
            <div className="PrivacyTitleWrapper">
              <h3>{section.title}</h3>
              {openSections[index] ? (
                <IoIosArrowUp width={10} height={10} />
              ) : (
                <IoIosArrowDown width={10} height={10} />
              )}
            </div>
            {openSections[index] && <div className="PrivacyContent">{section.content}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Privacy;
