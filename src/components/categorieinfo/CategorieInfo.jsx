import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveCart } from '../utilites/utilites';

const CategorieInfo = () => {
    const categorieinfo = useLoaderData([])
    const { id } = useParams()
    const idnt = parseInt(id)

    const specificeCategorieInfo = categorieinfo.find(info => info.id === idnt)

    const handleDonate = () => {
        const cart = saveCart(idnt)
    }

    return (
        <div className="mt-8 w-3/4 mx-auto">
            <div className="w-full rounded-lg relative">
                <div className=" ">
                    <img className="w-full mt-16" src={specificeCategorieInfo.picture} alt="" />
                </div>
                <div className="w-full text-white overlay-content  bg-black p-4 opacity-70 absolute  bottom-0">
                    <button onClick={handleDonate}
                        style={{ backgroundColor: specificeCategorieInfo.text_color }}
                        className="btn border-none text-white overlay-content-btn">
                        Donate {specificeCategorieInfo.price}
                    </button>
                </div>

            </div>
            <h3 className="text-3xl  mb-3">{specificeCategorieInfo.title}</h3>
            <p className="mb-12">{specificeCategorieInfo.description}</p>
            <ToastContainer />
        </div>
    );
};

export default CategorieInfo;