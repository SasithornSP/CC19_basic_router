import {Link} from 'react-router'

function MainNav() {
  return (
    <div>
    <nav className="flex justify-between bg-gray-800 text-white px-4 items-center">
      <div className='flex gap-4 '>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      {/* <Link to='/Recap'>Recap</Link>
      <Link to='/RecapUseState'>RecapUseState</Link>
      <Link to='/EasyZustand'>EasyZustand</Link> */}
      <Link to='/Products'>Products</Link>
      <Link to='/Mycart'>Cart</Link>
     
      </div>

      <div className='flex gap-4'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      </div>
    </nav>

    </div>
  )
}

export default MainNav