import  React from 'react';
import style from './navigation.scss';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Navigation =({className})=>{
  return (
    <nav className={classnames({
      [style.nav]:true,
      [className]: className})}>
      <Link className={style.navitem} to="/Docs">Docs</Link>
      <Link className={style.navitem} to="/">Blog</Link>
      <a className={style.navitem} href="https://amazingco.visualstudio.com/AmazingCo/_git/ac-style-guide">Repo</a>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string
};

export default Navigation;
