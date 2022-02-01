import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
       <NavLink to='/editor/?page=home'>Edit</NavLink>
        </>
    );
};

export default Home;