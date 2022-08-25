import React from 'react';
import styles from "./InputBox.module.css";

function InputBox({ inputType, value, name, placeholder, width, label, changeHandler, disabled }) {
    return (
        <div>
            <label>
                <div className={`${styles.label} ${disabled == "disabled" ? styles['disabledText'] : ''}`}>{label}</div>
                <input
                    type={inputType}
                    name={name}
                    className={`${styles.inputField}`}
                    value={value}
                    placeholder={placeholder}
                    style={{ width: `${width}` }}
                    onChange={changeHandler}
                    disabled={disabled} />
            </label>
        </div>
    )
}

export default InputBox