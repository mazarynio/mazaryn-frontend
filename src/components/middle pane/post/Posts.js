import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//import './Post.css'
import { connect } from 'react-redux';

 

  
const Posts = (props) => {

    // const navigate = Navigate({ to: "/" })
    // let posts = [
    //     {
    //         id: 1,
    //         userName: 'Teddy',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         id: 2,
    //         userName: 'Arvand',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         id: 3,
    //         userName: 'Shifa',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         id: 4,
    //         userName: 'Peter',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    // ];
    return(
        <div className='relative'>
            <div className='w-141 mx-auto bg-gradient-to-b from-faintgreen via-faintgreen pt-19 flex flex-row sticky top-0'>
                <ArrowBackIcon />
                <h3 className='font-bold flex-grow'>Group name</h3>
            </div>
            <div className='pt-10'>
                {
                    props.posts.data.map( post => {
                        return(
                            <Post key={post.id} userName={post.userName} text={post.text}/>
                        )
                    })
                }
            </div>
        </div>
    );
}


export function Post(props){
    return(
        <div className='w-141 mx-auto mb-10 p-3 bg-white border-1 border-boxborder rounded-2xl'>
            {/* Dynamically set the profile image*/}
            <section className='text-black'>
                <figure className='flex flex-row m-0'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage' className='w-10 h-10 rounded-full'/>
                    <figcaption className='my-auto m-6 font-bold'>
                        {props.userName}
                    </figcaption>    
                </figure>
            </section>
            <section className='text-left text-black w-110 mx-auto'>
                <p>{props.text}</p>
            </section>
            <section className='w-110 mx-auto mt-7.5 flex flex-row justify-between text-black'>
                <div className='text-left'>
                    <FavoriteBorderIcon className='mr-5.5'/>
                    <SubjectIcon />
                </div>
                <div>
                    <MoreVertIcon />
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts : state.posts
})

export default connect(mapStateToProps, null)(Posts);