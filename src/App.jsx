import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Keyboard from './components/Keyboard'
import Theme from './components/Theme'

function App() {

  const [inputValue, setInputValue] = useState("");
  const [activeTheme, setActiveTheme] = useState("theme01");

  document.body.className = activeTheme;

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };

  const handleInputChange = (newValue) => {
    setInputValue((prevValue) => prevValue + newValue); // Concatena os valores
  };

  const resetInput = () => {
    setInputValue("")
  }

  const deleteValue = () => {
    let lastvalue = inputValue.slice(0, -1)
    setInputValue(lastvalue)
  }

  const equalOperation = () => {
    const operation = eval(inputValue)
    setInputValue(operation)
  }


  return (

    <section className='context'>
      <header className={`header-wrapper ${activeTheme}`}>
        <div className='header-logo'>
          <h2 className='logo-text' >calc</h2>
        </div>
        <Theme
          activeTheme={activeTheme}
          handleThemeChange={handleThemeChange}
        />
      </header>
      <main className='container'>
        <Display
          onInputChange={handleInputChange}
          inputValue={inputValue}
          activeTheme={activeTheme}
        />

        <Keyboard
          inputValue={handleInputChange}
          resetInput={resetInput}
          deleteValue={deleteValue}
          equalOperation={equalOperation}
          activeTheme={activeTheme}
        />
      </main>
    </section>
  )
}

export default App
