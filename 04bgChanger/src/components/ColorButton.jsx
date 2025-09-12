import React from 'react'

const ColorButton = ({ colors, setColor, className }) => {
    return (
        <div>
            <button className={`outline-none px-4 py-2 m-1 rounded-full ${className} text-white shadow-lg`} style={{ backgroundColor: colors }} onClick={() => setColor(colors)}>{colors}</button>
        </div>
    )
}

export default ColorButton