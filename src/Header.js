import './Header.css';
import {Login} from './Login';

function Header(){
    return(
        <div className="header">
            <div>The plant shop</div>
            <Login></Login>
            <div className="toggleMenu">≡</div>
        </div>
    )
}

export default Header;