import React from 'react';
import InputBox from '../../components/inputBox';
import styles from "./Onboarding.module.css";

export const IndividualDetails = ({ userName, associatedInstituteID, profilePhoto, changeHandler }) => {
    return (
        <div>
            <div className={`${styles.pageContent}`}>
                <div className={`${styles.pageText} `} style={{ marginLeft: "20vw" }}>
                    <b>Please enter the following details</b>
                </div>
                <div className={`${styles.row}`}>
                    <InputBox
                        inputType="text"
                        label="Name"
                        value={userName}
                        name="userName"
                        width="60vw"
                        changeHandler={changeHandler}
                    />
                </div>
                <div className={`${styles.row}`}>
                    <div>
                        <InputBox
                            inputType="text"
                            label="Institute ID"
                            value={associatedInstituteID}
                            name="associatedInstituteID"
                            width="29vw"
                            changeHandler={changeHandler}
                        />
                    </div>
                </div>
                <div className={`${styles.row}`}>
                    <InputBox
                        inputType="file"
                        label="Upload Profile Photo"
                        value={profilePhoto}
                        name="profilePhoto"
                        width="200px"
                        changeHandler={changeHandler}

                    />
                </div>
            </div>
        </div>
    )
}
