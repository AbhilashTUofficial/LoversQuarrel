import React from 'react'
import './style.css'
import logo from "../../../app/assets/logo.png";
import Image from "next/image";
import VerticalDivider from '../Divider/VerticalDivider';
import CaseCard from '../CaseCard/CaseCard';

function AppHeader() {
    return (
        <div className='header-container'>
            <Image className='logo' alt="logo" src={logo} />
            <VerticalDivider />
            <CaseCard />
        </div>
    )
}

export default AppHeader