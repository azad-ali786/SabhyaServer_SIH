import React from 'react';
import styles from "./FloatingButton.module.css";

function FloatingButton(props) {
    return (
        <div className={`${styles.btn}`} style={{ width: `${props.width ? props.width : "162px"}` }}>
            {props.btnText}
        </div>
    )
}

export default FloatingButton