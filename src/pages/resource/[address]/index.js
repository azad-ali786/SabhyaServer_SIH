import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import SideNavLayout from "../../../styleGuide/layout/sidenav";
import DisplayCard from '../../../styleGuide/components/displayCard';

import styles from "./Resource.module.css";

const Resource = () => {
    const [subscriptionRate,setSubscriptionRate] = useState(200);
    const [subscriberCount,setSubscriberCount] = useState(150);
    const [viewCount,setViewCount] = useState(2800);

  return (
        <SideNavLayout> 
         <nav className={`${styles.nav}`}>
         <Icon icon="eva:arrow-ios-back-outline" height={30} />
         </nav>
         <div className={`${styles.flex}`}>
           <div className={`${styles.resource}`}>
            <img src = "https://images.unsplash.com/photo-1645423660753-74c9121fe6dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RpdHV0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
            <div>
                <h1>BREATH - The New Science of a Lost Art</h1>
                <div className={`${styles.collection}`}>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ant-design:user-outlined" width="25" height="25" />
                <div className={`${styles.infoText}`}>{subscriberCount} subscribers</div>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ep:view" width="25" height="25" />
                <div className={`${styles.infoText}`}>{viewCount} views</div>
                </div>
                </div>
            </div>
           </div>
           <div className={`${styles.institute}`}>
            <div className={`${styles.profile}`}>
               <div className={`${styles.profile_flex}`}><img src = "https://images.unsplash.com/photo-1645423660753-74c9121fe6dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RpdHV0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
                <h3>Sona College of Technology</h3>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="akar-icons:money" width="25" height="25" />
                <div className={`${styles.infoText}`}>₹{subscriptionRate} per month</div>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ant-design:user-outlined" width="25" height="25" />
                <div className={`${styles.infoText}`}>{subscriberCount} subscribers</div>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ep:view" width="25" height="25" />
                <div className={`${styles.infoText}`}>{viewCount} views</div>
                </div>
            </div>
            </div> 
         </div>
         <div className={`${styles.description}`}>
            <h1>Description</h1>
            <p>Naval Ravikant is an Indian entrepreneur and investor. He is the co-founder, chairman and former CEO of AngelList.[2] He has invested early-stage in over 200 companies including Uber, FourSquare, Twitter, Wish.com, Poshmark, Postmates, Thumbtack, Notion, SnapLogic, Opendoor, Clubhouse, Stack Overflow, Bolt, OpenDNS, Yammer, and Clearview AI, with over 70 total exits and more than 10 Unicorn companies.[3][4]
            Ravikant is a Fellow of the Edmund Hillary Fellowship.[5] As a podcaster he shares advice on pursuing health, wealth, and happiness.</p>
         </div>
         <div className={`${styles.download_align}`} >
         <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
         <Icon icon="ep:download" class="mx-5" height={15} />
          Download
         </button>
         </div>
        </SideNavLayout>
  );
}

export default Resource