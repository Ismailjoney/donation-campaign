import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({ categorie }) => {
    const { id, title, picture, category_name, category_bg, text_color, card_bg } = categorie;
    return (
        <div>
            <Link to={`/categorieinfo/${id}`}>
                <div style={{ backgroundColor: `${card_bg}` }} className="card w-65 bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <button style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }} className=" ">{category_name}</button>
                        <h2 style={{ color: `${text_color}` }} className="">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Categorie;