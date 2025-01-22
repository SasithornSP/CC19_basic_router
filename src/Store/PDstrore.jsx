import { create } from "zustand"
import axios from "axios"
import { persist } from "zustand/middleware"

//สร้าง store สำหรับเก็บข้อมูลสินค้า
const PDstrore =(set)=> ({
    products:[],
    cart:[],
    actionGetData:async()=>{
        try {
            const resp = await axios.get('https://dummyjson.com/products')
            console.log(resp.data.products);
            set({ products: resp.data.products });
        } catch (error) {
            console.log(error.message);
        }
    },
    actionAddToCart:(product)=>{
        // console.log(product);
        set((state)=>({cart:[...state.cart,product]}))
    },
    actionClear:()=>{
        set({cart:[]});
    },
    actionRemoveProduct:(id)=>{
        set((state)=>({cart:state.cart.filter((items)=>items.id !==id)}))
    }
});
const PDstrorePersist = {
    name:'product-store',
    partialize:(state)=>({cart:state.cart})
}

const usePDstrore = create(persist(PDstrore,PDstrorePersist));
export default usePDstrore