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

  useEffect(() => {
    if (isDayTheme) {
      document.body.style.backgroundColor = null;
    } else {
      document.body.style.backgroundColor = '#212529';
    }
  }, [isDayTheme])



  return (
    <>
      <div className="app-container">
        <Menu menuActions={menuActions} isDayTheme={isDayTheme} />
        <Info lang={lang} isDayTheme={isDayTheme} />
        <Contacts lang={lang} isDayTheme={isDayTheme} />
        <Introduce lang={lang} isDayTheme={isDayTheme} />
        <About lang={lang} isDayTheme={isDayTheme} />
        <Resume lang={lang} isDayTheme={isDayTheme} />
        <Skills lang={lang} isDayTheme={isDayTheme} />
        <Portfolio lang={lang} isDayTheme={isDayTheme} />
        <Feedback lang={lang} isDayTheme={isDayTheme} />
        <Hiring lang={lang} isDayTheme={isDayTheme} />
      </div>
    </>

  );
}

export default App;
