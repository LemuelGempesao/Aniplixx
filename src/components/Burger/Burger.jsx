
import { RxHamburgerMenu as Menu} from "react-icons/rx";
import { RiCloseLargeLine as Close} from "react-icons/ri";
import './Burger.css'


const Burger = ({click, setClick}) => {


  return (
    <div onClick={()=>setClick(!click)} 
        className='burger-container'>
            {click ? <Close className='burger-icon'/>:<Menu className='burger-icon'/>}
    </div>
  )
}

export default Burger