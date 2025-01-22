import { ShoppingCart,Trash2 } from "lucide-react";
import usePDstrore from "../Store/PDstrore";


function ProductCard({ product }) {
  const actionAddToCart = usePDstrore((state) => state.actionAddToCart);
  const actionRemoveProduct = usePDstrore((state)=>state.actionRemoveProduct)
  // console.log(product);
  return (
    <div className="bg-slate-100 m-2 p-2 rounded-md shadow-md w-[250px] ">
      <img
        className="w-[200px] h-[100px] object-cover"
        src={product.images[0]}
      />
      <p className="text-sm font-semibold">{product.title}</p>
      <p className="text-sm">{product.description.slice(0, 30)}</p>
      <div className="flex justify-between">
        <p className="text-sm">{product.price}</p>

        <div className="flex gap-2">
        <button onClick={()=>actionRemoveProduct(product.id)}>
            <Trash2 color="red"/>
        </button>
        <ShoppingCart
          className="hover:cursor-pointer"
          onClick={() => actionAddToCart(product)}
          color="blue"/>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;
