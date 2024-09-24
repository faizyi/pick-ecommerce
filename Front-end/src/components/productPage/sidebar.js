"use client";
import { Checkbox, Slider, Radio } from 'antd';
export default function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-white shadow-lg p-4">
    <h2 className="text-2xl font-semibold mb-6">Filters</h2>

    {/* Category Filter */}
    <div className="mb-6">
      <h3 className="font-medium text-lg mb-2">Category</h3>
      <Checkbox.Group>
        <Checkbox className="block mb-2">Electronics</Checkbox>
        <Checkbox className="block mb-2">Clothing</Checkbox>
        <Checkbox className="block mb-2">Accessories</Checkbox>
      </Checkbox.Group>
    </div>

    {/* Price Filter */}
    <div className="mb-6">
      <h3 className="font-medium text-lg mb-2">Price Range</h3>
      <Slider range defaultValue={[10, 50]} min={0} max={100} />
    </div>

    {/* Sort By Filter */}
    <div>
      <h3 className="font-medium text-lg mb-2">Sort By</h3>
      <Radio.Group defaultValue="price">
        <Radio className="block mb-2" value="price">Price</Radio>
        <Radio className="block mb-2" value="popularity">Popularity</Radio>
        <Radio className="block mb-2" value="rating">Rating</Radio>
      </Radio.Group>
    </div>
  </aside>
  )
}
