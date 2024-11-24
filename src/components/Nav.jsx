import './Nav.css'
import logo from '../assets/logo.png';

const Nav = () => {

  return (
    <>
      <div id='nav-body'>
        <div id='logo'>
          <img src={logo} alt="MongooseLogo" />
        </div>
        <div id='pageList'>
          <div>Page1</div>
          <div>Page2</div>
          <div>Page3</div>
          <div>Page4</div>
          <div>Page5</div>
        </div>
      </div>
    </>
  )
}

export default Nav;