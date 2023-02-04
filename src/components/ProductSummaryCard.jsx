import { useDispatch } from "react-redux"
import {incrementProductAmount, decrementProductAmount } from "../stores/carts/cartSlice";

export const ProductSummaryCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex p-1 sm:p-2 border-b border-b-gray-200">
      <div className="product-image mr-2 border border-grey-200 rounded-lg w-full sm:w-1/3">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 text-base">{product.description}</p>
      </div>
      <div className="product-price-qt flex flex-col items-center justify-center">
        <div className="price font-semibold">{`${product.price}$`}</div>
        <div className="quantity flex">
          <button className="p-1 font-medium" disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}>-</button>
          <span className="p-1 font-semibold">{product.amount}</span>
          <button className="p-1 font-medium" onClick={() => dispatch(incrementProductAmount(product))}>+</button>
        </div>
      </div>
    </div>
  )
}