import React from 'react'

const Programs = ({ img, title, descr, custom }) => {
    return (
        <div className="web web2">
            <img src={img} alt="" />
            <div className="right">
                <h1>{title}</h1>
                <p className='font-[500]'>{descr}</p>
                <p className='custom'>{custom}</p>
            </div>
        </div>
    )
}

export default Programs