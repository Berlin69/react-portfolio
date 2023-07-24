import './App.scss';
import './index.scss';

import { useEffect, useState } from 'react';
import { Contacts } from './components/Contacts/Contacts';
import { Introduce } from './components/Introduce/Introduce';
import { About } from './components/About/About';
import { Resume } from './components/Resume/Resume';
import { Skills } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Hiring } from './components/Hiring/Hiring';
import { Feedback } from './components/Feedback/Feedback';
import { Menu } from './components/Menu/Menu';
import { Info } from './components/Info/Info';


function App() {
  const [lang, setLang] = useState('ru');
  const [isDayTheme, setIsDayTheme] = useState(false);
  const [isRuLang, setIsRuLang] = useState(true);

  const menuActions = {
    isDayTheme,
    setIsDayTheme,
    isRuLang,
    setIsRuLang,
  }

  useEffect(() => {
    if (isRuLang) {
      setLang('ru')
    } else {
      setLang('en')
    }
  }, [isRuLang])
  return (
    <>
      <div className="app-container">
        <Menu
          menuActions={menuActions}
        />
        <Info lang={lang} />
        <Contacts lang={lang} />
        <Introduce lang={lang} />
        <About lang={lang} />
        <Resume lang={lang} />
        <Skills lang={lang} />
        <Portfolio lang={lang} />
        <Feedback lang={lang} />
        <Hiring lang={lang} />
      </div>
    </>

  );
}

export default App;
