import logo from '../assets/chefclaude.png'

const Header = () => {

  return (
   <nav>
    <img className='logo' src={logo} alt="chef-logo"  />
    <h1>Chef Claude</h1>
   </nav>
  )
}

export default Header
