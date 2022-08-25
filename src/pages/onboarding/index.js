import React, { useState } from 'react';
import styles from "./Onboarding.module.css";
import Link from 'next/link';
import axios from "axios"
import FloatingButton from '../../styleGuide/components/floatingButton';
import Navbar from '../../styleGuide/components/navBar';
import Welcome from '../../styleGuide/components/welcome';
import PageOne from '../../styleGuide/layout/onboarding/pageOne';
import PageTwo from '../../styleGuide/layout/onboarding/pageTwo';
import InstituteDetails from '../../styleGuide/layout/onboarding/instituteDetails';
import { IndividualDetails } from '../../styleGuide/layout/onboarding/individualDetails';

const Onboarding = () => {
    const [page, setPage] = useState(1);
    const [accountType, setAccountType] = useState("");
    const [interests, setInterests] = useState([]);
    const [instituteDetails, setInstituteDetails] = useState({
        instituteName: "",
        instituteID: "",
        locationPIN: "",
        coverPhoto: "",
        subcriptionRate: ""
    });
    const [individualDetails, setIndividualDetails] = useState({
        userName: "",
        associatedInstituteID: "",
        profilePhoto: ""
    })

    function accountTypeHandler(account) {
        // setState({ ...state, accountType: account });
        setAccountType((account));
    }

    function interestToggler(interest) {
        let list = [...interests];
        if (list.indexOf(interest) == -1)
            list.push(interest);
        else
            list.splice(list.indexOf(interest), 1);

        setInterests((list));
    }

    const handleInstituteDetailChange = e => {
        const { name, value } = e.target;
        setInstituteDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleIndividualDetailChange = e => {
        const { name, value } = e.target;
        setIndividualDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (Number(subcriptionRate) <= 0) {
            setmsg({
                header: 'Error',
                message: ' Please fill the amount'
            })
            return;
        }
        try {

            const accounts = await web3.eth.getAccounts();
            return await hei.methods.createResource(minimumContribution).send({
                from: accounts[0],
            });
        }
        catch (err) {
            let message = '';
            if (err.code === 4001) {
                message = err.message.split(":")[1];
            } else {
                message = err.message;
            }
            setmsg({
                header: 'Error',
                message: message
            });
        }
        setloading(false);
    }

    const submitHandler = () => {
        // if(accountType == "institution") {
        //     axios.post("https://gentle-lowlands-02621.herokuapp.com/auth/createAccountHEI",)
        // }else {
        //     axios.post("https://gentle-lowlands-02621.herokuapp.com/auth/createAccountUser",)
        // }
        console.log(JSON.stringify(instituteDetails))
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
                        account={accountType}
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
                        interestList={interests}
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

                    {
                        accountType == "institution" ?
                            <InstituteDetails
                                instituteName={instituteDetails.instituteName}
                                instituteID={instituteDetails.instituteID}
                                locationPIN={instituteDetails.locationPIN}
                                coverPhoto={instituteDetails.coverPhoto}
                                subscriptionRate={instituteDetails.subscriptionRate}
                                changeHandler={handleInstituteDetailChange}
                            />
                            :
                            <IndividualDetails
                                userName={individualDetails.userName}
                                associatedInstituteID={individualDetails.associatedInstituteID}
                                profilePhoto={individualDetails.profilePhoto}
                                changeHandler={handleIndividualDetailChange}
                            />
                    }
                </div>
                {/* **********ONBOARDING SCREEN 3********** */}

            </form>

        </div>

    )
}
export default Onboarding