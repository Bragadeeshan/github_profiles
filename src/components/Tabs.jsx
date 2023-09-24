import React from 'react'

const Tabs = ({ type, setType }) => {
    return (
        <><button onClick={() => setType("repos")}>
            Repositories
        </button></>
    )
}

export default Tabs