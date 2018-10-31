import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'ac-style-guide/Button';
import style from './style.scss';
import Navigation from '../navigation/navigation';
import Burger from '../burger/burger';
import Footer from '../footer/footer';
import HeadMenu from '../headmenu/headmenu';
import Header from '../header/header';
import Icon from '../icon/icon';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    };
  }
  clickHandler =()=>{
    this.setState((prevState)=>{
      return {
        toggle:!prevState.toggle
      };
    });
  }
  render(){
    return (
      <div className={style.root}>
        <HeadMenu toggle={this.state.toggle}/>
        <Header>
          <Icon/>
          <Navigation/>
          <Burger toggleHeadMenu={this.clickHandler}/>
        </Header>
        <HeadMenu toggle={this.state.toggle}/>
        <div className={style.maincontent} >
          <div className={style.hero}>
            <h2>AmazingCo Style Guide</h2>
            <p>AmazingCo Style Guide is a set of React components that utilizing <Link to="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design principles</Link> for a better architect React applications.
              We've created a playground so you don't need to install anything to fall in love with our components, so fun!</p>
          </div>
          <div className={style.hero}>
            <h2>What is Atomic Design</h2>
            <p>Atomic Design is the concept of breaking down user interfaces into smaller, simpler elements. There are five different levels in atomic design: atoms, molecules, organism, templates, and pages. A single atom might be a input field or a button. These atoms can be combined to make a search molecule which then can be combined with a logo atom and a navigation molecule to make a navbar organism and so on and so forth until, finally, you have your user interface.</p>
            <p><Link to="https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262">Thinking About React Atomically</Link></p>
            <p> <Link to="https://airbnb.design/building-a-visual-language/">AirBnB Visual Design Language</Link></p>
<p>Inspired by : <Link to="http://seek-oss.github.io/seek-style-guide/">Seek Style Guide</Link></p>
          </div>
          <div className={style.hero}>
            <h2>Desing Principles</h2>
            <p>TBD</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

}

export default Home;
