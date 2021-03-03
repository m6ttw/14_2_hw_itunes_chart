import React, {useEffect, useState} from "react";
import TrackList from "../components/TrackList";

const ChartContainer = () => {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        getTracks();
    }, [])

    const getTracks = () => {
        console.log("getting track data");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setTracks(data.feed.entry))
    }

    return(
        <>
            <h1>Itunes Chart</h1>
            <TrackList
            tracks={tracks}
            />
        </>
    )
}

export default ChartContainer;