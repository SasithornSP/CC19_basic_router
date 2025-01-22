import{create} from 'zustand'

    const AomjungStore=(set)=>({
        // สร้าง state ชื่อ firstName และกำหนดค่าเริ่มต้นเป็นชื่อ Aomjung
        // firstName:'Sasithorn',
        // lastName:'sp',
        // address:{street:'1234',zipcode:'567'},
        // Profile:['Aom','ssp'],
        // Products:[
        //     {id:1,title:'ASUS',price:50000},
        //     {id:2,title:'MSI',price:40000}
        // ],
        product:[

        ],
        number:5,
        actionIncrease:()=>{
            //*setNumber2((state)=>({num:state.num+1}))
        set((state)=>({number:state.number+1}))
        },
        acttionDecrease:()=>{
            set((state)=>({number:state.number-1}))
        },
        acttionMulti:()=>{
            set((state)=>({number:state.number*2}))
        },
        acttionDivit:()=>{
            set((state)=>({number:state.number/2}))
        },
       
    });

    const useAomjungStore=create(AomjungStore)

export default useAomjungStore