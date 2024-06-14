import React from "react";



const Hero = () => {
    return (
         
        <section className="intro">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z" fill="black" />
            </svg>
            <div className="contain">
                <div className="intro-text">                   
                 
                    <h1>Make The Best Financial Decisions</h1>
                    <p>
                        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                    <div className="button-container">
                        <button className="GetStarted">
                            Get Started <span>&#8594;</span>
                        </button>
                        <button className="WatchVideo">
                            <img src="assets/Watch.png" alt="Play Button" id="watch" /> Watch Video
                        </button>
                    </div>
                </div>
                <div className="img-container">
                    <img id="p1" src="assets/iPhone-13-Pro-Front.png" alt="Phone" />
                    <img id="p2" src="assets/iPhone-13-Pro-mid.png" alt="Phone" />
                    <img id="p3" src="assets/iPhone-13-Pro-Front.png" alt="Phone" />
                </div>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z" fill="black" />
                </svg>
            </div>

            <div className="svg-container" id="pricing">
                
                <div className="rectangle red-horizontal">
                    <div className="text-content">
                        <div className="lines">
                            <div class="vertline">|</div>
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z" fill="black" />
                            </svg>


                            <div class="vertline">|</div>
                            
                        </div>
                        <div className="utifry">
                            <div>Uifry Premium</div>
                            <div>Free Trial</div>
                        </div>
                    </div>
                </div>
                <div className="rectangle red-middle">
                    Make The Best Financial Decisions
                </div>
                <div className="rectangle black-top">
                    <div className="left1">
                        <img src="assets/trophy.png" alt="Achievement Icon" className="icon" />
                        <div className="left">
                        <div className="achievement-title">Achievements</div> 
                            <div className="achievement-subtitle">Best Finance App On Playstore</div>
                        </div>
                    </div>
                    <div class="slash">/</div>
                    <div className="right1">
                        <img src="assets/bank-note-03.png" alt="Achievement Icon" className="icon" />
                        <div className="right">
                        <div className="finance-title">Finance</div>
                            <div className="finance-subtitle">Most Popular Accounting App</div>
                        </div>
                    </div>
                  
                </div>

                <div className="letter-a">
                    A
                </div>

            </div>
        </section>
    );
};




export default Hero;

//Returns the JSX for the hero section, including a headline, subheadline, and buttons.