import './index.scss';
import HouseHeroImg from '@/assets/image/house_hero.avif';
import HandShakeImg from '@/assets/svg/handshake-svgrepo-com.svg';

export const Hero = () => {
    return (
        <div className="home_hero">
            <LeftHeroSection />
            <SearchBbox />
            <RightHeroSection />
        </div>
    );
};

export const LeftHeroSection = () => {
    return <div className="home_hero__left">HOUSE LISTINGS</div>;
};

export const RightHeroSection = () => {
    return (
        <div className="home_hero__right">
            <img src={HouseHeroImg} alt="House Hero" className="home_hero__right__img" />

            <div className="home_hero__right__message">
                <div className="home_hero__right__message__left">
                    <div className="home_hero__right__message__left__service_box">
                        <div className="home_hero__right__message__left__service_box__msg-pitch">
                            <img src={HandShakeImg} alt="Hand Shake" className="hand-shake" />
                            <p className="service_pitch">
                                Lorem Ipsum{' '}
                                <strong className="service_pitch__strong">Service</strong>
                            </p>
                        </div>
                        <p className="service_message">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <button>Learn more</button>
                </div>
                <div className="home_hero__right__message__right">
                    <span>House listings</span>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                    </p>
                </div>
            </div>
        </div>
    );
};

export const SearchBbox = () => {
    return (
        <div className="home_hero__searchbox">
            <p className="home_hero__searchbox__heading">Lorem ipsum dolor</p>
            <input
                type="text"
                placeholder="Search any location..."
                className="home_hero__searchbox__input"
            />
        </div>
    );
};
