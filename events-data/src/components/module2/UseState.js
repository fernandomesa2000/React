import { useState } from 'react';
import Heading from './UseStateChild';

function InputComponent() {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Heading value={inputText} onChange={handleChange}/>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}

export default InputComponent