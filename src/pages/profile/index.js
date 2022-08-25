import React from 'react';
import ProfileLayout from '../../styleGuide/layout/profile';
import SideNavLayout from '../../styleGuide/layout/sidenav';

function Profile() {
    return (
        <SideNavLayout
            activeTab="profile"
            pageHeader="Profile"
        >
            <div><ProfileLayout /></div>
        </SideNavLayout>
    )
}

export default Profile