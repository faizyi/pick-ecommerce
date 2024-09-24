import { Carousel as AntCarousel } from 'antd';
const products = [
    { id: 1, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 2, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 3, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 4, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 5, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 6, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 7, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 8, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 9, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
    { id: 10, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8e47a14-6013-496a-92ff-1a2bbe9eab9c/W+KILLSHOT+2.png' },
  ];
export default function Shoes() {
  return (
    <div className="max-w-7xl mx-auto py-10">
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
  )
}
