import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Header = (props) => {
  const [sider, setSider] = useState(false)

  const toggleSidebar = () => {
    setSider(!sider);
  }

  useEffect(() => {
    if (sider === false) {
      document.getElementById('sidebar').style.display = 'none'
    }
    else {
      document.getElementById('sidebar').style.display = 'block'
    }
  }, [sider])

  return (
    <div className="header">
      <Sidebar />
      <div className="logo">
        <i className="fa fa-bars" onClick={() => toggleSidebar()}></i>
        <Link to="/" className="logo-link">Organic</Link>
      </div>
      <div className="side-box">
        <div className="search">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search food" />
        </div>
        <Link to="/cart" className="Cart">
          <div className="Cartlink"><i className='fa fa-shopping-cart'></i></div>
          <div id="cart-item">{props.cartvalue}</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
