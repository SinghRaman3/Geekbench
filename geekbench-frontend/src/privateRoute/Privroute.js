import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const Privroute = ({ children }) => {
    const location = useLocation();
    const [show, setShow] = useState(true)


    useEffect(() => {
        // if(location.pathname === "/login" || location.pathname === "/signup") {setShow(false)}
        // else {setShow(true)}
        location.pathname === "/login" || location.pathname === "/signup" ? setShow(false) : setShow(true)
    }, [location])
    
    
  return (
    <div>{show && children}</div>
  )
}

export default Privroute