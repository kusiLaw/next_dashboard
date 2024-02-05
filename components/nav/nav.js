import LinkButton from '../linkButton/linkButton'
import { BiGridAlt, BiUser, BiPieChartAlt} from 'react-icons/bi';
import { FiSettings} from 'react-icons/fi';
import { FaGlobeAfrica} from 'react-icons/fa';

const Nav = ({navCollapse = false}) => {
  return (
    <>
      <div  >
           <LinkButton   link_path ='/dashboard'   id='home' > 
             <BiGridAlt/> <span className={`${navCollapse ? `hidden` : `inline` } `}> Home</span>
           </LinkButton>
           <LinkButton   link_path = '/dashboard/users' id='users' > 
             <BiUser/> <span className={`${navCollapse ? `hidden` : `inline` }`}> Users</span>   
           </LinkButton>
           <LinkButton   link_path='/dashboard/widgets' id='report'> 
             <BiPieChartAlt/> <span className={`${navCollapse ? `hidden` : `inline` }`}>Widgets</span>   
           </LinkButton>
           <LinkButton   className={"hidden md:block"} link_path='/dashboard/settings'  id='settings'> 
                <FiSettings/> <span className={`${navCollapse ? `hidden` : `inline` }`}> Settings</span> 
           </LinkButton>
       
        </div>
        <div className=''>
       
           <LinkButton t link_path= '/' > 
                <FaGlobeAfrica/> <span className={`${navCollapse ? `hidden` : `inline` }`}> View Page</span> 
           </LinkButton>
        </div>
    </>
  )
}

export default Nav