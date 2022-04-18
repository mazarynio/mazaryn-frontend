import React from 'react';
import './Profile.css';
import FooterMenu from '../../Footer'
import { LocationOnOutlined } from '@material-ui/icons'
import ProfileButton from '../../buttons/profileButton'


function Profile(){
    return(
        <div className='profile mt-20'>
            <figure>
                <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage'/>
                <div className='grid grid-cols-6 gap-4'>
                    <div class="col-start-1 col-end-7">
                        <figcaption>
                            Teddy Mbugua
                        </figcaption>
                        <ProfileButton text={"Edit Profile"} className={"bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow "}/>             

                    </div>
                </div>

                <div className='flex pt-5'>
                    <LocationOnOutlined />  
                    Kenya
                    DOB: 15/01/2020

                </div>
                <div className='flex pt-10'>
                    <ProfileButton text={"Following"} className={'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'} />
                    <ProfileButton text={"Followers"} className={'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'} />
                    <ProfileButton text={"Following"} className={'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'} />
                    <ProfileButton text={"Posts"} className={'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'} />
                    <ProfileButton text={"Interests"} className={'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'} />
                    
                </div>
            </figure>


            <FooterMenu />
        </div>
    );
}



export default Profile;