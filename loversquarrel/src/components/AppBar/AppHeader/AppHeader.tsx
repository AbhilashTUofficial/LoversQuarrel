import './style.css'
import logo from "../../../assets/logo.png";
import VerticalDivider from '../../Divider/VerticalDivider';
import CaseCard from '../CaseCard/CaseCard';
import RoundsCard from '../RoundsCard/RoundsCard';
import { Astroid, MoonStar, Settings, Share2 } from 'lucide-react';

function AppHeader() {
    return (
        <div className='header-container'>
            <div className='header-leading'>
                <img className='logo' src={logo} alt="" />
                <VerticalDivider />
                <CaseCard />
            </div>
            <RoundsCard />
            <div className="header-trailing">
                <div className="btn glass-card mode-btn">
                    <Astroid /> AI Mode
                </div>
                <div className="btn glass-card share-btn">
                    <Share2 /> Share
                </div>
                <div className="btn glass-card theme-btn">
                    <MoonStar />
                </div>
                <div className="btn glass-card settings-btn">
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default AppHeader