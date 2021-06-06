import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} </title>
                    <meta name="description" content="Sam G Sterns Software Designer's portfolio page featuring UX Design, digital accessability, and front end React coding." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
