import "./Display.modules.scss"


const Display = ({ onInputChange, inputValue, activeTheme }) => {

    const handleChange = (e) => {
        onInputChange(e.target.value); // Envia o valor para o estado do componente pai
    };

    return (
        <section className={`display-wrapper ${activeTheme}`}>
            <input className={`digits ${activeTheme}`}
                onChange={handleChange}
                value={inputValue}
            />
        </section>
    )
}

export default Display