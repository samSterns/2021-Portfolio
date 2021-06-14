import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderCaseStudy";
// import Pic from "../../public/assets/images/se/solarPic.jpg";



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
                <PageHelmet pageTitle='A11y Audit Case Study' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--6"  data-black-overlay="5">
                    
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Accessibility Audit</h2>
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
                                                    <img className="w-100" src="/assets/images/service/service-22.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title">The Overview</h4>                   
                                                    <ul className="liststyle">
                                                        <li>My role: <em>UX Engineer</em></li>
                                                        <li>Client: <em>Start-up w/ Enterprise Client</em></li>
                                                        <li>Industry: <em>Solar Power / Construction / Clean Technology</em></li>
                                                        <li>My Contributions: <em>UX Design, Multidimensional Accessibility Audit, Code Revisions, Design System Documentation</em></li>
                                                        <li>Project Overview: <em>Improve workflows for solar installers and contractors while improving accessibility.</em></li>
                                                    </ul>
                                                    <h4 className="title">The Problem</h4>
                                                        <p>Fix the legacy code accessibility issues and improve the usability of the UI </p>
                                                        <ul className="liststyle">
                                                            <li>How can I meet the WCAG AA standards? </li>
                                                            <li>How can address the main user roadblocks?</li> 
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
                                                    <ul className="liststyle">
                                                        <li><em>Research: </em>Initial multidimensional audit complete with <em>Axe-Core</em> and documented with Airtable</li>
                                                        <li><em>Brainstorm: </em>Prioritized every opportunity for improvement</li>
                                                        <li><em>Build: </em>Prototyped solutions in <em>Figma</em></li>
                                                        <li><em>Test: </em>Presented a high-level overview of the audit and the prototyped accessible solutions to stakeholders including users</li>
                                                        <li><em>Iterate: </em>Refined designs based on stakeholder's feedback</li>
                                                        <li><em>Deliver: </em>Collaborated with cross-disciplinary teams to implement my recommendations in the User Interface with <em>CSS, React, HTML/JSX</em></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-25.jpg" alt="Service Images"/>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                          {/* Start Single Area Atomic design */}
                                          <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/service-20.svg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Solution #1</h4>
                                                    <h5>Visual Consitecy</h5>
                                                        <ul className="liststyle">
                                                            <li>Improved the color pallette by reducing the number of colors used </li>
                                                            <li> Increased color contrast of all status colors to meet WCAG standards </li> 
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
                                                    <img className="w-100" src="/assets/images/service/service-21.svg" alt="Service Images"/>
                                                   
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                    {/* Start Single Area what i learned  */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-26.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                                                              
                                                 
                                                    <h4 className="title">What I Learned:</h4>
                                                   
                                                    <ul className="liststyle">
                                                        <li>
                                                            <h3>Multidimensional Accessibility Audit</h3>
                                                            <p>I learned how to document a technical audit while using a technique I learned at the Deque Axe Conference. The prioritization method let me break down the work into vertical slices while accomplishing the most important tasks first. I used my developer experience to understand the impact and expense of each solution.</p>
                                                            <a style={{color: "blue"}} href="https://noti.st/davatron5000/MiKgzk" alt="learn more about multidimensional audits" target="_blank"> Learn More </a> 
                                                        </li>
                                                        <li>
                                                            <h3>Collaborating with a Team of Engineers</h3>
                                                            <p> I taught the development team solutions to their most common errors, which addressed the source of the problem and reduced further creation of technical debt.</p>

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

// import React, { Component } from "react";
// import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
// import ScrollToTop from 'react-scroll-up';
// import { FiChevronUp } from "react-icons/fi";
// import Header from "../component/header/Header";



// class AllyAudit extends Component{
//     constructor () {
//         super()
//         this.state = {
//           isOpen: false
//         }
//         this.openModal = this.openModal.bind(this)
//     }
//     openModal () {
//         this.setState({isOpen: true})
//     }
//     render(){
//         return(
//             <React.Fragment>
                
//                 {/* Start Pagehelmet  */}
//                 <PageHelmet pageTitle='Service Details' />
//                 {/* End Pagehelmet  */}

//                 <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

//                 {/* Start Breadcrump Area */}
//                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="rn-page-title text-center pt--100">
//                                     <h2 className="title theme-gradient">Accessibility Audit</h2>
//                                     <p>Audit of a Design System and Legacy Codebase</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* End Breadcrump Area */}

//                 {/* Start Page Wrapper */}
//                 <div className="rn-service-details ptb--120 bg_color--1">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="service-details-inner">
//                                     <div className="inner">
//                                         {/* Start Single Area the problem */}
//                                         <div className="row sercice-details-content pb--80 align-items-center">
//                                             <div className="col-lg-6 col-12">
//                                                 <div className="thumb">
//                                                     <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-12">
//                                                 <div className="details mt_md--30 mt_sm--30">
                                                                                              
//                                                     <ul className="liststyle">
//                                                         <li>My role: <em>UX Engineer</em></li>
//                                                         <li>Client: <em>Start-up w/ Enterprise Client</em></li>
//                                                         <li>Industry: <em>Solar Energy</em></li>
//                                                         <li>My Contributions: <em> UX Design, Multi-dimensional Accessibility Audit, Code Revisions, Design System Documentation </em></li>
//                                                         <li>Project Overview: <em> UX Design, Multi-dimensional Accessibility Audit, Code Revisions, Design System Documentation </em></li>
//                                                     </ul>
//                                                     <h4 className="title">The Problem</h4>
//                                                         <p>Legacy code had accessibility issues and the usability of the UI needed improvement </p>
//                                                         <ul>
//                                                             <li>How can I meet the WCAG AA standards </li>
//                                                             <li> How can address tha main user roadblocks?</li> 
//                                                             <li>How can I improve the visual consistency across a large legacy codebase? </li>
//                                                         </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* End Single Area */}

//                                         {/* Start Single Area the research*/}
//                                         <div className="row sercice-details-content align-items-center">
//                                             <div className="col-lg-6 col-12 order-2 order-lg-1">
//                                                 <div className="details mt_md--30 mt_sm--30">
                                        
//                                                     <h4 className="title">Process Overview</h4>
//                                                     <p>Multi-dimensional Audit </p>
//                                                     <ul className="liststyle">
                                                    
//                                                     <li><em>Research:</em>Initial audit complete with Axe-Core to document and prioritize every issue</li>
//                                                     <li><em>It:</em>created prototypes in Figma</li>
//                                                     <li><em>Test:</em>Presented a high-level overview of the audit and the prototyped accessible solutions to stakeholders</li>
//                                                     <li><em>Deliver:</em>Collaborated with cross-disciplinary teams to implement my recommendations in the front end with CSS, React, HTML/JSX</li>
                                                   
                                                  
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-12 order-1 order-lg-2">
//                                                 <div className="thumb position-relative">
//                                                     <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
//                                                     <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
//                                                     <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* End Single Area */}

//                                           {/* Start Single Area Atomic design */}
//                                           <div className="row sercice-details-content pb--80 align-items-center">
//                                             <div className="col-lg-6 col-12">
//                                                 <div className="thumb">
//                                                     <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-12">
//                                                 <div className="details mt_md--30 mt_sm--30">
//                                                     <h4 className="title">The Constraints</h4>
//                                                         <p>When a person who uses a screen reader navigates a website to look up reviews, the user experience is not inclusive to their needs. </p>
//                                                         <ul>
//                                                             <li>How can we improve the experience for people with disabilities when reading or listening to reviews? </li>
//                                                             <li> How can we gather informative reviews?</li> 
//                                                             <li>How can we improve searching through reviews to find specific accessibility topics?</li>
//                                                         </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* End Single Area */}

//                                         {/* Start Single Area TBD  */}
//                                         <div className="row sercice-details-content align-items-center">
//                                             <div className="col-lg-6 col-12 order-2 order-lg-1">
//                                                 <div className="details mt_md--30 mt_sm--30">
                                        
//                                                     <h4 className="title">Solutions</h4>
//                                                     <p></p>
//                                                     <ul className="liststyle">
//                                                     <li> Improved information hierarchy by correcting the use of headers by adding semantic HTML while keeping consistent styling</li>
//                                                     <li> Created cohesion by cleaning up the Style guide’s button and link display and implementation</li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-12 order-1 order-lg-2">
//                                                 <div className="thumb position-relative">
//                                                     <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
//                                                     <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
//                                                     <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* End Single Area */}
//                                     {/* Start Single Area what i learned  */}
//                                         <div className="row sercice-details-content pb--80 align-items-center">
//                                             <div className="col-lg-6 col-12">
//                                                 <div className="thumb">
//                                                     <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-12">
//                                                 <div className="details mt_md--30 mt_sm--30">
                                                                                              
                                                 
//                                                     <h4 className="title">What I Learned:</h4>
//                                                     <h3>Human Centered Design's Research and Inspiration</h3>
//                                                         <p> Through research and interviews I learned a lot more about screen readers and other assistive devices. The deep dive into our user's experience gave me a greater sense of empathy and renewed my passion for creating inclusive technology. </p>
                                                
//                                                     <h3>Collaborating with a team of designers</h3>
//                                                         <p> We currently implementing and testing our designs. It is amazing to work on a team of people who self selected to do a project around accessibility. The collaboration across the country has taught me about the process of iteration and critique. We have struck a balance between convergent collaboration and divergent autonomous work.</p>
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* End Page Wrapper */}
                
//                 {/* Start Back To Top */}
//                 <div className="backto-top">
//                     <ScrollToTop showUnder={160}>
//                         <FiChevronUp />
//                     </ScrollToTop>
//                 </div>
//                 {/* End Back To Top */}
                
//                 {/* <Footer /> */}

//             </React.Fragment>
//         )
//     }
// }
// export default AllyAudit;