import React, { useState } from 'react'
import Dashboard from '../../components/dashboard';
import styles from "./Profile.module.css";
import Resources from '../../components/profileResource';

const ProfileLayout = () => {
    const [active, setActive] = useState("Resources");
    return (
        <div>
            <div className={styles.container}>
                <img src="https://images.unsplash.com/photo-1645423660753-74c9121fe6dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RpdHV0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className={styles.img_overlay}>
                    <div className={styles.item_col}>
                        <div className={styles.item_num}>23</div>
                        <div className={styles.item_small}>Resources</div>
                    </div>
                    <div className={styles.item_col}>
                        <div className={styles.item_num}>23</div>
                        <div className={styles.item_small}>Resources</div>
                    </div>
                    <div className={styles.item_col}>
                        <div className={styles.item_num}>23</div>
                        <div className={styles.item_small}>Resources</div>
                    </div>
                </div>
                <div className={styles.col_name}>National Institute of Technology, Silchar</div>
            </div>

            <section className={styles.main_sec}>
                <div className={styles.sec_header}>
                    <div className={`${styles.item} ${active === "Resources" ? styles.active : ""}`} onClick={() => setActive("Resources")}>Resources</div>
                    <div className={`${styles.item} ${active === "Dashboard" ? styles.active : ""}`} onClick={() => setActive("Dashboard")}>Dashboard</div>
                </div>

                {active === "Dashboard" && <Dashboard />}
                {active === "Resources" && <Resources />}
            </section>
        </div>
    )
}

export default ProfileLayout