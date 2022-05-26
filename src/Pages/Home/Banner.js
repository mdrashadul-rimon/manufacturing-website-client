import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/Hd2hfbF/elevator-cabin-500x500.jpg" className="md:max-w-md rounded-lg" alt=""/>
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold">Elevator Manufacturing Inc.</h1>
                    <p className="py-6 md:text-lg">Top elevator manufacturing in Asia. Presents all the elevator parts and tools with ready programmable software with proper guideline manuals.<br/></p>
                    <p className='text-accent font-semibold py-3'>We serve the best for customer needs. Explore us for your <span className='text-secondary md:text-2xl text-xl font-bold'>Business Today</span>.</p>
                    <PrimaryButton>Explore EMI</PrimaryButton>
                </div>
            </div>
     
    );
};

export default Banner;