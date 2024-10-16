import { AiOutlineUser} from 'react-icons/ai'
import { Drawer } from 'antd'
import Link from 'next/link'
export default function HeaderDrawer({drawerVisible, setDrawerVisible}) {
    const closeDrawer = () => setDrawerVisible(false)
  return (
    <Drawer
    title="Menu"
    placement="bottom"
    onClose={closeDrawer}
    open={drawerVisible}
    className="lg:hidden relative z-50"
    height="100vh"
  >
    <div className="flex flex-col space-y-4">
      <Link href="/" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link href="/deals" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
        About
      </Link>
      <Link href="/customer-service" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
        Shop
      </Link>
      <Link href="/customer-service" onClick={closeDrawer} className="text-gray-700 hover:text-blue-600">
        Contact
      </Link>
    </div>
  </Drawer>
  )
}
