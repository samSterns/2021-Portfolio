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
                                                    <a href="/service">UX and UI Design<span> - Product Designer</span></a>
                                                    End to end: research to mockups to prototypes
                                                </li>
                                                <li>
                                                    <a href="/service">UI Development<span> - Engineer</span></a>
                                                    I actually like CSS
                                                </li>
                                                <li>
                                                    <a href="/service">Accessibility Audits <span> - Designer and Coder</span></a>
                                                    Audit legacy codebase and design solutions to improve accessibility. 
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">UI/UX Designer and Accessibility Consultant<span> - Sustainabilist</span></a> DEC 2020 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">UI/UX Design<span> - Accessifiers Nonprofit</span></a> NOV 2020 - MAY 2021
                                               </li>
                                               <li>
                                                   <a href="/service">Product Designer and FE Engineer<span> - Equip ID </span></a> MAY 2020 - SEPT 2020
                                               </li>
                                               <li>
                                                   <a href="/service">UX Researcher<span> - Sustainabilist </span></a> MAY 2017 - SEPT 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BA in Interdisciplinary Studies of Social Research<span> - The University of California  Berkeley </span></a> MAY 2017
                                               </li>
                                               <li>
                                                   <a href="/service">Full-stack Engineering Program<span> - Alchemy Code Lab</span></a> MARCH 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Design Thinking<span> - Udemy </span></a> DECEMBER 2020
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