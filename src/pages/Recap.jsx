

function Recap() {
const obj={
    firstName:'Aomjung',
    lastName:'Sp'
}
obj.address='BKK'
// console.log(obj.firstName)

const obj2={
    street:'1234',
    zip:'5678'
}
const mergeObj = {...obj,...obj2}
// console.log(mergeObj);

const arr =['aom','jungsp']
arr[2]='BKK'
// console.log(arr);
const arr2=['1598','3574']
const mergeArr=[...arr,...arr2]
// console.log(mergeArr);

const products=[
    {id:1,title:'ASUS',price:40000},
    {id:2,title:'MSI',price:59000}
]
console.log(products[1].title);

const newProducts={id:3,title:'Lenovo',price:20000}
const mergeProducts=[...products,{...newProducts}]
console.log('mergeProducts=', mergeProducts)

  return (
    <div>Easy Zustand</div>
  )
}

export default Recap