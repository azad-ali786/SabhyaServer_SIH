import SideNav from "../../components/sideNav";
import styles from "./SideNavLayout.module.css"

const SideNavLayout = (props) => {
    return (
        <div className={`${styles.page}`}>

            <SideNav
                activeTab={props.activeTab}
                userAddr={props.userAddress}
            />

            <div className={`${styles.screen}`} >
                <div className={`${styles.pageHeader}`}>{props.pageHeader}</div>
                {props.children}
            </div>

        </div>
    )
}
export default SideNavLayout;