import React from 'react';
import './Home.css';
import Water from '../../assets/images/water_2.png';
import Logo from '../../assets/images/mainLogo.png';
import Ship from '../../assets/images/kreiva-ui_ship_ship.png';
import Calendar from '../../assets/images/event.svg';
import MenuBar from '../../assets/images/menu.svg';
import fbIcon from '../../assets/images/facebook.svg';
import instaIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';
class Home extends React.Component{
  constructor(){
    super();
    this.state={
      menuOpen:false
    }
  }  

  openMenuHandler = () =>{
    this.setState({menuOpen:true},()=>console.log(this.state.menuOpen));
  }
  render(){
    return (
      <div className="Home container-fluid">
          <img id="MainLogo" src={Logo} alt="Logo"/>
          <img id="Sidebar" src={MenuBar} alt="Logo" onClick={this.openMenuHandler}/>
          <img id="Water_Home"src={Water} alt="Water" />
          <img id="Ship_Home"src={Ship} alt="Ship" />
          <div className="container">

          <div className="LinksSection">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div  id="Social_Home" >
                        Follow Us 
                        <a target="_blank" href="https://www.facebook.com/kreiva.iiitv/"><img id="fb" src={fbIcon} alt="facebook"/></a>
                        <a target="_blank" href="https://www.instagram.com/kreiva.iiitv/?hl=en"><img id="insta" src={instaIcon} alt="instagram"/></a>
                        <a target="_blank" href="https://twitter.com/kreiva_iiitv"><img id="twitter" src={twitterIcon} alt="twitter"/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div  id="Date_Home">
                      <img id = "Calendar"src={Calendar} alt="Calendar"/> 27-28th October, 2018
                  </div>
                </div>
          </div>
          </div> 
      </div>
    )
  }
}

export default Home;
