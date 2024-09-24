import { Carousel as AntCarousel } from 'antd';
const products = [
  { id: 1, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 2, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 3, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 4, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 5, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 6, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 7, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 8, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 9, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
  { id: 10, image: 'https://www.thewarehouse.pk/cdn/shop/files/WhatsApp_Image_2024-07-06_at_1.02.37_AM_1_320x.jpg?v=1720463709' },
];

export default function Tshirts() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <AntCarousel
        autoplay
        dots={false} // Disable dots since there will be many images
        slidesToShow={6} // How many images to show
        slidesToScroll={1} // Scroll one image at a time
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4 },
          },
          {
            breakpoint: 400,
            settings: { slidesToShow: 3 },
          },
        ]}
      >
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="mx-auto rounded-lg shadow-lg max-h-60 object-cover"
            />
          </div>
        ))}
      </AntCarousel>
    </div>
  );
}
