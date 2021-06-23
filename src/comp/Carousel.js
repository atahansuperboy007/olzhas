import InfiniteCarousel from 'react-leaf-carousel';
import Slider from "../data/Slider";
import Sliderİtem from "../items/Sliderİtem";
function WelcomeList_1(props) {
    return (

        // <div className="drinks">
        <InfiniteCarousel breakpoints={[
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.1}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={1}
            scrollOnDevice={true}
        >
            {Slider.map((item) => {
                return (<Sliderİtem data={item} />)
            })}


        </InfiniteCarousel>

        // </div>

    )
}

export default WelcomeList_1;