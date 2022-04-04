import React from 'react'
import Topics from './Topics'

const RecommendedTopics = () => {
    return (
        <div className="border-t-[1px] w-full p-1">
            <h2 className="pb-4 text-base font-semibold pt-7 font-lato text-dark">
                Recommended topics
            </h2>
            <div className="flex flex-wrap justify-start pb-4 pl-2 pr-3 gap-x-3 gap-y-4 ">
                <Topics title="Ios Developer" />
                <Topics title="Recommended" />
                <Topics title="Docker" />
                <Topics title="Recommended" />
                <Topics title="Reactjs" />
            </div>
        </div>
    )
}

export default RecommendedTopics
