import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'UI & UX Design',
        file: 'a11yReview',
        title: 'Accessibility'
    },
    {
        image: 'image-2',
        category: 'Design & Development',
        file: 'a11yAudit',
        title: 'Accessibility Audit'
    },
    {
        image: 'image-3',
        category: ' Most Recent UI & UX Design',
        file: 'caseStudyProduct',
        title: 'Product Design'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <a href={value.file}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h3>{value.title} <br></br> Case Study</h3>
                                
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.file}>View Details</a>
                                    </div>
                                </div>
                            </div>
                                </a>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;