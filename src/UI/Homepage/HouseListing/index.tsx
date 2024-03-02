import { useRef } from 'react';
import { IconArrowNarrowRight, IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import './index.scss';

import { BUILDING_LISTINGS } from '@/constants';

export const HouseListings = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy(1440, 0);
        }
    };

    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy(-1440, 0);
        }
    };

    return (
        <>
            <div className="home_top-locations">
                <HouseListingsHeader />
                <div className="home_top-locations__list" ref={sliderRef}>
                    {BUILDING_LISTINGS?.map((building, index) => {
                        return (
                            <div key={index} className="home_top-locations__list__image_carousel">
                                <HouseListingDetailInfo building={building} />
                                <img
                                    src={building?.imageUrl}
                                    alt={building?.name}
                                    className={`image_${index}`}
                                />
                                <HouseListingDetaiButton building={building} />
                            </div>
                        );
                    })}
                </div>

                <div className="home_top-locations__list-buttons">
                    <button onClick={handlePrevious}>
                        <IconChevronLeft />
                    </button>
                    <button onClick={handleNext}>
                        <IconChevronRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export const HouseListingsHeader = () => {
    return (
        <>
            <div className="home_top-locations__header">
                <header className="home_top-locations__header__heading">
                    Top listings in Kathmandu
                </header>

                <p className="home_top-locations__header__message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <a className="home_top-locations__header__view-all-locations">
                View All Locations <IconChevronRight color={'white'} size={16} />
            </a>
        </>
    );
};

interface HouseListingDetail {
    building: {
        name: string;
        projects: string;
    };
}

export const HouseListingDetailInfo = (prop: HouseListingDetail) => {
    const { building } = prop;

    return (
        <>
            <div className="home_top-locations__list__listing_detail">
                <p className="home_top-locations__list__listing_detail__projects">
                    {building?.projects} projects
                </p>
                <p className="home_top-locations__list__listing_detail__name">{building?.name}</p>
            </div>
        </>
    );
};

// pass id as a prop and navigate
export const HouseListingDetaiButton = (prop: HouseListingDetail) => {
    const { building } = prop;

    return (
        <>
            <a
                className="home_top-locations__list__view-all-projects"
                onClick={() => alert('Route to all project list')}
            >
                View All Projects
            </a>
            <button
                className="home_top-locations__list__button"
                onClick={() => {
                    alert(`${building?.name} clicked`);
                }}
            >
                <IconArrowNarrowRight size={28} strokeWidth={2} color={'white'} />;
            </button>
        </>
    );
};
