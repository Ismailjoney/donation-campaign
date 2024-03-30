import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { checkLcCart } from '../utilites/utilites';
import MyDonation from '../donation/MyDonation';

const YourDonation = () => {
    const [myDonation, setMyDonation] = useState([])
    const donations = useLoaderData([])


    useEffect(() => {
        const getIdLc = checkLcCart()
        if (donations.length) {
            const myDonations = donations.filter(donation => getIdLc.includes(donation.id));
            setMyDonation(myDonations)
        }
    }, [donations])



    return (
        <div className='w-3/4 mx-auto'>
            <div className='mt-4 mb-4 text-justify'>
                <p className='mb-2'>"In contemporary society, the significance of donations cannot be overstated, particularly in the realms of health, food security, and education. These pillars form the foundation of a thriving, equitable society, and donations serve as a catalyst for positive change within each domain. Within the sphere of health, donations fuel medical breakthroughs, support access to essential healthcare services, and facilitate the development of innovative treatments and therapies. From funding research initiatives aimed at combating prevalent diseases to providing vital medical supplies to underserved communities, donations play a pivotal role in advancing global health outcomes and improving quality of life.</p>

                <p className='mb-2'>
                    Similarly, the impact of donations on food security is profound. In a world where millions still suffer from hunger and malnutrition, donations provide a lifeline to those in need. Contributions to food banks, agricultural development projects, and nutrition education programs enable communities to access nutritious food, combat food insecurity, and break the cycle of poverty and hunger. Moreover, donations directed towards sustainable farming practices and agricultural innovation contribute to long-term food security and resilience in the face of environmental challenges and economic instability.
                </p>



            </div>
            <h2 className='text-3xl font-bold mt-5 mb-5'>Your Selected Donations : {myDonation.length}</h2>
            <div className='grid md:grid-cols-2 gap-10 mt-4 mb-6'>
                {
                    myDonation.map(donation => <MyDonation
                        key={donation.id}
                        donation={donation}
                    ></MyDonation>)
                }
            </div>
            <div className='mt-4 mb-4 text-justify'>
                <p className='mb-2 mt-10 border  border-slate-700 p-6'>
                    Education stands as another cornerstone of societal progress, and donations serve as a vital resource in ensuring access to quality education for all. By supporting scholarship programs, educational infrastructure development, and teacher training initiatives, donations empower individuals to unlock their full potential and pursue pathways to success. Additionally, investments in educational technology and digital literacy programs bridge the digital divide, equipping learners with the skills and knowledge needed to thrive in the digital age.

                    Collectively, donations in the realms of health, food security, and education have the power to transform lives and communities. They embody the spirit of compassion, generosity, and solidarity, driving positive change and creating pathways to a brighter future for individuals and societies worldwide. As we recognize the immense impact of donations, let us continue to champion philanthropy and collaborate towards building a more inclusive, resilient, and prosperous world for all."
                </p>
            </div>

        </div>
    );
};

export default YourDonation;