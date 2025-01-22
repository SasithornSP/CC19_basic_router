import { useEffect } from "react";
import usePDstrore from "../Store/PDstrore"
import ProductCard from "../components/ProductCard";

//สร้างหน้า Products สำหรับแสดงข้อมูลสินค้า
function Products() {
  const Products = usePDstrore((state) => state.products)
  const actionGetData=usePDstrore((state)=>state.actionGetData)

  useEffect(()=>{
    actionGetData()
  },[])
  console.log(Products);

  return (
    <div >
      {/* <button onClick={actionGetData} className="bg-green-500">
        Get Data
      </button> */}
      {/* <hr /> */}
      <div className="flex flex-wrap">
      {Products?.map((product)=>{
          // console.log(product);
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>
    </div>
  )
}

export default Products