import React from 'react';
import InputBox from '../../components/inputBox';
import styles from "./Onboarding.module.css";
import InstituteDetails from './instituteDetails';
import { IndividualDetails } from './individualDetails';

function PageThree({ accountType, instituteName, instituteID, locationPIN, coverPhoto, subscriptionRate, instituteChangeHandler, userName, associatedInstituteID, profilePhoto, individualChangeHandler }) {
    return (
        <div>
            {
                accountType == "institution" ?
                    <InstituteDetails
                        instituteName={instituteName}
                        instituteID={instituteID}
                        locationPIN={locationPIN}
                        coverPhoto={coverPhoto}
                        subscriptionRate={subscriptionRate}
                        changeHandler={instituteChangeHandler}
                    />
                    :
                    <IndividualDetails
                        userName={userName}
                        associatedInstituteID={associatedInstituteID}
                        profilePhoto={profilePhoto}
                        changeHandler={individualChangeHandler}
                    />

            }

        </div>
        // <div>
        //     <div className={`${styles.pageContent}`}>
        //         <div className={`${styles.pageText} `} style={{ marginLeft: "20vw" }}>
        //             <b>Please enter the following details</b>
        //         </div>
        //         <div className={`${styles.row}`}>
        //             <InputBox
        //                 inputType="text"
        //                 label="Name of Institution"
        //                 value={instituteName}
        //                 name="instituteName"
        //                 width="60vw"
        //                 changeHandler={changeHandler}
        //             />
        //         </div>
        //         <div className={`${styles.rowType2} ${styles.row}`}>
        //             <div>
        //                 <InputBox
        //                     inputType="text"
        //                     label="Institute ID"
        //                     value={instituteID}
        //                     name="instituteID"
        //                     width="29vw"
        //                     changeHandler={changeHandler}
        //                 />
        //             </div>
        //             <div className={`${styles.secondInput}`}>
        //                 <InputBox
        //                     inputType="text"
        //                     label="Location PIN Code"
        //                     value={locationPIN}
        //                     name="locationPIN"
        //                     width="29vw"
        //                     changeHandler={changeHandler}
        //                 />
        //             </div>
        //         </div>
        //         <div className={`${styles.row}`}>
        //             <InputBox
        //                 inputType="file"
        //                 label="Upload Cover Photo"
        //                 value={coverPhoto}
        //                 name="coverPhoto"
        //                 width="200px"
        //                 changeHandler={changeHandler}

        //             />
        //         </div>
        //         <div className={`${styles.rowType2} ${styles.row}`}>
        //             <div>
        //                 <InputBox
        //                     inputType="number"
        //                     label="Subscription Rate"
        //                     value={subcriptionRate}
        //                     name="subscriptionRate"
        //                     width="10vw"
        //                     changeHandler={changeHandler}
        //                 />
        //             </div>
        //             <div className={`${styles.secondInputText}`}>WEI per month </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default PageThree