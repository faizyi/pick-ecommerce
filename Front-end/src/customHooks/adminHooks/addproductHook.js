import React, { useState } from 'react';
export default function addproductHook() {
    const [product, setProduct] = useState({
        productName: '',
        price: {
          op: '',
          cost: '',
          discount: ''
        },
        category: '',
        subcategory: '',
        productImage: '',
        description: '',
        quantity: ""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
          setProduct((prev) => ({
            ...prev,
            [name]: value
          }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
      };
  return {
    product,
    handleChange,
    handleSubmit
  }
}
