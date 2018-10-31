
import React from 'react';
import Button from 'ac-style-guide/Button';
import style from './ExampleButton.scss';

const clickHandler = ()=>{
  console.log("clicked!");
};
const ExampleButton = function(){
  return (<Button className={style.root} onClick={clickHandler}/>);
};

export default ExampleButton;
