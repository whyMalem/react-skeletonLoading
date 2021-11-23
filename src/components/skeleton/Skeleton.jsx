import React from 'react';
import './skeleton.css';

function Skeleton({ type }) {

    console.log(type);
    const Counter = 8;
    const FeedSkeleton = () => {
        return (<>
            <div className="postSk">
                <div className="postSkImg"></div>
                <div className="postSkInfo">
                    <div className="postSkAvatar"></div>
                    <div className="postSkDetail">
                        <div className="postSkText"></div>
                        <div className="postSkText sm"></div>
                    </div>
                </div>
            </div>
        </>)
    }

    const Circle = () => {
        return (
            <>
                <div className="circle">
                    <i class="fas fa-circle-notch"></i>
                </div>
            </>
        )
    }

    const Custom = () => {
        return (
            <>
                <div className="custom">
                    <div className="balls">
                        <div className="ball ball1"></div>
                        <div className="ball ball2"></div>
                        <div className="ball ball3"></div>
                    </div>
                    <span className="loading">Loading...</span>
                </div>

            </>
        )
    }

    if (type === "feed") return Array(Counter).fill(<FeedSkeleton />);
    if (type === 'circle') return <Circle />
    if (type === 'custom') return <Custom />
}

export default Skeleton
