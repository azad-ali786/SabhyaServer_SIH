import React, { useState } from 'react'
import Dashboard from '../../components/dashboard';
import styles from "./Profile.module.css";
import Resources from '../../components/profileResource';
import FloatingButton from '../../components/floatingButton';

const ProfileLayout = ({ amount, imgLink, resources, subscribers, universityName, displaySubscribeButton }) => {
    const [active, setActive] = useState("Software");
    return (
        <div>
            <div className={styles.container}>
                <img src={imgLink} alt="" />
                <div className={styles.img_overlay}>
                    <div className={styles.item_col}>
                        <div className={styles.item_num}>{resources}</div>
                        <div className={styles.item_small}>Resources</div>
                    </div>
                    <div className={styles.item_col}>
                        <div className={styles.item_num}>{subscribers}</div>
                        <div className={styles.item_small}>Subscribers</div>
                    </div>
                    <div className={styles.item_col}>
                        <div className={styles.item_num}>23</div>
                        <div className={styles.item_small}>Resources</div>
                    </div>
                </div>
                <div className={styles.col_name}>{universityName}</div>
            </div>
            {displaySubscribeButton == "1" ?
                <div className={`${styles.subscribeBtn}`}>
                    <FloatingButton
                        btnText={`Subscribe @ ${amount} WEI per month`}
                        width="60vw"
                    />
                </div>
                : <></>
            }

            <section className={styles.main_sec}>
                <div className={styles.sec_header}>
                    <div className={`${styles.item} ${active === "Software" ? styles.active : ""}`} onClick={() => setActive("Software")}>Software</div>
                    <div className={`${styles.item} ${active === "Hardware" ? styles.active : ""}`} onClick={() => setActive("Hardware")}>Hardware</div>
                </div>

                {active === "Hardware" && <Dashboard />}
                {active === "Software" && <Resources />}
            </section>
        </div>
    )
}

export default ProfileLayout