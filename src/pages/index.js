import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useMoralis } from "react-moralis";
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


    const data = [
        {
            imageLink: "https://qph.cf2.quoracdn.net/main-qimg-d46f4d8813a9553d2cdc13f8a98d0aaf.webp",
            instituteName: "National Institute of Technology, Hamirpur",
            subscriptionRate: "349",
            subscriberCount: "3.9k",
            resourceCount: "108"
        },
        {
            imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
            instituteName: "Indian Institute of Technology, Delhi",
            subscriptionRate: "129",
            subscriberCount: "24.5k",
            resourceCount: "354"
        },
        {
            imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
            instituteName: "Indian Institute of Technology, Delhi",
            subscriptionRate: "129",
            subscriberCount: "24.5k",
            resourceCount: "354"
        },
        {
            imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
            instituteName: "Indian Institute of Technology, Delhi",
            subscriptionRate: "129",
            subscriberCount: "24.5k",
            resourceCount: "354"
        },
        {
            imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
            instituteName: "Indian Institute of Technology, Delhi",
            subscriptionRate: "129",
            subscriberCount: "24.5k",
            resourceCount: "354"
        },
        {
            imageLink: "https://static.toiimg.com/photo/msid-63738952/63738952.jpg",
            instituteName: "Indian Institute of Technology, Delhi",
            subscriptionRate: "129",
            subscriberCount: "24.5k",
            resourceCount: "354"

        }
    ];

    // const data = props.campaigns.map(
    //     address => {
    //         console.log(`hei/${address}`);
    //         return {
    //             link: `hei/${address}`,
    //             imageLink: "https://qph.cf2.quoracdn.net/main-qimg-d46f4d8813a9553d2cdc13f8a98d0aaf.webp",
    //             instituteName: "National Institute of Technology, Hamirpur",
    //             subscriptionRate: "349",
    //             subscriberCount: "3.9k",
    //             resourceCount: "108"

    //         }
    //     }
    // );


    return (
        <>
            <SideNavLayout
                activeTab="home"
                pageHeader="Home"
            >
                <div className={`${styles.gridContainer}`}>
                    {data.map(function (d, idx) {
                        return (
                            <Link href={d.imageLink}>
                                <div className={`${styles.gridItem}`}>
                                    <DisplayCard
                                        key={idx}
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


// export async function getStaticProps() {
//     // Pre defind by next js which it calls whle pre-rendering
//     //static re-rendering
//     // use for api or read files
//     //Data Could be outDated without revalidate so if we set revalidate:10 then we could revalidate data after 10 second
//     const HeiList = await hei.methods.getResources().call();
//     console.log(HeiList);
//     return {
//         props: {
//             campaigns: HeiList
//         },
//         revalidate: 10
//     }

// }

export default Home;
