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
           <LinkButton   link_path='dashboard/#' id='report'> 
             <BiPieChartAlt/> <span className={`${navCollapse ? `hidden` : `inline` }`}>Components</span>   
           </LinkButton>
       
        </div>
        <div className=''>
           <LinkButton   link_path='dashboard/#' > 
                <FiSettings/> <span className={`${navCollapse ? `hidden` : `inline` }`}> Settings</span> 
           </LinkButton>
           <LinkButton t link_path= '/' > 
                <FaGlobeAfrica/> <span className={`${navCollapse ? `hidden` : `inline` }`}> View Page</span> 
           </LinkButton>
        </div>
    </>
  )
}

export default Nav