import React from "react";
import  propTypes  from "prop-types";
function Navbar(props){
    return(
        <>
       <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} ` }>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark' ? 'light' : 'dark'}`} >
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
        </>
    );
}


Navbar.propTypes={
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired
}
//isRequired is used to give mandatory 
//propTypes are used to give the types of props

Navbar.defaultProps={
  title:'set title here',
  about:'about text here'
}

//if we dont give the arguments then we design defalut props

export default Navbar;