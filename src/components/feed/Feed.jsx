import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import './Feed.css';
import data from '../../data/data'
import Skeleton from '../skeleton/Skeleton'


function Feed() {
    //1st I'm setting loading is true
    const [loading, setLoading] = useState(true);

    //and then after the data is load, then loading is set to be false
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = () => {
            setTimeout(() => {
                const getData = data;
                setLoading(false);
                setVideos(getData.videos);
            }, 3000);

        }
        getVideos();
    }, []);


    return (
        <div className="feed">
            {
                loading ? (<Skeleton type="feed" />) : (videos.map(video => <Post video={video} />))

            }


        </div>
    )
}

export default Feed
