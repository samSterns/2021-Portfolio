import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Helmet from "../component/common/Helmet";

class Testimonial extends Component{
    render(){
        
        return(
            <React.Fragment>
                <Helmet pageTitle="testimonials" />
                
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>"Sam is a tenacious human who takes on their work with an open mind! Their creative thinking is a real asset to any organization. As Sam's mentor, I have seen and heard first hand about how they approach projects, their adaptability and most importantly, their humility in willing to learn about an organization's true north and approach to coding and accessible design."</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Hazel Valdez </span> - Associate Director, Oregon Bioscience Association and <em>PDX Women In Tech Ambassador</em>
</h6>

                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Serge Lubensky </span> - Founder at ReTool Ventures | Tech Entrepreneur</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Jannat Tumpa </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            {/* <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel> */}
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                {/* <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab> */}
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;