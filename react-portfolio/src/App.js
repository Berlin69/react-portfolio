import { useState } from 'react';
import { Contacts } from './components/Contacts/Contacts';

function App() {
  const [lang, setLang] = useState('ru');

  return (
    <>
      <Contacts lang={lang} />
    </>
  );
}

export default App;
