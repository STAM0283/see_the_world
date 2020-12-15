import { Slide } from "react-slideshow-image";
import ara from "../images/ara.jpg";
import bird from "../images/bird.jpg";
import butterfly from "../images/butterfly.jpg";
import cafe from "../images/cafe.jpg";
import iceland from "../images/iceland.jpg";
import the_road from "../images/the_road.jpg";
import tiger from "../images/tiger.jpg";
import 'react-slideshow-image/dist/styles.css'
import "./slide.css"; 

const proprieties = {
    duration: 5000,
    transitionDuration : 500,
    infinite: true,
    indicators: true,
    arrows: true

}

const Slideshow = () => {
    return (
        <div className="slide-container" style={{width: "80%", margin: "auto"}}>
            <Slide {...proprieties}>
                <div className="each-slide">
                    <div>
                        <img src={ara} alt="picture-ara" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={bird} alt="picture-bird"/>
                    </div>
                 </div>
                 <div className="each-slide">   
                    <div>
                        <img src={butterfly} alt="picture-butterfly" />
                    </div>
                 </div>
                 <div className="each-slide">   
                    <div>
                        <img src={cafe} alt="picture-cafe" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={iceland} alt="picture-iceland" />
                    </div>
                </div> 
                <div className="each-slide">
                    <div>
                        <img src={the_road} alt="picture-road" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={tiger} alt="picture-tiger" />
                    </div>
                </div>

            </Slide>
        </div >
    )
}

export default Slideshow