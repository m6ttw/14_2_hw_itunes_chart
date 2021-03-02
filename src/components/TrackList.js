import React from "react";
import Track from "./Track"

const TrackList = ({tracks}) => {

    const trackNodes = tracks.feed.entry.map((track) => {
        return (
            <Track>{track["title"]["label"]}</Track>
        )
    });

    return (
        <>
            <p>{trackNodes}</p>
        </>
    )
}

export default TrackList;