// import Slider from 'react-slick';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };
  const slides = [
    {
      id: 1,
      image: 'https://img.freepik.com/premium-photo/pile-smartphones_1001175-64921.jpg?w=900',
      title: 'Discover Our Latest Collection',
      subtitle: 'Shop the best quality products at amazing prices.',
    },
    // {
    //   id: 2,
    //   image: 'https://via.placeholder.com/1200x500',
    //   title: 'Unbeatable Discounts on Fashion',
    //   subtitle: 'Get up to 50% off on all items this season.',
    // },
  ];
export default function Carousel() {
  return (
    <section>
      {/* <Slider {...settings}> */}
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div> */}
            </div>
          </div>
        ))}
      {/* </Slider> */}
    </section>
  )
}
