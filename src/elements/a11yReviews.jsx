import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderCaseStudy";
import Counter from "../elements/counters/CounterOne"

// import Pic from "../../public/assets/images/service/solarPic.jpg";


class a11yReviews extends Component{
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
            <React.Fragment >
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='A11y Reviews Case Study' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="n-page-titler-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
               
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Accessibility Reviews</h2>
                                    <h3>UI/UX Design for a disability community platform to rate digital products</h3>
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
                                                    <img className="w-100" src="/assets/images/service/service-03.svg" alt="Digital whiteboard group brainstorm of main user journey"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                <h4 className="title">The Overview</h4>
                                                    <ul className="liststyle">
                                                        <li>My role: <em>UX/UI Design Lead</em></li>
                                                        <li>Client: <em>Accessifiers Nonprofit</em></li>
                                                        <li>Industry: <em>Consumer Ratings</em></li>
                                                        <li>Inspiration: <em>Google's Material Design System</em></li>
                                                    </ul>
                                                <h4 className="title">My Contributions</h4>
                                                    <ul className="liststyle">
                                                        <li>User Research</li>
                                                        <li>UX Design using Human Centered Design Principles</li>
                                                        <li>UI Design with Atomic Design Principles</li>
                                                        
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area the problem */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-01.svg" alt="Storyboard describing user's emotional state during their journey"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                                                              
                                        
                                                    <h4 className="title">The Problem</h4>
                                                        <p>When a person who uses a screen reader navigates a website to look up reviews, the user experience is not inclusive to their needs. </p>
                                                        <ul>
                                                            <li>How can we improve the experience for people with disabilities when reading or listening to reviews? </li>
                                                            <li> How can we gather informative reviews?</li> 
                                                            <li>How can we improve searching through reviews to find specific accessibility topics?</li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area the research*/}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                        <h4 className="title">User Research</h4>

                                        <Counter />
                                        
                                                
                                                    <ul className="liststyle">
                                                    <li>I created criteria and sourced stakeholders, people with disabilities, allies, and design industry experts. </li>
                                                    <li>My interview and survey questions were carefully selected. I specifically asked questions oriented around current habits. I asked more how questions as apposed to why questions because my goal was to get a deeper understanding of how low-vision and screen reader users approached searching for reviews.</li>
                                                   
                                                    <li>After each interview and survey submission, I  conducted a Thematic Analysis by analyzing my notes with a color coordinated highlighting referencing different themes and wrote a synopsis for the design team.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-04.png" alt="Persona and demographic information"/>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        
                                        {/* Start Single Area the research*/}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <ul className="liststyle">
                                                    
                                                    <li>After synthesizing my qualitative and quantitative data, I created <em>Personas</em> and <em>Use Cases</em> in <em>Figma</em> to share with the design and development teams as well as stakeholders.</li>
                                                    <li>I conducted follow up research based on my findings. Including market research to learn more about the apps and assistive devices people had mentioned. In addition, I documented the ways the app stores and other major sites let users post reviews and filter results. The assessment of key competitors is an example of combining business needs with customer needs because we want our platform to offer something special for specific users.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-05.png" alt="Persona and demographic information"/>
                                                 
                                                </div>
                                            </div>
                                        </div>

                                          {/* Start Single Area Atomic design */}
                                          <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                {/* <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-09.png" alt="Service Images"/>
                                                </div> */}
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-08.svg" alt="color palette and button design"/>
                                                </div>
                                                {/* <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-07.jpg" alt="Service Images"/>
                                                </div> */}
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Atomic Design</h4>
                                                        <p>Atomic Design created by Brad Frost is a theory that likens Design Systems to chemistry. The process helps create a cohesive design system using repetitive components. </p>
                                                        <ul>
                                                            <li><em>Atoms</em> are the colors, typography, button elements, and more. To the left, are our smallest atoms </li>
                                                            <li><em>Molecules</em> are when multiple atoms come together  </li> 
                                                            <li><em>Organism</em> are  when atoms and molecules create more than the sum of atoms. For example, the card below combines these smaller elements. Design Systems rely on the re-use of base elements to create new features.</li> 
                                                            <li><em>Templates</em> explain the position of elements(organisms) on a page  </li> 
                                                            <li><em>Pages</em> are when you plug organism into your templates </li> 
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
                                                    <h5> Improving the process of searching for a review while using a screen reader</h5>
                                                    <ul className="liststyle">
                                                    <li>We removed the 'read more' button because users expressed this as a barrier because clicking through is harder than scanning more text. Screen reader use cases were more important than avoiding visual clutter. </li>
    
                                                    <li>The advanced search option allows users to tailor results for their needs, the technology used, and the app name or keyword, which is unique to this app. Other review websites only let you filter by most popular, highly rated, ect. With a narrower search result a person with a screen reader has less irrelevant information to listen to.</li>
                                                    
                                                    </ul>
                                                    {/* <h5> Provide accessibility specific search results</h5>
                                                    <ul className="liststyle">
                                                    <li>The post a review questionnaire struck a balance between gathering useful data while not overwhelming the user. </li>
                                                    
                                                    </ul> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-09.svg" alt="app summary card"/>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                    {/* Start Single Area what i learned  */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-11.svg" alt="Accessifier's logo"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                                                              
                                                 
                                                    <h4 className="title">What I Learned:</h4>
                                                    <h3>Human Centered Design's Research and Inspiration</h3>
                                                        <p>The team implemented many of the human-centered design principles including to <em>resist being attached to your own good idea</em>, <em>following the user's leads and needs</em>, and more. For example, the team focused on research initially because we were designing for screen reader users. The experience of navigating technology with assistive devices is different from how I perceive and navigate a website, so the research process required empathy and listening to lived experiences of other people. We followed their leads and needs, which led us to decisions that broke conventions, but for a good evidence-based reasons such as removing the 'read more' button. 
 </p>
                                                
                                                    <h3>Collaborating with a team of designers</h3>
                                                        <p> We are currently implementing and testing our designs. It is amazing to work on a team of people who have self selected to do a project around accessibility. The collaboration across the country has taught me about the process of iteration and critique. We have struck a balance between convergent collaboration and divergent autonomous work.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                            <a className="rn-button-style--2 btn-solid" href="/a11yAudit"><span>Next Project</span></a>
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
export default a11yReviews;