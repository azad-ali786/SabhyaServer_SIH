import React, { useState } from 'react'
import InputBox from '../../styleGuide/components/inputBox'
import SideNavLayout from '../../styleGuide/layout/sidenav';
import styles from "./Settings.module.css";

function Settings() {
    const [state, setState] = useState({
        instituteName: "National Institute of Technology, Silchar",
        instituteID: "ACDB4567",
        locationPin: "781010",
        coverPhotoLink: "https://images.unsplash.com/photo-1645423660753-74c9121fe6dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RpdHV0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        subscriptionRate: 122
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <SideNavLayout
            activeTab="settings"
            pageHeader="Settings"
        >
            <div className={`${styles.pageContent}`}>
                <div className={`${styles.row}`}>
                    <InputBox
                        inputType="text"
                        label="Name of Institution"
                        value={state.instituteName}
                        name="instituteName"
                        width="60vw"
                        disabled="disabled"
                    />
                </div>
                <div className={`${styles.rowType2} ${styles.row}`}>
                    <div>
                        <InputBox
                            inputType="text"
                            label="Institute ID"
                            value={state.instituteID}
                            name="instituteID"
                            width="29vw"
                            disabled="disabled"
                        />
                    </div>
                    <div className={`${styles.secondInput}`}>
                        <InputBox
                            inputType="text"
                            label="Location PIN Code"
                            value={state.locationPin}
                            name="locationPin"
                            width="29vw"
                            disabled="disabled"
                        />
                    </div>
                </div>
                <div className={`${styles.row} ${styles.inputTailwind}`}>
                    <div className="flex justify-center items-center w-full">
                        <label for="coverPhotoLink" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="coverPhotoLink" type="file" className="hidden" onChange={(e) => { handleChange(e) }} />
                        </label>
                    </div>
                </div>
                <div className={`${styles.rowType2} ${styles.row}`}>
                    <div>
                        <InputBox
                            inputType="number"
                            label="Subscription Rate"
                            value={state.subscriptionRate}
                            name="subscriptionRate"
                            width="10vw"
                            changeHandler={handleChange}
                        />
                    </div>
                    <div className={`${styles.secondInput}`}>WEI per month</div>
                    {/* <div className={`${styles.secondInput}`}>

                        <InputBox
                            inputType="number"
                            label=" "
                            value={state.subscriptionRate}
                            name="subscriptionRate"
                            width="10vw"
                            changeHandler={handleChange}
                        />

                    </div> */}
                </div>
            </div>
        </SideNavLayout>
    )
}

export default Settings