import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";



class AllyAudit extends Component{
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
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Accessability Audit</h2>
                                    <p>Audit of a Design System and Legacy Codebase</p>
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
                                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title">The Overview</h4>                   
                                                    <ul className="liststyle">
                                                        <li>My role: <em>UX Engineer</em></li>
                                                        <li>Client: <em>Start-up w/ Enterprise Client</em></li>
                                                        <li>Industry: <em>Solar Power / Clean Technology </em></li>
                                                        <li>My Contributions: <em> UX Design, Multidimensional Accessibility Audit, Code Revisions, Design System Documentation </em></li>
                                                        <li>Project Overview: <em> Improve workflows for solar installers and contractors while improving accessability.</em></li>
                                                    </ul>
                                                    <h4 className="title">The Problem</h4>
                                                        <p>Fix the legacy code accessability issues and improve the usability of the UI </p>
                                                        <ul>
                                                            <li>How can I meet the WCAG AA standards? </li>
                                                            <li>How can address tha main user roadblocks?</li> 
                                                            <li>How can I improve the visual consistency across a large legacy codebase? </li>
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
                                                    <p>Multi-dimensional Audit </p>
                                                    <ul className="liststyle">
                                                    
                                                    <li><em>Research: </em>Initial audit complete with Axe-Core and  documented with Airtable</li>
                                                    <li><em>Brainstorm: </em>Prioritized every opportunity for improvement</li>
                                                    <li><em>Build: </em>Prototyped solutions in Figma</li>
                                                    <li><em>Test: </em>Presented a high-level overview of the audit and the prototyped accessible solutions to stakeholders including users</li>
                                                    <li><em>Iterate: </em>Refine designs based on stakeholder's feedback</li>
                                                    <li><em>Deliver: </em>Collaborated with cross-disciplinary teams to implement my recommendations in the front end with CSS, React, HTML/JSX</li>
                                                   
                                                  
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                          {/* Start Single Area Atomic design */}
                                          <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Solution #1</h4>
                                                    <h5>Visual Consitecy</h5>
                                                        <ul>
                                                            <li>Improved the color pallete by reducing the number of colors used </li>
                                                            <li> Increased color contrast of all status colors</li> 
                                                            <li> Created cohesion by cleaning up the Style guide’s display and implementation of buttons and links</li>
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
                                                    <h5>Improved Hierarchy</h5>
                                                    <p>Improved information hierarchy by correcting the use of headers by adding semantic HTML while keeping consistent styling. A common mistake is to use and header tags to style the text. The proper use of headers is to inform the information architecture and the allow screen reader users to see a logical outline for a page. While the default styling of headers can be overridden in CSS.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                    {/* Start Single Area what i learned  */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                                                              
                                                 
                                                    <h4 className="title">What I Learned:</h4>
                                                   
                                                    <ul className="liststyle">
                                                        <li>
                                                            <h3>Multidimensional Accessibility Audit</h3>
                                                            <p>I learned how to document a technical audit while using a technique I learned at the Deque Axe Conference. The prioritization method let me break down the work into vertical slices while accomplishing the most important tasks first. I used my developer experience to understand the impact and expense of each solution.</p>
                                                            <a href="https://noti.st/davatron5000/MiKgzk" alt="learn more about multidimensional audits" target="_blank"> Learn More </a> 
                                                        </li>
                                                        <li>
                                                            <h3>Collaborating with a Team of Engineers</h3>
                                                            <p> I taught the development team solutions to their most common errors, which addressed the source of the problem and reduced further bottleneck of accessability issues.</p>

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
export default AllyAudit;