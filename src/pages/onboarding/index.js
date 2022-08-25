import React, { useState } from 'react';
import styles from "./Onboarding.module.css";
import axios from "axios"
import { useRouter } from 'next/router'
import FloatingButton from '../../styleGuide/components/floatingButton';
import Navbar from '../../styleGuide/components/navBar';
import Welcome from '../../styleGuide/components/welcome';
import PageOne from '../../styleGuide/layout/onboarding/pageOne';
import PageTwo from '../../styleGuide/layout/onboarding/pageTwo';
import InstituteDetails from '../../styleGuide/layout/onboarding/instituteDetails';
import { IndividualDetails } from '../../styleGuide/layout/onboarding/individualDetails';

const Onboarding = () => {
    const router = useRouter();

    const [hash,setHash] = useState("");
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
    
    const instituteResourceHubHandler = async (subcriptionRate) => {
        if (Number(subcriptionRate) < 0) {
            return;
        }
        try {
            const accounts = await web3.eth.getAccounts();
            setHash(await hei.methods.createResource(subcriptionRate).call({
                from: accounts[0],
            }));
        }
        catch (err) {
            let message = '';
            if (err.code === 4001) {
                message = err.message.split(":")[1];
            } else {
                message = err.message;
            }
        }
    }

    const submitHandler = async () => {
        let response;
        try{
            if(accountType == "institution") {
                instituteResourceHubHandler(instituteDetails.subcriptionRate);
                const details = {
                    data:{
                        name:instituteDetails.instituteName,
                        hash:"123123",
                        email:"yoyoyyoyoyo@gmail.com",
                        instiID:instituteDetails.instituteID,
                        pin:instituteDetails.locationPIN,
                        img:instituteDetails.coverPhoto,
                        wei:instituteDetails.subcriptionRate,
                        addressEth:"give eth",
                        tags:interests,
                    },
                    _type:'institute',
    
                }
                console.log(details,'instituteDetails')
                response =  await axios.post("http://localhost:8080/auth/createAccountHEI", details);
               
            } else { 
                response =  await  axios.post("http://localhost:8080/auth/createAccountUser", details)
            }
            console.log(response,"response")
            // router.push("/");
        }
        catch(e){
            console.log(e,"error")
        }
    }

    return (
        <div>
            <form onSubmit= {(e) => submitHandler(e)} >

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
                                    <div className={`${styles.floatingBtn2}`} onClick={(e) => {
                                        e.preventDefault;
                                        submitHandler();
                                    }}>
                                        <FloatingButton
                                            btnText="SUBMIT"
                                        />
                                    </div>
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