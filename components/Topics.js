import React from 'react'

const Topics = ({ title }) => {
    return (
        <div className="px-4 py-[6px] rounded-full bg-light w-min">
            <h4 className="text-sm text-dark whitespace-nowrap ">{title}</h4>
        </div>
    )
}

export default Topics
