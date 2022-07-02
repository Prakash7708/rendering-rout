
//import 'App.css';
//import "../public/assets.css"
//import "../assets/sb-admin-2.min.css";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
//import Dashboard from "./Dashboard";
import Users from "./Users";
//import Viewuser from "./Viewuser";
import {Link}from "react-router-dom";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Createuser from "./Createuser";
import New from "./NewUser";
import Edit from "./Edit";


function App(){

  return(
    
<BrowserRouter>

<div id="wrapper">
  <Sidebar/>
<div id="content-wrapper" className="d-flex flex-column">


            <div id="content">
            <Topbar/>
            <div className="container-fluid">
              
                     <Routes>
               
                    {/* <Route path="/" element={<Dashboard/>} />  */}
                    <Route path="/Users"  element={<Users/>}/>
                    <Route path="Users/view/:id" element={<Edit/>}/> 
                    <Route path="Users/create" element={<New/>}/>

                    </Routes>
                    
              </div>
            </div>
   </div>

    </div> 
    
    </BrowserRouter>

  )
}

export default App;