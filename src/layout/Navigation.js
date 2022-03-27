import {Link} from 'react-router-dom';

import Classes from './Navigation.module.css';

function Navigation (){

    return(
        <nav className={Classes.nav}>
            <ul className={Classes.ul}>
                <li className={Classes.li}>
                   <Link to='/'>About</Link>
                </li>
                <li className={Classes.li}>
                   <Link to='/TransactionTracker'>Transaction Tracker</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;