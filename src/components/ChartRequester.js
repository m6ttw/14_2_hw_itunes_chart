import React from "react";

const ChartRequester = ({onIncrementSelectedTrack, onDecrementSelectedTrack}) => {
    return (
        <>
            <button onClick={onDecrementSelectedTrack}>Previous Track</button>
            <button onClick={onIncrementSelectedTrack}>Next Track</button>
        </>
    )
}

export default ChartRequester;