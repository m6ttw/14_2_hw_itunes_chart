import React from "react";
import Track from "./Track"

const TrackList = ({tracks}) => {

    const trackNodes = tracks.map(track => {
        return (
            <>
            <ol>
                <li>
                    <Track artist={track['im:artist'].label} title={track['im:name'].label} key={track.id.attributes['im:id']} />
                </li>
            </ol>
            </>
        )
    });

    return (
        <>
            <h2>Track List</h2>
            <p>{trackNodes}</p>
        </>
    )
}

export default TrackList;