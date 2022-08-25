import Link from 'next/link';
import React from 'react'
import DisplayCard from '../../styleGuide/components/displayCard';
import SideNavLayout from '../../styleGuide/layout/sidenav';
import styles from "./Explore.module.css";

function Explore() {
    const data = [
        {
            imageLink: "https://images.penguinrandomhouse.com/cover/700jpg/9780593211519",
            resourceName: "BREATH - The New Science of a Lost Art",
            universityName: "University of Cambridge",
            subscriberCount: "215",
            viewCount: "2.5k"
        },
        {
            imageLink: "https://images.penguinrandomhouse.com/cover/700jpg/9780593211519",
            resourceName: "BREATH - The New Science of a Lost Art",
            universityName: "University of Cambridge",
            subscriberCount: "215",
            viewCount: "2.5k"
        },
        {
            imageLink: "https://images.penguinrandomhouse.com/cover/700jpg/9780593211519",
            resourceName: "BREATH - The New Science of a Lost Art",
            universityName: "University of Cambridge",
            subscriberCount: "215",
            viewCount: "2.5k"
        }
    ]
    return (
        <SideNavLayout
            activeTab="explore"
            pageHeader="Explore"
        >
            <div className={`${styles.gridContainer}`}>
                {data.map(function (d, idx) {
                    return (
                        <Link href={d.imageLink}>
                            <div className={`${styles.gridItem}`}>
                                <DisplayCard
                                    key={idx}
                                    cardType="resource"
                                    imgLink={d.imageLink}
                                    cardName={d.resourceName}
                                    universityName={d.universityName}
                                    subscriberCount={d.subscriberCount}
                                    viewCount={d.viewCount}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
            {/* <div>
                <DisplayCard
                    // key={d.link}
                    cardType="resource"
                    imgLink="https://images.penguinrandomhouse.com/cover/700jpg/9780593211519"
                    cardName="BREATH - The New Science of a Lost Art"
                    universityName="University of Cambridge"
                    subscriberCount="215"
                    viewCount={"2.5k"}
                />
            </div> */}
        </SideNavLayout>

    )
}

export default Explore