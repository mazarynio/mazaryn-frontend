

import { connect } from 'react-redux';
import { Post } from '../post/Posts';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';



const Notification = (props) => {
    let history = useHistory()

    const handleClick = () => {
        console.log('fff')
        history.push('/')
    }


    return (
        <>
            <div className='relative'>
                <div className='w-141 mx-auto bg-gradient-to-b from-faintgreen via-faintgreen pt-19 flex flex-row sticky top-0'>
                    <ArrowBackIcon onClick={handleClick}/>


                    <div className='flex'>
                        <h3 className='font-bold'>
                            Notification
                        </h3>
                        <div className='rounded-full h-5 w-5 flex items-center justify-center bg-green-400'>
                            2
                        </div>
                    </div>

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
        </>

    )
}



const mapStateToProps = (state) => ({
    posts : state.notification
})

export default connect(mapStateToProps, null)(Notification);