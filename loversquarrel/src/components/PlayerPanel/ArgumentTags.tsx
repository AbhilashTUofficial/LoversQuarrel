import { Info, X } from 'lucide-react'
import React from 'react'

type Props = {
    isBoyfriend: boolean;
    activeTags: String[];
}
function ArgumentTags(props: Props) {
    return (
        <div className='active-tag-container'>
            <div className="subtitle">ACTIVE TAGS
                <Info className={"info-icon"} />
            </div>
            <div className="tags">
                {
                    props.activeTags.map((tag, index) => (
                        <div key={index} className={`active-tag ${props.isBoyfriend ? "active-tag-boy" : "active-tag-girl"}`}>{tag}
                            <X className="close-icon" />
                        </div>
                    ))
                }
                <div className="add-new-tag">+ Add Tag</div>
            </div>
        </div>
    )
}

export default ArgumentTags