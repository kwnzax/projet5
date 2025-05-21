import logo from '../assets/logo.png'


function Header() {
    return (
        <div>
            <img src={logo} alt='Kasa logo'/>
            <ul>
                <li><a href='#'>Accueil</a></li>
                <li><a href='#'>À propos</a></li>
            </ul>
        </div>
    )
}

export default Header