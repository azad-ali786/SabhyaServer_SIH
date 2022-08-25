import React from 'react';
import Image from 'next/image';
import styles from './Onboarding.module.css'

function PageOne({ accountTypeHandler, account }) {
    return (
        <div className={`${styles.pageOne}`}>
            <div>
                <Image src="/logo_large.svg" height="368" width="286" />
            </div>

            <div className={`${styles.vl}`}></div>

            <div className={`${styles.pageOneSecTwo}`}>

                <div className={`${styles.pageText}`}>Please choose an account type</div>
                <div className={`${styles.formDisplay}`}>
                    <div className={`${styles.formOption}`}>
                        <div className={`${styles.optionIcon} ${account == 'institution' ? styles['selected'] : ""}`}
                            onClick={() => { accountTypeHandler('institution'); }}>
                            <Image src="/institution_icon.svg" height="150" width="150" />
                        </div>
                        <div className={`${styles.pageText} ${account == 'institution' ? styles['selectedText'] : ""}`}>INSTITUTION</div>
                    </div>
                    <div className={`${styles.formOption}`}>
                        <div className={`${styles.optionIcon} ${account == 'individual' ? styles['selected'] : ""}`}
                            onClick={() => { accountTypeHandler('individual'); }}>
                            <Image src="/individual_icon.svg" height="150" width="150" />
                        </div>
                        <div className={`${styles.pageText} ${account == 'individual' ? styles['selectedText'] : ""}`}>INDIVIDUAL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOne