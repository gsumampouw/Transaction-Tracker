

function Navigation (){

    return(
        <nav className="navbar fixed-top navbar-expand-md bg-dark navbar-dark py-2">
        <div className="container-fluid">
          <div className="h1 px-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
           <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
         </svg></div>
           <a href="https://github.com/gsumampouw" className="navbar-brand"> Gaby Sumampouw</a>
           <button 
           className="navbar-toggler" 
           type="button" 
           data-bs-toggle="collapse" 
           data-bs-target="#navmenu">
       <span className="navbar-toggler-icon"></span>
      
       </button>
           <div className="collapse navbar-collapse" id="navmenu">
               <ul className="navbar-nav ms-auto">
                   <li><a href="https://gsumampouw.github.io/" className="nav-link">About</a></li>
                   <li><a href="https://gsumampouw.github.io/Transaction-Tracker/" className="nav-link">Transaction Tracker</a></li>
               </ul>
           </div>
        </div>  
    </nav>
    );
}

export default Navigation;