import React from 'react';
import { Menu } from 'antd';
import logo from './pages/images/logo1.png';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Travel Bug Logo" style={{ width: '200px', height: '50px' }} />
      </div>
      <Menu mode="horizontal" selectedKeys={[currentPage]} onClick={({ key }) => handlePageChange(key)}>
        <Menu.Item key="Home">Home</Menu.Item>
        <Menu.Item key="Attractions">Attractions</Menu.Item>
        <Menu.Item key="PlacesToGo">Restaurants</Menu.Item>
      </Menu>
    </div>
  );
}

export default NavTabs;
