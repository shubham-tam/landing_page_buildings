import './index.scss';
import HouseHeroImg from '@/assets/image/house_hero.avif';

export const Hero = () => {
    return (
        <div className="home_hero">
            <LeftHeroSection />
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
                <div>left</div>
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
