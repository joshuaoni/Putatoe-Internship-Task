import React, {useEffect} from 'react';
import s1 from '../images/slide1.PNG';
import s2 from '../images/slide2.PNG';
import s3 from '../images/slide3.PNG';

const Cover = () => {

// Algorithm for slide show
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1};

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}

useEffect(() => {
  showSlides();
  // eslint-disable-next-line
}, [])

    return (
        <div className='cover'>
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext"></div>
                <img alt='' src={s3}  />
                <div className="text"></div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                <img alt='' src={s2}  />
                <div className="text"></div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                <img alt='' src={s1}  />
                <div className="text"></div>
              </div>
            </div>

            <br/>

            <div >
              <span className="dot"></span> 
              <span className="dot"></span> 
              <span className="dot"></span> 
            </div>
        </div>
    );
}
 
export default Cover;