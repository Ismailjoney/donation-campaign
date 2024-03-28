import React, { useEffect, useState } from 'react';
import Bannar from '../bannar/Bannar';
import Categories from '../categories/Categories';
import Footer from '../footer/Footer';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div >
            <Bannar
                categories={categories}
                setCategories={setCategories}
            ></Bannar>
            <div className='w-3/4 mx-auto mt-10 mb-10'>
                <Categories
                    key={categories.id}
                    categories={categories}
                    setCategories={setCategories}
                ></Categories>
            </div>
           
        </div>
    );
};

export default Home;