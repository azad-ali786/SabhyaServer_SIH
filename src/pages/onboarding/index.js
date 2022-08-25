import React, { useState } from 'react';
import styles from "./Onboarding.module.css";
import Link from 'next/link';
import FloatingButton from '../../styleGuide/components/floatingButton';
import Navbar from '../../styleGuide/components/navBar';
import Welcome from '../../styleGuide/components/welcome';
import PageOne from '../../styleGuide/layout/onboarding/pageOne';
import PageThree from '../../styleGuide/layout/onboarding/pageThree';
import PageTwo from '../../styleGuide/layout/onboarding/pageTwo';

const Onboarding = () => {
    const [page, setPage] = useState(1);
    const [state, setState] = useState({
        accountType: "",
        interests: [],
        instituteName: "",
        instituteID: "",
        locationPIN: "",
        coverPhoto: "",
        subcriptionRate: ""
    });

    function accountTypeHandler(account) {
        setState({ ...state, accountType: account });
    }

    function interestToggler(interest) {
        let list = state.interests;
        if (list.indexOf(interest) == -1)
            list.push(interest);
        else
            list.splice(list.indexOf(interest), 1);

        setState({ ...state, interests: list })
    }

    const handleDetailChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = () => {
        console.log(state);
    }

    return (
        <div>
            <form onSubmit={submitHandler} >

                {/* **********ONBOARDING SCREEN 1********** */}
                <div className={`${page == 1 ? "" : styles["hidden"]}`}>

                    <div className={`${styles.floatingBtn2}`} onClick={(e) => {
                        e.preventDefault;
                        setPage((2));
                    }}>
                        <FloatingButton
                            btnText="NEXT"
                        />
                    </div>

                    <PageOne
                        accountTypeHandler={accountTypeHandler}
                        account={state.accountType}
                    />

                </div>
                {/* **********ONBOARDING SCREEN 1********** */}




                {/* **********ONBOARDING SCREEN 2********** */}
                <div className={`${page == 2 ? "" : styles["hidden"]}`}>
                    <Navbar />
                    <Welcome />
                    <div className={`${styles.navigationButtons}`}>
                        <div className={`${styles.floatingBtn1}`} onClick={(e) => {
                            e.preventDefault;
                            setPage((1));
                        }}>
                            <FloatingButton
                                btnText="BACK"
                            />
                        </div>
                        <div className={`${styles.floatingBtn2}`} onClick={(e) => {
                            e.preventDefault;
                            setPage((3));
                        }}>
                            <FloatingButton
                                btnText="NEXT"
                            />
                        </div>
                    </div>

                    <PageTwo
                        interestToggler={interestToggler}
                        interestList={state.interests}
                    />

                </div>
                {/* **********ONBOARDING SCREEN 2********** */}




                {/* **********ONBOARDING SCREEN 3********** */}
                <div className={`${page == 3 ? "" : styles["hidden"]}`}>
                    <Navbar />
                    <Welcome />
                    <div className={`${styles.navigationButtons}`}>
                        <div className={`${styles.floatingBtn1}`} onClick={(e) => {
                            e.preventDefault;
                            setPage((2));
                        }}>
                            <FloatingButton
                                btnText="BACK"
                            />
                        </div>
                        <div>
                            <Link href="/">
                                <a>
                                    <div className={`${styles.floatingBtn2}`} onClick={(e) => {
                                        e.preventDefault;
                                        submitHandler();
                                    }}>
                                        <FloatingButton
                                            btnText="SUBMIT"
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <PageThree
                        instituteName={state.instituteName}
                        instituteID={state.instituteID}
                        locationPIN={state.locationPIN}
                        coverPhoto={state.coverPhoto}
                        subcriptionRate={state.subcriptionRate}
                        changeHandler={handleDetailChange}
                    />
                </div>
                {/* **********ONBOARDING SCREEN 3********** */}

            </form>

        </div>

    )
}
export default Onboarding