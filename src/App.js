import React from 'react';
import './App.css'
import logo from './logo.jpeg'
import insta from './insta1.png'
import facebook from './facebook1.png';
import twitter from './twitter.png';
import Menu from './Menu';





 class App extends React.Component{
  render(){
  

    return(
<div>
<ul class="slideshow">
  <li><span>Image 01</span>
 <div> <h3><p classname="txt">DELICIOUS MEALS<br></br><button className="btn btn-info">Order Now</button></p></h3></div></li>
  <li><span>Image 02</span><div>
  <h4 className="txt">LUXURIOUS QUEST<br></br> ROOMS</h4>
  <p className="txt">If you are looking for more space to unwind and relax with your loved ones and value privacy,
     our luxurious rooms are the perfect option for you.</p>
  </div></li>
  <li><span>Image 03</span></li>
  <li><span>Image 04</span></li>
  <li><span>Image 05</span></li>
  <li><span>Image 06</span></li>
</ul>
<div class="container">
    <header className="head">
      <div className="top">
<img src={logo} alt=""></img><p className="txt">JAVAHOUSE</p> 
<p id="txt2">copyright @2020 / All rights reserved</p>
<nav id="navbar">
<div class="navbar-brand" >
<div class="jump">
<a href="#" ><u className="txt2">Select Menu</u></a>
<div ></div>
    <div class="yellow1" id="color1"></div>
    <div class="green" id="color2"></div>
    <div class="red" id="color4"></div>
</div>
</div>
</nav>
<Menu></Menu>
<footer >
  

        <div id="foot">
        
          <img src={facebook} alt=""/> <img src={insta} alt=""/><img src={twitter} alt=""/></div>
      </footer>
    <div class="bars">
    <a href="#">
            <div class="color21"></div>
            <div class="color22"></div>
            <div class="color23"></div></a>
        </div>
  
<div class="colors">
            <div class="color11"></div>
            <div class="color12"></div>
            <div class="color13"></div>
            <div class="color14"></div>
            <div class="color15"></div>
            <div class="color16"></div>
            <div class="color17"></div>
      </div>
    
</div>
        </header>
</div>
</div>
    )}}

    export default App;