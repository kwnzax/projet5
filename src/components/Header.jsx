import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


function Header() {
    return (
        <nav>
            <img src={logo} alt='Kasa logo'/>
            <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            </ul>
        </nav>
    )
}

export default Header