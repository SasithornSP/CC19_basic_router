import ProductCard from "../components/ProductCard";
import usePDstrore from "../Store/PDstrore"


function MyCart() {
    const cart = usePDstrore((state)=>state.cart)
    const actionClear = usePDstrore((state)=>state.actionClear)
    console.log(cart);
  return (
    <>
    <div className="flex flex-wrap">
        {cart.map((product)=>{
        return <ProductCard key={product.id} product={product}/>
        })}
    </div>
    <button onClick={actionClear}>Clear</button>
    </>
  );
}

export default MyCart