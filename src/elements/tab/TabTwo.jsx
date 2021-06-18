import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main Skills",
        tab2 = "Experience",
        tab3 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>                           
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    UI and UX Design<em> - Product Designer<br></br></em>
                                                    I do it all: From research to mockups to prototypes.
                                                </li>
                                                <li>
                                                    UI Development<em> - Front End Software Engineer<br></br></em>
                                                    I actually like CSS.
                                                </li>
                                                <li>
                                                    Accessibility Audits <em> - Designer and Software Developer<br></br></em>
                                                    I audit legacy codebases and design solutions to improve accessibility. 
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <em>UI/UX Designer and Accessibility Consultant</em><br></br><span> - Sustainabilist with Clients: FIT QM and the Department of Energy</span> <br></br>DEC 2020 - Current
                                               </li>
                                               <li>
                                                   <em>UI/UX Design</em><br></br><span> - Accessifiers Nonprofit </span> <br></br>NOV 2020 - MAY 2021
                                               </li>
                                               <li>
                                                   <em>Product Designer and Front End Engineer</em> <br></br><span> - Equip ID with Clients: Rail, Chipotle, and Apple</span> <br></br>MAY 2020 - SEPT 2020
                                               </li>
                                               <li>
                                                   <em>UX Researcher</em><br></br><span> - Sustainabilist </span> <br></br>MAY 2017 - SEPT 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   Design Thinking
                                                   <p> <em>- Udemy</em> <br></br><span>DECEMBER 2020</span> </p> 
                                               </li>
                                               <li>
                                                    Full-stack Engineering Program
                                                   <p> <em>- Alchemy Code Lab</em><br></br><span>MARCH 2020</span> </p> 
                                               </li>
                                               <li>
                                                   BA in Interdisciplinary Studies of Social Research <br></br>
                                                   Graduated Magna Cum Laude
                                                   <p> <em>- The University of California  Berkeley</em> <br></br><span>MAY 2017</span> </p> 
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;