import { useState } from "react";

const Header = () => {

    const[btnname,setbtnname] =useState("login");
     return(
         <div className="flex justify-between bg-slate-100 shadow-xl">
             <div className="logo-container">
                 <img className="w-28 m-2 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PkdDtIxtMSGO-8e7Q3KcZdCE0NgrrQAsTTwx7906hulmB4hgHUwQmlRutw&s" />
             </div>
             <div className="nav-items">
                 <ul className="flex space p-2 m-2">
                     <li className="p-2">Home</li>
                     <li className="p-2">About Us</li>
                     <li className="p-2">Contact</li>
                     <li className="p-2">
                       <img className="w-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcrtIXWCfeHGika8GIE_8hZ5WaSnRn4WT0w&s"></img>
                     </li>
                     <li className="p-2">
                       <button className="sign" onClick={() =>{
                         btnname=="login"?setbtnname("logout") : setbtnname("login") ;
                       }
                       }>{btnname}</button>
                     </li>
                 </ul>
             </div>
         </div>
     );
};

export default Header;