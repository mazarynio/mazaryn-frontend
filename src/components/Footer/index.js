

import EditIcon from '@material-ui/icons/Edit';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import GroupIcon from '@material-ui/icons/Group';
import './footer.css';

function FooterMenu(){
    return(
        <div className='footerMenu'>
            <ul>
                <li>
                    <EditIcon />
                </li>
                <li>
                    <GroupIcon />
                </li>
                <li>
                    <ChatBubbleIcon />
                </li>
            </ul>
        </div>
    );
}


export default FooterMenu