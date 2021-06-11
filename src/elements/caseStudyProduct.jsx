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
                                    <p>UI & UX Design for _____</p>
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
                                                        <p>Solar and other clean tech projects need investors in order to create a larger impact. Other infrastructure industries like real estate have investment platforms, but more and more people want to make sure their money has a positive impact. These energy conscious users want to fund specific products, because research shows that people respond better to a specific story rather than general statistics. They want a platform where they know where their money is going. </p>
                                                    <h4 className="title">Questions</h4>
                                                        <ul className="liststyle">
                                                            <li>How can I create a modular component library based off of ReactBootstrap? </li>
                                                            <li>How can make a seamless investment flow while directing user's to our business partner's site?</li> 
                                                            <li>How can I design with development in mind to keep the project within budget? </li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area the research*/}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                        
                                                    <h4 className="title">Process Overview</h4>
                                                    <ul className="liststyle">
                                                        <li><em>Research: </em>Studied companies with a similar product in different industries</li>
                                                        <li><em>Brainstorm: </em>Worked with a team of designers on site maps and wireframes</li>
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
                                                            <li> Only created two card sizes. </li>
                                                            <li> The mobile project card doubles as both the small desktop project card and the portfolio card</li>
                                                            <li> The <em>mobile-first design process</em> allowed us to feed two birds with one scone.</li> 
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
                                                    <h5>Design System based on React Boostrap</h5>
                                                    <p>The development team was going to use boostrap, so I made the base of the design the bootstrap elements and layered our UI elements in them. For example, the React bootstrap card does not have the right inner composition for our use case. I used the shape of the card, and added our use-case information within </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-30.jpg" alt="Service Images"/>
                                                   
                                                    
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
                                                            <p> The project had limitations of time and money, so it was important to develop a close relationship with the Engineering team. The fast turn around of the initial demo product was collaborative and agile. ____</p>
                                                        </li>
                                                    </ul>
                                                    <ul className="liststyle">
                                                        <h3>What went well: Designing with Development in Mind</h3>
                                                        <li>
                                                            <p> The project had limitations of time and money like most project do. It was important to develop a close relationship with the Engineering team. The fast turn around of the initial demo product was collaborative and agile. ____ My front end development experience let me hit the ground running due to my familiarity with react bootstrap. I was able to follow the existing design system while knowing when to break away from it to improve our customer experience. Situationalism is a key design skill whether it is the basic heuristics of design or the company specific branding. </p>
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
