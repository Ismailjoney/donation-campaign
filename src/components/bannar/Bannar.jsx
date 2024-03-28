import React from 'react';


const Bannar = ({ categories, setCategories }) => {
    

    const handdleSearch = (e) => {
        e.preventDefault()

        const searchValue = e.target.elements.search.value;
        const searchCategories = categories.filter(category => category.category_name === searchValue)
        
        setCategories(searchCategories)
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `${`url('https://i.ibb.co/2n55ks0/Clothing.png')`}` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            I Grow By Helping People In Need
                        </h1>

                        <form onSubmit={handdleSearch} className='mt-2 mb-2 flex  '>
                            <input
                                name='search'
                                type="text"
                                placeholder="Type here" className="input input-bordered input-info w-full max-w-xs mx-2" />

                            <button className='btn btn-primary'> Search</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>



    );
};

export default Bannar;