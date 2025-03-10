import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {

  const [show, handleShow]=useState(false);

  useEffect(()=>{
  window.addEventListener("scroll", ()=>{
    if(window.scrollY>100)
      handleShow(true);
    
    else
    handleShow(false);
  })
  // return ()=>{
  //   window.removeEventListener("scroll");
  // };
  },[]);

  return (
    <div className={`nav ${ show && "nav_black"}`}>
        <img
        className='logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt='netflixlogo '/>
       <img
       className='logo avatar'
       src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
       alt=' netflixAvatarlog'/>
    </div>
  )
}

export default Nav
