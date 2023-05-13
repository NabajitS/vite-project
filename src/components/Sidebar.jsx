import React from 'react'
import "./Sidebar.css"

function Sidebar({handleShowChange}) {
  return (
    <div className='sidebar'  >
        <h3 onClick={ () => handleShowChange(true) } >All Employees</h3>
        <h3 onClick={ () => handleShowChange(false) } >Shorlisted Employees</h3>
    </div>
  )
}

export default Sidebar