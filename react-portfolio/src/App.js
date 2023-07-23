import './App.scss';
import './index.scss';

import { useState } from 'react';
import { Contacts } from './components/Contacts/Contacts';
import { Introduce } from './components/Introduce/Introduce';
import { About } from './components/About/About';
import { Resume } from './components/Resume/Resume';
import { Skills } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';


function App() {
  const [lang, setLang] = useState('ru');

  return (
    <>
      <Contacts lang={lang} />
      <Introduce lang={lang} />
      <About lang={lang} />
      <Resume lang={lang} />
      <Skills lang={lang} />
      <Portfolio lang={lang} />
    </>
  );
}

export default App;
