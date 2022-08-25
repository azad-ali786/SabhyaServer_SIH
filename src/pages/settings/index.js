import React, { useState, useCallback } from 'react'
import InputBox from '../../styleGuide/components/inputBox'
import SideNavLayout from '../../styleGuide/layout/sidenav';
import ImageDnD from '../../styleGuide/components/imageDnD';
import axios from "axios";
import { Icon } from '@iconify/react';
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
    
    const [imgLink, setImgLink] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        imageUpload(acceptedFiles[0]);
      }, []);
    
      const imageUpload= async(imgFile)=>{
        try{
            if(imgFile)
            {
                const formInfo= new FormData();
                formInfo.append("file",imgFile);
                formInfo.append("upload_preset","upload_img");
                formInfo.append("cloud_name","sih-testing");

                const imgUploaded = await axios.post("https://api.cloudinary.com/v1_1/sih-testing/image/upload",formInfo)
                setImgLink(imgUploaded.data.url)
                console.log(imgLink)
            }
        }
        catch(e){
             console.log(e)
        }   
    }

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
                {/* dropdown */}
                <div className={`${styles.row} ${styles.inputTailwind}`}>
                    { imgLink ? <></> : <ImageDnD onDrop={onDrop} accept={"image/*"}/> }
                    { imgLink ? (<div className='h-62 w-full rounded-lg mb-6'> 
                    <button type="button" onClick={()=> {setImgLink(null)}} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <Icon icon="akar-icons:cross" />
                    </button>
                    <img src = {imgLink} className="object-fill w-full h-62 rounded-lg" /> </div> ) : <></>} 
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