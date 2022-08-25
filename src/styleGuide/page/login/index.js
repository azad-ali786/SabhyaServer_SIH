import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useMoralis } from "react-moralis";

import Navbar from '../../components/navBar';
import Welcome from '../../components/welcome';
import Spinner from '../../components/spinner'

import styles from "./Login.module.css"

const Login = () => {
  const router = useRouter();
  const { authenticate,authError, isAuthenticated } = useMoralis();
  const [loaded,setLoaded] = useState(false);

    useEffect(() => {
        if(isAuthenticated){
            router.push('/onboarding')
        }else{
            setLoaded(true)
        }
      },[isAuthenticated]);

  return (
    <>
   <Navbar/>
   <Welcome/>
   <div className={`${styles.login_center}`}>
    
   {(!loaded) ? (<Spinner/>) : (<button type="button" onClick={() => authenticate()} class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
      <Image src="/metamask.svg" height={15} width={25}/> Connect with MetaMask
   </button>)} 

   {authError ? (<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p class="font-bold">Be Warned</p>
  <p><span>{authError.name}</span><span>{authError.message}</span></p>
  </div>) : (<div></div>) } 
   
    </div>
    
  </>
  )
}

export default Login