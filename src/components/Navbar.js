import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'





export default function Navbar(props) {

  





  return (
 <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" id="simple-color-picker" type="tussearch" placeholder="#8f3596" aria-label="Search" onChange={()=>{

          // <Textform status={!status} heading='Enter the text to analyse' tmode={tmode} showAlert={showAlert}/>
        }}/>

        
        <button className="btn btn-outline-success" onClick={props.cstatus} type="submit" >Search</button>
      </form>



     <div className={`form-check form-switch mx-3 text-${props.tmode}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
      </div>



    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
                  aboutText:PropTypes.string.isRequired

}
Navbar.defaultProps={
    title:'SET TITLE HERE',
    aboutText:'WRITE THE ABOUT US STATEMENT HERE'
}