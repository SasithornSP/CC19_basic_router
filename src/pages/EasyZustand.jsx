import useAomjungStore from '../Store/productStore'

function EasyZustand() {
//การใช้งาน Zustand ในการเก็บข้อมูล
    // const FirstName =useAomjungStore((state)=>state.firstName)
    // const address =useAomjungStore((state)=>state.address)
    // const Profile =useAomjungStore((state)=>state.Profile)
    // const Products =useAomjungStore((state)=>state.Products)
    const number=useAomjungStore((state)=>state.number)
    const actionIncrease=useAomjungStore((state)=>state.actionIncrease)
    const acttionDecrease=useAomjungStore((state)=>state.acttionDecrease)
    const acttionMulti=useAomjungStore((state)=>state.acttionMulti)
    const acttionDivit=useAomjungStore((state)=>state.acttionDivit)

    const hdlClick=()=>{
      acttionDecrease()
    }
  return (
    <div>EasyZustand
      {/* <p>{Profile[0]}</p>
      <p>{address.zipcode}</p>
      <p>{Products[1].title} price: {Products[1].price}</p> */}
      <p className='text-8xl'>{number}</p>
      <button 
      onClick={actionIncrease} 
      className='bg-green-500'>Increase</button>
      <br />
      <button 
      onClick={hdlClick} 
      className='bg-red-300'>Decrease</button>
      <br />
      <button
      onClick={acttionMulti} 
      className='bg-blue-400'>Multi</button>
      <br />
      <button
      onClick={acttionDivit} 
      className='bg-pink-300'>Divit</button>

    </div>
  )
}

export default EasyZustand