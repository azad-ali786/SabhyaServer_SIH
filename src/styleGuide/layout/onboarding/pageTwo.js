import React from 'react';
import MultipleSelectButton from '../../components/multipleSelectButton';
import styles from "./Onboarding.module.css";

function PageTwo({ interestList, interestToggler, shrink }) {

    const interests = [
        "Philosophy",
        "English",
        "Mathematics",
        "History",
        "Mechanics",
        "Cryptography",
        "Electronics",
        "Political Science",
        "Chemistry",
        "Physics",
        "Economics",
        "Instrumentation",
        "Automation",
        "Sociology",
    ]
    return (
        <div className={`${styles.pageTwo}`}>
            {shrink == "0" ?
                <div className={`${styles.pageText} `}>
                    <b>Pick the subjects that suit your interests (any 5)</b>
                </div>
                :
                <></>
            }



            <div className={`${shrink == "0" ? styles['gridContainer'] : styles['shrunkGridContainer']}`}>
                {interests.map(function (i, idx) {
                    return (

                        <div
                            onClick={() => interestToggler(i)}
                            className={`${shrink == "0" ? styles['gridItem'] : styles['shrunkGridItem']}`}
                            key={idx}
                        >
                            <MultipleSelectButton
                                text={i}
                                selected={`${interestList.indexOf(i) == -1 ? false : true}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default PageTwo