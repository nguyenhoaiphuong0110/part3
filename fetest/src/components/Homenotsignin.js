import React from 'react';
import "../components/homenotsignin.css"
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img13 from "../img/img13.png";
import img14 from "../img/img14.png";
import img15 from "../img/img15.png";
import { useState } from "react";
import { Link } from 'react-router-dom';


function HomenotsigninForm() {
    return(
            <div className="App">
              <header>
                <div className="logo">
                <img className="logo1" src={img1} alt="Image 1" />
                <img className="logo2" src={img2} alt="Image 2" />
                </div>
                <div className="button">
                  <Link to="/login">
                    <button className="button1">Sign in</button>
                    </Link>
                </div>
              </header>
              <main>
                <div className="content1">
                    <div className="title-content">
                  <h2>Save your data storage here.</h2>
                  <p>Data Warehouse is a data storage area that
                  has been tested for security, so you can store
                   your data here safely but not be afraid of
                    being stolen by others.</p>
                    <Link to ="/404">
                    <button className="button3">Learn more</button>
                    </Link>
                    </div>
                  <div className="grid">
                    <div className="grid-item-content">
                      <img className="img1" src={img3}/>
                    </div>
                  </div>
                </div>
                <div className="features">
                <h2>Features</h2>
                <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                <div className="grid-container">
                    <div className="grid-item">
                      <div className="grid-item-1">
                        
                    </div>
                    </div>
                    <div className="grid-item">
                    <div className="grid-item-2">
                    </div>
                    </div>
                    <div className="grid-item">
                    <div className="grid-item-3">
                    </div>
                    </div>
                    <div className="grid-item">
                    <div className="grid-item-4">
                    </div>
                    </div>
                </div>
                <div className="gallary">
                <img className="img5" src={img5} alt="Feature 4" />
                <img className="img6" src={img6} alt="Feature 4" />
                <img className="img7" src={img7} alt="Feature 4" />
                <img className="img8" src={img8} alt="Feature 4" />
                </div>
                <div className="title1">
                  <h2>Search Data</h2>
                  <p>Don’t worry if your data is very large, the Data Warehoue provides a search engine,
                     which is useful for making it easier to find data effectively saving time.</p>
                  <Link to="/404">
                    <div className="link1">Learn more</div></Link>
                </div>
                <div className="title2">
                <h2>24 Hours Access</h2>
                  <p>Access is given 24 hours a full morning to night and
                      meet again in the morning, giving you comfort when
                      you need data when urgent.</p>
                      <Link to="/404">
                    <div className="link2">Learn more</div></Link>
                </div>
                <div className="title3">
                <h2>Print Out</h2>
                  <p>Print out service gives you convenience if someday
                      you need print data, just edit it all and just print it.</p>
                      <Link to="/404">
                    <div className="link3">Learn more</div></Link>
                </div>
                <div className="title4">
                <h2>Security Code</h2>
                  <p>Data Security is one of our best facilities. Allows for your files
                    to be safer. The file can be secured with a code or password that 
                    you created, so only you can open the file.</p>
                    <Link to="/404">
                    <div className="link4">Learn more</div></Link>
                </div>
                </div>
                <div className="slideshow">
                  <img className="img4" src={img4}></img>
                </div>
              </main>
              <footer className="footer">
        <div className="footer-container">
        <div className="footer-col">
            <h3>Data Warehouse</h3>
            <ul>
              <li>Warehouse Society, 234</li>
              <li>Bahagia Ave Street 
                  PRBW 29281</li>
              <li>info@warehouse.project</li>
              <li>1-232-3434 (Main)</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>About Us</h3>
            <p>Profile</p>
            <p>Features</p>
            <p>Careers</p>
            <p>DW News</p>
          </div>
          <div className="footer-col">
            <h3>Help</h3>
            <ul>
              <li>Suppost</li>
              <li>Sign up</li>
              <li>Guild</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className="footer-col-1">
            <h3>Follow Us</h3>
            <ul>
              <li><img src ={img13}></img></li>
              <li><img src ={img13}></img></li>
              <li><img src ={img13}></img></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; © Datawarehouse™, 2020. All rights reserved.</p>
              <p>Company Registration Number: 21479524.</p>
              <img className="img-footer1" src={img14}></img>
              <img className="img-footer2" src={img15}></img>
        </div>
      </footer>
            </div>
          );
        }
export default HomenotsigninForm;