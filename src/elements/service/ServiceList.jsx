import React ,{ Component }from "react";
import { GiUnicorn } from "react-icons/gi";
import { FaSearch, FaUniversalAccess, FaCogs, FaEgg, FaReact } from "react-icons/fa";


const ServiceList = [
    {
        icon: <FaSearch />,
        title: 'UX Research',
        description: 'My past experience as a UX Researcher informs how I approach learning about problems before applying solutions.'
    },
    {
        icon: <GiUnicorn />,
        title: 'UI & UX Design',
        description: 'I do it all from user journey to site maps to grids and style guides. In my next role I hope to specialize more. '
    },
    {
        icon: <FaUniversalAccess />,
        title: 'Accessible Code',
        description: 'I throw myself into the front end of the front-end. I make sure I ship accessible code, because I believe technology can be a tool for equity.'
    },
    { 
        icon: <FaReact />,
        title: 'UI Development',
        description: 'I can implement my designs in JavaScript, React, and CSS/Sass. With full-stack experience, I specialize in creating em perfect UIs (Get it, em not pixels).'
    },
    {
        icon: <FaCogs />,
        title: 'Design Systems',
        description: 'Following them. Creating them. Documenting them. Auditing them. Daydreaming about them.'
    },
    { 
        icon: <FaEgg />,
        title: 'Mission-Driven',
        description: 'I am a good egg. You can teach people to code, but you cannot always teach them to have empathy for your mission, your customers, and their colleagues.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            {/* <a href="/service-details"> */}
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            {/* </a> */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
