import { CloseOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function HeaderDrawer({ drawerVisible, setDrawerVisible }) {
  const closeDrawer = () => setDrawerVisible(false);
  const date = new Date().getFullYear();
  return (
    <Drawer
      title="My Store"
      placement="left"
      onClose={closeDrawer}
      open={drawerVisible}
      className="lg:hidden relative z-50"
      height="100vh"
      closeIcon={<CloseOutlined style={{ color: '#fff', fontSize: '20px' }} />}
      styles={{
        content: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Black with 90% opacity
          backdropFilter: 'blur(10px)', // Applies the blur effect
          WebkitBackdropFilter: 'blur(10px)', // Ensures cross-browser compatibility
        },
        header: {
          color: '#fff',
        },
      }}
    >
      <div className="flex flex-col h-full ">
        <div className="flex-grow flex flex-col items-center space-y-11">
          <Link href="/" onClick={closeDrawer} className="text-gray-700 hover:text-white text-lg">
            Home
          </Link>
          <Link href="/deals" onClick={closeDrawer} className="text-gray-700 hover:text-white text-lg">
            About
          </Link>
          <Link href="/customer-service" onClick={closeDrawer} className="text-gray-700 hover:text-white text-lg">
            Shop
          </Link>
          <Link href="/contact" onClick={closeDrawer} className="text-gray-700 hover:text-white text-lg">
            Contact
          </Link>
        </div>
        <div className="border-t border-gray-200 pt-6 pb-4">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <FaFacebookF className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500">
            © {date} My Store. All rights reserved.
          </p>
        </div>
      </div>
    </Drawer>
  );
}
