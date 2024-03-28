import React from 'react';

const MyDonation = ({ donation }) => {
    const { title, picture, category_name, description, price } = donation;
    return (
        <div>
            <div>
                <img className='w-full' src={picture} alt="" />
                <div>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <div className='mt-2'>
                        <p> <span className='font-bold'>Donation Type: </span>  {category_name}</p>
                        <p> <span className='font-bold'>Donation Amount:</span> {price}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDonation;