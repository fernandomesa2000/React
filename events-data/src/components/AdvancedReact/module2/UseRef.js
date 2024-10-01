import { useRef } from 'react';
function TextInputWithFocusButton() {
    const inputRef = useRef(null);

    const focusInput = () => {
      // `current` points to the mounted text input element
      inputRef.current.focus();
    };
    return (
      <>
      <h1>Using UseRef to acces underlying DOM</h1>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>
          Focus the input
        </button>
      </>
    );
  }

export default TextInputWithFocusButton;