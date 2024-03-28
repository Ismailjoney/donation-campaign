import React from 'react';
import Categorie from '../categorie/Categorie';

const Categories = ({ categories, searchvalue }) => {


    return (
        <div className='grid md:grid-cols-4 gap-3'>
            {
                categories.map(categorie =>
                    <Categorie
                        key={categorie.id}
                        categorie={categorie}>
                    </Categorie>)
            }

            

        </div>
    );
};

export default Categories;