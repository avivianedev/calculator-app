import "./Keyboard.modules.scss"


const Keyboard = ({ inputValue, resetInput, deleteValue, equalOperation, activeTheme }) => {


    return (
        <section className={`keyboard-wrapper ${activeTheme}`}>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("7")}>7</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("8")}>8</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("9")}>9</button></div>
            <div className={`k-digit del ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => deleteValue()}>DEL</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("4")}>4</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("5")}>5</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("6")}>6</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("+")}>+</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("1")}>1</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("2")}>2</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("3")}>3</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("-")}>-</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue(",")}>.</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("0")}>0</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("/")}>/</button></div>
            <div className={`k-digit ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => inputValue("*")}>x</button></div>
            <div className={`k-digit reset ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => resetInput()}>reset</button></div>
            <div className={`k-digit equal ${activeTheme}`}><button className={`button ${activeTheme}`} onClick={() => equalOperation()}>=</button></div>
        </section>
    )
}


export default Keyboard