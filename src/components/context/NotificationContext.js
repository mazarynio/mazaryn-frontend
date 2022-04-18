
import React, { createContext, useState } from 'react';


export const NotificationContext = createContext();

export function FeedProvider({children}){

    const [notify, setNotify] = useState([
        {
            id: 1,
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }, 
        {
            id: 2,
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }, 
        {
            id: 3,
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }, 
        {
            id: 4,
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }
    ]);
    return(
        <NotificationContext.Provider value={[notify, setNotify]}>
            {children}
        </NotificationContext.Provider>
    );


}