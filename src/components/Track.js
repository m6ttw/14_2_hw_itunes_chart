import React from "react";

const Track = ({artist, title}) => {
    return (
        <>
            <h3>{artist}</h3>
            <p>{title}</p>
        </>
    )
}

export default Track;