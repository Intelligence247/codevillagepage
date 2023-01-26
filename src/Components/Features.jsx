import React from 'react'

const Features = ({ img, title, descr }) => {
    return (
        <div className="web">
            <img src={img} alt="" />
            <div className="right">
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </div>
    )
}

export default Features