import '@/assets/scss/style.scss';

import { Hero, HouseListings, Navbar } from './UI';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HouseListings />
        </div>
    );
};

export default App;
