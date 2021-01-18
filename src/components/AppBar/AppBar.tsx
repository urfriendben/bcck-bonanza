import React from 'react';
import logo from '@/assets/logo.svg';
import menu from '@/assets/min-menu.svg';
import menuClose from '@/assets/min-menu-close.svg';
import './AppBar.scss';
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import { connect } from 'react-redux';

function AppBar({app, toggleMenu}) {
  const history = useHistory();

  function handleNavigate(to) {
    toggleMenu(false);
    history.push(to);
  }

  function getNavItemClass(navItem) {
    const classes = ['nav-item', 'btn', 'btn-min'];
    return _.join(classes, ' ');
  }

  const navItems = _.map(app.menuItems, (menuItem) => {
    return <span key={menuItem.name} className={getNavItemClass(menuItem.name)} onClick={() => handleNavigate(menuItem.url)}>{menuItem.name}</span>;
  });

  const adddedNavItems = _.map(app.additionalMenuItems, (menuItem) => {
    return <span key={menuItem.name} className={getNavItemClass(menuItem.name)} onClick={() => handleNavigate(menuItem.url)}>{menuItem.name}</span>;
  });

  const menuIcon = app.menu ?
    <img className="logo" onClick={() => toggleMenu()} src={menuClose} alt="menu close" /> :
    <img className="logo" onClick={() => toggleMenu()} src={menu} alt="menu" />;

  const minMenu = app.menu ?
    <div className="min-menu">
      <div className="user-bar">
        <span className="btn btn-default">Login</span>
        <span className="btn btn-default important">Sign Up</span>
      </div>
      {_.reduce([...navItems, ...adddedNavItems], (prev, curr) => [prev, ', ', curr])}
    </div> : null;

  return (
    <div className={`topbar${app.menu ? ' mobile-fill-height' : ''}`}>
      <div className="app-bar">
        <img className="logo" src={logo} alt="logo" />
        <nav className="nav-bar">
          {_.reduce(navItems, (prev, curr) => [prev, ', ', curr])}
        </nav>
        <div className="util-bar">
          <div className="user-bar">
            <span className="btn btn-default">Login</span>
            <span className="btn btn-default important">Sign Up</span>
          </div>
          <div className="support-bar">
            {_.reduce(adddedNavItems, (prev, curr) => [prev, ', ', curr])}
          </div>
        </div>
        <div className="util-menu-icon">
          {menuIcon}
        </div>
      </div>
      {minMenu}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (forcedValue = null) => dispatch({ type: 'TOGGLE_MENU', value: forcedValue })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
