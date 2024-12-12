import { useState } from "react";
import "./Theme.modules.scss"

const Theme = ({ activeTheme, handleThemeChange }) => {

    return (
        <section className={`theme-wrapper ${activeTheme}`}>
            <span className="theme-text">THEME</span>
            <div className="options-theme-box">
                <div className="numbers">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <div className={`selection-theme ${activeTheme}`}>
                    <button className={`circle ${activeTheme === "theme01" ? "active" : ""}`}
                        onClick={() => handleThemeChange("theme01")}></button>
                    <button className={`circle ${activeTheme === "theme02" ? "active theme02" : ""}`}
                        onClick={() => handleThemeChange("theme02")}></button>
                    <button className={`circle ${activeTheme === "theme03" ? "active theme03" : ""}`}
                        onClick={() => handleThemeChange("theme03")}></button>

                </div>
            </div>
        </section>
    )
}

export default Theme