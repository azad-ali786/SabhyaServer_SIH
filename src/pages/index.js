import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useMoralis } from "react-moralis";
import axios from "axios";
// import hei from '../../ethereum/hei';
import SideNavLayout from '../styleGuide/layout/sidenav';
import Link from 'next/link';
import DisplayCard from '../styleGuide/components/displayCard';
import styles from "./index.module.css";

const Home = (props) => {
    const router = useRouter();
    const { isAuthenticated } = useMoralis();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, []);

    // console.log(isAuthenticated ? user.attributes.ethAddress : "not authenticated");



    // const data = [
    //     {
    //         imageLink: "https://qph.cf2.quoracdn.net/main-qimg-d46f4d8813a9553d2cdc13f8a98d0aaf.webp",
    //         instituteName: "National Institute of Technology, Hamirpur",
    //         subscriptionRate: "349",
    //         subscriberCount: "3.9k",
    //         resourceCount: "108"
    //     },
    //     {
    //         imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
    //         instituteName: "Indian Institute of Technology, Delhi",
    //         subscriptionRate: "129",
    //         subscriberCount: "24.5k",
    //         resourceCount: "354"
    //     },
    //     {
    //         imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
    //         instituteName: "Indian Institute of Technology, Delhi",
    //         subscriptionRate: "129",
    //         subscriberCount: "24.5k",
    //         resourceCount: "354"
    //     },
    //     {
    //         imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
    //         instituteName: "Indian Institute of Technology, Delhi",
    //         subscriptionRate: "129",
    //         subscriberCount: "24.5k",
    //         resourceCount: "354"
    //     },
    //     {
    //         imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
    //         instituteName: "Indian Institute of Technology, Delhi",
    //         subscriptionRate: "129",
    //         subscriberCount: "24.5k",
    //         resourceCount: "354"
    //     },
    //     {
    //         imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
    //         instituteName: "Indian Institute of Technology, Delhi",
    //         subscriptionRate: "129",
    //         subscriberCount: "24.5k",
    //         resourceCount: "354"
    //     }
    // ];

    const data = props.campaigns.map(
        heiData => {
            console.log(`hei/${heiData.hash}`);
            return {
                link: `hei/${heiData.hash}`,
                imageLink: heiData.img.length == 0 ? "https://qph.cf2.quoracdn.net/main-qimg-d46f4d8813a9553d2cdc13f8a98d0aaf.webp" : heiData.img,
                instituteName: heiData.name,
                subscriptionRate: heiData.Wei,
                subscriberCount: heiData.subscriberUser.length + heiData.subscriptionInsti.length,
                resourceCount: "12"

            }
        }
    );



    return (
        <>
            <SideNavLayout
                activeTab="home"
                pageHeader="Home"
            // userAddress={isAuthenticated ? user.attributes.ethAddress : ""}
            >
                <div className={`${styles.gridContainer}`}>
                    {data.map(function (d, idx) {
                        return (
                            <Link href={d.link}>
                                <div className={`${styles.gridItem}`}>
                                    <DisplayCard
                                        key={d.link}
                                        cardType="institute"
                                        imgLink={d.imageLink}
                                        cardName={d.instituteName}
                                        subscriptionRate={d.subscriptionRate}
                                        subscriberCount={d.subscriberCount}
                                        resourceCount={d.resourceCount}
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </SideNavLayout>
        </>
    )


}


export async function getStaticProps() {
    // Pre defind by next js which it calls whle pre-rendering
    //static re-rendering
    // use for api or read files
    //Data Could be outDated without revalidate so if we set revalidate:10 then we could revalidate data after 10 second
    var config = {
        method: 'get',
        url: 'https://gentle-lowlands-02621.herokuapp.com/institutes',
        headers: {
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI2MDUzMTdiNzZmNDJjODA2NjIwNyIsImlhdCI6MTY2MTEwMDExNn0.70C7CzNfye7xpct5KoLbuNEHWCzOIPEK-MDGs5cnnOI',
            'type': 'institute'
        },
    };

    const res = await axios(config);
    // const HeiList = await hei.methods.getResources().call();
    const HeiData = await axios(config);
    // console.log(HeiList);
    console.log(HeiData.data);
    return {
        props: {
            campaigns: HeiData.data
        },
        revalidate: 10
    }

}

export default Home;
