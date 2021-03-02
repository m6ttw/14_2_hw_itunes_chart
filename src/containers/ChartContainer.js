import React, {useEffect, useState} from "react";
import ChartRequester from "../components/ChartRequester";
import Track from "../components/Track";
import TrackList from "../components/TrackList";

const ChartContainer = () => {

    const [tracks, setTracks] = useState({});

    useEffect(() => {
        getTracks();
    }, [tracks]);

    const requestChart = (evt) => {
        setTracks(`tracks=${evt.target.value}`)
    }

    const getTracks = () => {
        console.log("getting track data");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setTracks(data))
    }

    return(
        <>
            <h1>Itunes Chart</h1>
                <button onClick={requestChart}>Get Tracks</button>
            <TrackList
            tracks={tracks}
            />
        </>
    )
}

export default ChartContainer;