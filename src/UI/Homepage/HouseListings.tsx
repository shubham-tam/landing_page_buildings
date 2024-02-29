export const BUILDING_LISTINGS = [
    {
        name: 'Skyrise Apartments',
        imageUrl: 'https://source.unsplash.com/800x600/?skyrise-apartments',
        projects: '135',
    },
    {
        name: 'Urban Towers',
        imageUrl: 'https://source.unsplash.com/800x600/?urban-towers',
        projects: '15',
    },
    {
        name: 'Old Building',
        imageUrl: 'https://source.unsplash.com/800x600/?old-building',
        projects: '15',
    },
    {
        name: 'Cityscape Residences',
        imageUrl: 'https://source.unsplash.com/800x600/?cityscape-residences',
        projects: '55',
    },
    {
        name: 'Harbor View Suites',
        imageUrl: 'https://source.unsplash.com/800x600/?harbor-view-suites',
        projects: '87',
    },
    {
        name: 'Metropolitan Lofts',
        imageUrl: 'https://source.unsplash.com/800x600/?metropolitan-lofts',
        projects: '126',
    },
    {
        name: '6',
        imageUrl: 'https://source.unsplash.com/800x600/?urban-towers',
        projects: '6',
    },
    {
        name: 'Cityscape Residences',
        imageUrl: 'https://source.unsplash.com/800x600/?cityscape-residences',
        projects: '55',
    },
    {
        name: 'Harbor View Suites',
        imageUrl: 'https://source.unsplash.com/800x600/?harbor-view-suites',
        projects: '87',
    },
    {
        name: 'Metropolitan Lofts',
        imageUrl: 'https://source.unsplash.com/800x600/?lofts',
        projects: '126',
    },
];

import { useState } from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';

import './index.scss';

export const HouseListings = () => {
    const houseListingArray = BUILDING_LISTINGS.slice(0, 5);

    const [listings, setListings] = useState(BUILDING_LISTINGS.slice(0, 5));

    const [isLoadNext, setIsLoadNext] = useState(false);

    const handleNext = () => {
        const currentIndex = houseListingArray?.length || 0;
        const nextSlice = BUILDING_LISTINGS.slice(currentIndex, currentIndex + 5);
        setIsLoadNext(true);
        setListings(nextSlice);
    };

    const handlePrevious = () => {
        const currentIndex = houseListingArray?.length || 0;
        const nextSlice = BUILDING_LISTINGS.slice(currentIndex - 5, currentIndex);
        setIsLoadNext(false);

        setListings(nextSlice);
    };

    return (
        <>
            <div className="home_top-locations">
                <HouseListingsHeader />
                <div className="home_top-locations__list">
                    {listings.map((building, index) => {
                        return (
                            <div
                                key={index}
                                className={isLoadNext ? 'fade-right_to_left' : 'fade-left_to_right'}
                            >
                                <HouseListingDetailInfo building={building} />
                                <img
                                    src={building?.imageUrl}
                                    alt=""
                                    className={`home_top-locations__list__${index}`}
                                />
                                <HouseListingDetaiButton building={building} />
                            </div>
                        );
                    })}
                </div>

                <div>
                    <button onClick={handlePrevious}>Prev</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    );
};

export const HouseListingsHeader = () => {
    return (
        <div className="home_top-locations__header">
            <header className="home_top-locations__header__heading">
                Top listings in Kathmandu
            </header>

            <p className="home_top-locations__header__message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
            </p>
        </div>
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
        <div className="home_top-locations__list__listing_detail">
            <p className="home_top-locations__list__listing_detail__projects">
                {building?.projects} projects
            </p>
            <p className="home_top-locations__list__listing_detail__name">{building?.name}</p>
        </div>
    );
};

// pass id as a prop and navigate
export const HouseListingDetaiButton = (prop: HouseListingDetail) => {
    const { building } = prop;

    return (
        <>
            <p className="home_top-locations__list__view-all-projects"> View All Projects</p>
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
