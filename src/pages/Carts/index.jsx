import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button"
import { useSelector } from "react-redux"
import { cartProducts } from "../../stores/carts/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch"
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg"
import { AddressForm } from "../../components/AddressForm";
import { ProductsSummary } from "../../components/ProductSummary";


const Cart = () => {
  const cart= useSelector(cartProducts);
  const tabs= ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

  if (!cart || cart.length === 0) {
    return (
      <div className="bg-white h-full text-black flex items-center justify-center p-4">
        <h1>Your Cart is Empty</h1>
      </div>
    )
  }
  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
      <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
        <ProductsSummary />
      </div>
      <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
        <AddressForm onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
        Payment Form
      </div>
    </div>
  )
}

export default Cart;