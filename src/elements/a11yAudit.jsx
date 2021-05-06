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
                                                                                              
                                                    <ul className="liststyle">
                                                        <li>My role: <em>UX Engineer</em></li>
                                                        <li>Client: <em>Start-up w/ Enterprise Client</em></li>
                                                        <li>Industry: <em>Solar Energy</em></li>
                                                        <li>My Contributions: <em> UX Design, Multi-dimensional Accessability Audit, Code Revisions, Design System Documentation </em></li>
                                                        <li>Project Overview: <em> UX Design, Multi-dimensional Accessability Audit, Code Revisions, Design System Documentation </em></li>
                                                    </ul>
                                                    <h4 className="title">The Problem</h4>
                                                        <p>Legacy code had accessability issues and the usability of the UI needed improvement </p>
                                                        <ul>
                                                            <li>How can I meet the WCAG AA standards </li>
                                                            <li> How can address tha main user roadblocks?</li> 
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
                                                    
                                                    <li><em>Research:</em>Initial audit complete with Axe-Core to document and prioritize every issue</li>
                                                    <li><em>It:</em>created prototypes in Figma</li>
                                                    <li><em>Test:</em>Presented a high-level overview of the audit and the prototyped accessible solutions to stakeholders</li>
                                                    <li><em>Deliver:</em>Collaborated with cross-disciplinary teams to implement my recommendations in the front end with CSS, React, HTML/JSX</li>
                                                   
                                                  
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
                                                    <h4 className="title">The Constraints</h4>
                                                        <p>When a person who uses a screen reader navigates a website to look up reviews, the user experience is not inclusive to their needs. </p>
                                                        <ul>
                                                            <li>How can we improve the experience for people with disabilities when reading or listening to reviews? </li>
                                                            <li> How can we gather informative reviews?</li> 
                                                            <li>How can we improve searching through reviews to find specific accessability topics?</li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area TBD  */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                        
                                                    <h4 className="title">Solutions</h4>
                                                    <p></p>
                                                    <ul className="liststyle">
                                                    <li> Improved information hierarchy by correcting the use of headers by adding semantic HTML while keeping consistent styling</li>
                                                    <li> Created cohesion by cleaning up the Style guide’s button and link display and implementation</li>
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
                                                    <h3>Human Centered Design's Research and Inspiration</h3>
                                                        <p> Through research and interviews I learned a lot more about screen readers and other assistive devices. The deep dive into our user's experience gave me a greater sense of empathy and renewed my passion for creating inclusive technology. </p>
                                                
                                                    <h3>Collaborating with a team of designers</h3>
                                                        <p> We currently implementing and testing our designs. It is amazing to work on a team of people who self selected to do a project around accessability. The collaboration across the country has taught me about the process of iteration and critique. We have struck a balance between convergent collaboration and divergent autonomous work.</p>
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