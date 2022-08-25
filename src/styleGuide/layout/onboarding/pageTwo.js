import React from 'react';
import MultipleSelectButton from '../../components/multipleSelectButton';
import styles from "./Onboarding.module.css";

function PageTwo({ interestList, interestToggler }) {

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
            <div className={`${styles.pageText} `}>
                <b>Pick the subjects that suit your interests (any 5)</b>
            </div>


            <div className={`${styles.gridContainer}`}>
                {interests.map(function (i, idx) {
                    return (

                        <div
                            onClick={() => interestToggler(i)}
                            className={`${styles.gridItem}`}
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