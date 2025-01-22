import useAomjungStore from '../Store/productStore'

function EasyZustand() {

    const FirstName =useAomjungStore((state)=>state.firstName)
    const address =useAomjungStore((state)=>state.address)

    console.log(FirstName);
    console.log(address);
  return (
    <div>EasyZustand</div>
  )
}

export default EasyZustand