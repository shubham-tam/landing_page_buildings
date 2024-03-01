import './index.scss';

import backgroundImage from '@/assets/image/landscape.jpg';
import Logo from '@/assets/svg/house.svg';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__routes">
                <img src={Logo} alt="Top companies" className="navbar__logo" />
                <div className="navbar__routes__center">
                    <li>home page</li>
                    <li>property listings</li>
                    <li>about us</li>
                </div>
                <div className="navbar__routes__buttons">
                    <button className="navbar__routes__buttons__secondary">Sign in</button>
                    <button className="navbar__routes__buttons__primary">Sign up</button>
                </div>
            </div>
            <img
                src={backgroundImage}
                alt="Gautam Krishnan Chicago Skyline"
                className="navbar__image"
            />
        </nav>
    );
};
