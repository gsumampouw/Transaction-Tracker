import {Link} from 'react-router-dom';

import Classes from './Navigation.module.css';

function Navigation (){

    return(
        <nav className={Classes.nav}>
            <ul className={Classes.ul}>
                <li className={Classes.li}>
                   <a href='https://gsumampouw.github.io/'>About</a>
                </li>
                <li className={Classes.li}>
                <a href='https://gsumampouw.github.io/Transaction-Tracker/'>TransactionTracker</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;