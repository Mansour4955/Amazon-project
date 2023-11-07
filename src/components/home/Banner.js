import React, { useState } from "react";
import Slider from "react-slick";
import { bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive} from "../../assets/index"
const Banner = () => {
    const [dotActive,setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev,next)=> {
            setDotActive(next)
        },
        appendDots: (dots) => (
            <div style={{
              position: "absolute",
              top: "70%",
              left: "0",
              right: "0",
              margin: "0 auto",
              transform: "translateY(-50%)",
              width: "210px",
            }}> 
                <ul style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>{dots}</ul>
            </div>
        ),
        customPaging: (i)=> (
            <div style={
                dotActive === i 
                ? {width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid #f3a847",}
                : {width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#232f3e",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid white",}
            }>
                {i + 1}
            </div>
        ),
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              appendDots: (dots) => (
                <div style={{
                  position: "absolute",
                  top: "70%",
                  left: "0",
                  right:"0",
                  margin: "0 auto",
                  transform: "translateY(-50%)",
                  width: "150px",
                }}> 
                    <ul style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "3px",
                    }}>{dots}</ul>
                </div>
            ),
            customPaging: (i)=> (
              <div style={
                  dotActive === i 
                  ? {width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#131921",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid #f3a847",}
                  : {width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#232f3e",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid white",}
              }>
                  {i + 1}
              </div>
          ),
            }
          },
        ]
    };
  return ( <div className="w-full ">
 <div className="w-full h-full relative">
 <Slider {...settings}>
    <div>
      <img src={bannerImgOne} alt="bannerImgOne"/>
    </div>
    <div>
      <img src={bannerImgTwo} alt="bannerImgTwo"/>
    </div>
    <div>
      <img src={bannerImgThree} alt="bannerImgThree"/>
    </div>
    <div>
      <img src={bannerImgFour} alt="bannerImgFour"/>
    </div>
    <div>
      <img src={bannerImgFive} alt="bannerImgFive"/>
    </div>
  </Slider>
 </div>
</div>)
};

export default Banner;
