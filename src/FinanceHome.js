import Menubar from './menubar'
import Sidebar from './layouts/accountant/sidebar';

function FinanceHome()
{
       return(
           <div>
               <h1 className= "he1">Welcome to Finance Department </h1>
              < Menubar/>
              <Sidebar/>
           </div>
       )

}

export default FinanceHome