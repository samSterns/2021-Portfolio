import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderCaseStudy";
// import Pic from "../../public/assets/images/se/solarPic.jpg";



class CaseStudyProduct extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Product Case Study' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"  data-black-overlay="5">
                    
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Clean Tech Product</h2>
                                    <p>UI & UX Design for Crowd Funding Platform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area the problem */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-27.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title">The Overview</h4>                   
                                                    <ul className="liststyle">
                                                        <li>My role: <em>UI & UX Designer</em></li>
                                                        <li>Client: <em>Start-up </em></li>
                                                        <li>Industry: <em>Solar Power / Clean Technology / Crowd Funding Platform </em></li>
                                                        <li>My Contributions: <em> UX Design, UI Design, Design System for future scalability </em></li>
                                                        <li>Project Overview: <em> Design a platform for community member to fund solar projects.</em></li>
                                                    </ul>
                                                    <h4 className="title">The Problem</h4>
                                                        <p>Solar and other clean tech projects need investors in order to create a larger impact. Other infrastructure industries like real estate have investment platforms, but more and more people want to make sure their money has a positive impact. These energy conscious users want to fund specific products, because research shows that people respond better to a specific story rather than general statistics. They want a platform where they know their money is contributing to social good. </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area the research*/}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title">Questions</h4>
                                                        <ul className="liststyle">
                                                            <li>How can I create a modular component library based off of ReactBootstrap? </li>
                                                            <li>How can make a seamless investment flow while directing user's to our business partner's site?</li> 
                                                            <li>How can I design with development in mind to keep the project within budget? </li>
                                                        </ul>
                                                    <h4 className="title">Process Overview</h4>
                                                    <ul className="liststyle">
                                                        <li><em>Research: </em>Studied companies with a similar product in different industries</li>
                                                        <li><em>Brainstorm: </em>Worked with a team of designers on site maps, empathy maps and wireframes</li>
                                                        <li><em>Build: </em>Prototyped solutions in <em>Figma</em></li>
                                                        <li><em>Test: </em>Presented the prototyped solutions to stakeholders</li>
                                                        <li><em>Iterate: </em>Refined designs based on stakeholder's feedback</li>
                                                        <li><em>Deliver: </em>Collaborated with cross-disciplinary teams to implement my designs in the User Interface with <em>CSS, React, HTML/JSX</em></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-28.jpg" alt="Service Images"/>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                          {/* Start Single Area Atomic design */}
                                          <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/service-29.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Solution #1</h4>
                                                    <h5>Modular Components</h5>
                                                        <ul className="liststyle">
                                                            <li> Only two card sizes </li>
                                                            <li> The mobile project card doubles as both the small desktop project card and the portfolio card</li>
                                                            <li> The <em>mobile-first design process</em> allowed us to feed two birds with one scone. We had a mobile and desktop card, so when the desktop version needed smaller cards for the portfolio page, we reused the mobile card component</li> 
                                                            <li>For the admin portal, we reused the card but replaced the learn more with and edit button</li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area TBD  */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                        
                                                    <h4 className="title">Solution #2 </h4>
                                                    <h5>Design System based on React Bootstrap</h5>
                                                    <ul className="liststyle">
                                                            <li> The development team was going to use bootstrap, so I made the base of the design the bootstrap elements and layered our UI elements in them. </li>
                                                            <li> For example, the React bootstrap card does not have the right inner composition for our use case. I used the shape of the card, and added our use-case information within the same outline.</li>
                                                            <li>Another key area that used the existing design system of React bootstrap as a starting point is all of the form inputs in the onboarding process. For example, using bootstrap's form label and input box elements while changing the font, colors, and border radius to match our branding.</li>
                                                        </ul>
                                                    <p>  </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-30.jpg" alt="Service Images"/>
                                                   
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                            {/* Start Single Area Atomic design */}
                                            <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/service-34.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Solution #3</h4>
                                                    <h5>Peripheral Vision</h5>
                                                        <ul className="liststyle">
                                                            <li> The lengthy onboarding process could improve the visual appeal by adding illustration to the page.</li>
                                                            <li> I chose the placement of the illustration because <u>In 100 Things Every Designer Need to Know about People</u> by Susan M Weinschenk Ph.D. says, "If you have images of an emotional nature, out them in the periphery instead of the middle." </li>
                                                            <li> I chose a stationary image because Weinschenk goes onto say, "If you want users to concentrate on a certain part of the screen, don't put animation or blinking elements in their peripheral vision." In addition, WCAG 2.2.2 recommends, "Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it."</li> 
                                                            <li>Illustration credit <a href="https://www.istockphoto.com/portfolio/invincible_bulldog?mediatype=illustration">invincible_bulldog</a> </li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                                      {/* Start Single Area TBD  */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div >
                                                <div style={{padding: '1em'}} className="details mt_md--30 mt_sm--30">
                                        
                                                    <h4 className="title">Process </h4>
                                                    <h5>Collaborating with Designers</h5>
                                                    <p>Below is a before and after screenshot of the portfolio page. As you can see the before picture uses a smaller card format. This page was refactored because we wanted to limit the number of components we needed to build. The smaller cards also do not have enough negative space to be visually pleasing. By choosing to use the mobile version we made the components more modular and increase the visual appeal by improving the Gestalt principal of proximity. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2" style={{padding: '1em'}}>
                                                <div className="thumb position-relative">
                                                   <p>Before</p>
                                                    <img className="w-100" src="/assets/images/service/service-32.jpg" alt="Service Images"/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2" style={{padding: '1em'}}>
                                                <div className="thumb position-relative"  >
                                                    <p>After</p>
                                                    <img className="w-100" src="/assets/images/service/service-33.jpg" alt="Service Images" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    {/* Start Single Area what i learned  */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-31.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                                                              
                                                 
                                                    <h4 className="title">Self-reflection:</h4>
                                                   <p>Looking back on your day, sprint, and project is an insightful tool that invites you to learn from your mistakes and do better next time.</p>
                                                            <h3>What I can do better next time: Better Visual Quality</h3>
                                                    <ul className="liststyle">
                                                        <li>
                                                            <p> I learned a lot about the visual design during this project. One thing I tried for the first time was using a 8 point grid as apposed to a 10. While the concept of the 8 point grid worked, it was hard to get other designers fully on board with the new system. As I review this project I can now see where we deviated grid, and I know what to look out for in future iterations. </p>
                                                        </li>
                                                    </ul>
                                                    <ul className="liststyle">
                                                        <h3>What went well: Designing with Development in Mind</h3>
                                                        <li>
                                                            <p> The project had limitations of time and money like most projects do. It was important to develop a close relationship with the Engineering team to understand the possibilities. The fast turn around of the initial demo product was collaborative and agile. My front end development experience let me hit the ground running due to my familiarity with React Bootstrap. I was able to follow the existing design system while knowing when to break away from it to improve our customer's experience. Situationalism is a key design skill whether it is the basic heuristics of design or the company specific branding. </p>
                                                        </li>
                                                    </ul>
                                                        
                                                
                                                
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                {/* <Footer /> */}

            </React.Fragment>
        )
    }
}
export default CaseStudyProduct;
