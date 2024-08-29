import React from 'react';
import { useTranslation } from 'react-i18next';

const Perevod = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <select
        name="languages"
        id="language-select"
        className="w-[100px] h-[30px]"
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </>
  );
};

export default Perevod;
