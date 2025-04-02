import React from 'react'

function Newbutton(props) {
    return (
        <div>
            <button style={{color:"red"}}>{props.name || "Hi!!!"}</button>
        </div>
  )
}

export default Newbutton