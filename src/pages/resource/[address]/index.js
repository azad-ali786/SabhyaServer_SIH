import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import SideNavLayout from "../../../styleGuide/layout/sidenav";
import DisplayCard from '../../../styleGuide/components/displayCard';
import axios from 'axios';
import styles from "./Resource.module.css";

const Resource = (props) => {
    const {address} = props;
    console.log(address,"dataid");
    const [subscriptionRate,setSubscriptionRate] = useState(200);
    const [subscriberCount,setSubscriberCount] = useState(150);
    const [viewCount,setViewCount] = useState(2800);
    const [resource,setResource] = useState();
  
    useEffect(async()=>{
      try{
          var config = {
              method: 'get',
              url: `https://gentle-lowlands-02621.herokuapp.com/hei/content/${address}`,
              headers: { 
                'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI2MDUzMTdiNzZmNDJjODA2NjIwNyIsImlhdCI6MTY2MTEwMDExNn0.70C7CzNfye7xpct5KoLbuNEHWCzOIPEK-MDGs5cnnOI', 
                'type': 'institute'
              }
            };

          const res = await axios(config);
          console.log(res); 
          setResource(res.data);

      }catch(err){
          console.log(err,"error is error")
      }

  },[]);

  return (
        <SideNavLayout> 
         <nav className={`${styles.nav}`}>
         <Icon icon="eva:arrow-ios-back-outline" height={30} />
         </nav>
         <div className={`${styles.flex}`}>
           <div className={`${styles.resource}`}>
            <img src = {resource?.thumbnail?resource?.thumbnail:"https://images.unsplash.com/photo-1645423660753-74c9121fe6dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RpdHV0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"} />
            <div>
                <h1>{resource?.desc?.slice(0,15)}</h1>
                <div className={`${styles.collection}`}>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ant-design:user-outlined" width="25" height="25" />
                <div className={`${styles.infoText}`}>{resource?.subscriberInsti.length+resource?.subscriberUser.length} subscribers</div>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ep:view" width="25" height="25" />
                <div className={`${styles.infoText}`}>{resource?.viewCount} views</div>
                </div>
                </div>
            </div>
           </div>
           <div className={`${styles.institute}`}>
            <div className={`${styles.profile}`}>
               <div className={`${styles.profile_flex}`}><img src = {resource?.intiId?.img} />
                <h3>{resource?.intiId?.name}</h3>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="akar-icons:money" width="25" height="25" />
                <div className={`${styles.infoText}`}>₹{resource?.intiId?.Wei} per month</div>
                </div>
                <div className={`${styles.subscriberCount}`}>
                <Icon icon="ant-design:user-outlined" width="25" height="25" />
                <div className={`${styles.infoText}`}>{resource?.intiId?.subscriberInsti.length+resource?.intiId?.subscriberUser.length} subscribers</div>
                </div>
                {/* <div className={`${styles.subscriberCount}`}>
                <Icon icon="ep:view" width="25" height="25" />
                <div className={`${styles.infoText}`}>{resource?.viewCount} views</div>
                </div> */}
            </div>
            </div> 
         </div>
         <div className={`${styles.description}`}>
            <h1>Description</h1>
            <p>{resource?.desc}</p>
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

export async function getServerSideProps(context) {
  //  Runs only on the server. and works for every incoming request
  //   //should be used whe we need req,res or if we want to regenerate page multiple times
  // console.log(context);
  try {
      const address = context.params.address;

      
      

      return {
          props: { address:address } // ca = Contract Address;
      }
  } catch (err) {
      return { props: err };
  }


}

export default Resource