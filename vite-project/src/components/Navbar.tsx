import './Navbar.css'

interface Navigation{
  title1:string
  title2:string
  title3:string
}

const Navbar = ({title1,title2,title3}:Navigation) => {
  return (
    <nav>
      <ul className='menu'>
        <li><a href="">{title1}</a></li>
        <li><a href="">{title2}</a></li>
        <li><a href="">{title3}</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
