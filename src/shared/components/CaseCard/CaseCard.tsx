import React from 'react'
import './style.css'
// import { SquarePen } from 'lucide-react';

function CaseCard() {
    return (
        <div className=' case-card glass-card'>

            <div className="case-number">CASE #432432</div>
            <div className="case-name">Whay didn't you reply?</div>
            {/* <SquarePen className='edit-icon' /> */}
        </div>
    )
}

export default CaseCard