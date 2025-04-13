import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss'; // Custom styles for the Home component

const Home: React.FC = () => {
    const images = [
        '/images/couple1.jpg',
        '/images/couple2.jpg',
        '/images/couple3.jpg',
        '/images/couple4.jpg',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="home-carousel-container">
            <Slider {...settings} className="home-carousel">
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Home;