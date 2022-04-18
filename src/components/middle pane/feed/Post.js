// NEED to make this file just render a single post taking in props from parent.

import React from "react";
import { Input } from "antd";
import "../feed/Feed.css";
import { profileImage, dummyPost, like, dislike, comment, share, dollar } from "../../../assets";
import {
    Pictures,
    FluentEmoji,
    HashTag,
    ChevronDownIcon,
    World,
} from "../../Icons/SvgIcons";
import { abbreviateNumber } from "js-abbreviation-number";
import DetectHashtags from "react-hashtag";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);

const { TextArea } = Input;
const onChange = e => {
    console.log('Change:', e.target.value);
};

//dummy data
const posts = [
    {
        id: 12124,
        user: {
            name: "Incroyable",
            image: profileImage,
        },
        date: 1648748158145,
        content: {
            text: "This 3 shows are special😄\nPart (1/7)\n#TheOwlHouse #DemonSlayer #AvatarTheLastAirbender",
            image: dummyPost,
        },
        meta: {
            likes: 10,
            dislikes: 2,
            comments: 2,
            views: 21000,
        }
    },
    {
        id: 25325,
        user: {
            name: "Lyra Silvertongue",
            image: profileImage,
        },
        date: 1648744458145,
        content: {
            text: "When I read the news about Russian gas these days...quick question: are Europeans aware that it is not solely  their decision if and how they buy that gas?\nThat's this typical arrogance that the whole world has to act like they want and that they can decide everything.",
            image: null,
        },
        meta: {
            likes: 123,
            dislikes: 3,
            comments: 12,
            views: 30156,
        }
    },
]

const timeAgo = new TimeAgo('en-US')

const formatNumber = (number) => (
    abbreviateNumber(number, 2, {padding: false})
);
const postHashTagClick = (s) => {
    console.log(+s, "hashtag clicked");
}

const renderHashtag = hashtagString => (
    <span 
        onClick={e => postHashTagClick(hashtagString)}
        style={{color: '#2222ff', cursor: 'pointer'}}
    >
        {hashtagString}
    </span>
)
const controlIcons = { like, dislike, share, comment };
const Post = (props) => {

    return (
        <>
            {
                posts.map(post => (
                    <div key={post.id} className="post-container">
                        <div className="p-head-row">
                            <div className="flex-row justify-center items-center flex">
                                <img src={post.user.image} alt='profile' className="p-profile-picture" />
                                <div className="p-username-col">
                                    <div className="p-username">
                                        {post.user.name}
                                    </div>
                                    <div className="p-date">
                                        {timeAgo.format(post.date, 'twitter-now')}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-row justify-center items-center flex">
                                <div className="p-views">
                                    {formatNumber(post.meta.views)} views
                                </div>
                            </div>
                        </div>
                        <div className="p-content">
                            <div className="p-text">
                                <DetectHashtags renderHashtag={renderHashtag}>
                                    {post.content.text}
                                </DetectHashtags>
                            </div>
                            <div className="p-image">
                                {
                                    post.content.image &&
                                    <img src={post.content.image} alt="post" />
                                }
                            </div>
                            <div className="p-controls">
                                <div className="p-controls-left">
                                    {
                                        ['like', 'dislike', 'comment'].map(icon => (
                                            <div className={"flex flex-row items-center p-control"+` p-control-${icon}`}>
                                                <img src={controlIcons[icon]} alt={icon} className="p-control-icon" />
                                                <div className="p-control-value">{formatNumber(post.meta[icon+'s'])}</div>
                                            </div>
                                        ))
                                    }
                                    <div className="flex flex-row items-center p-control">
                                        <img src={share} alt="share" className="p-control-icon" />
                                    </div>
                                </div>
                                <div className="p-controls-right">
                                    <div className={"flex flex-row items-center p-control p-control-dollar"}>
                                        <img src={dollar} alt="dollar" className="p-control-icon" />
                                        <div className="p-control-value p-control-dollar">{'Tip'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-view-comments">
                                View {post.meta.comments} comments
                            </div>
                            <div className="p-comment-box-row">
                                <img className="p-cb-pfp" src={profileImage} alt="your profile pic" />
                                <input type={'text'} className="p-cb-input" placeholder="Write a comment" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Post;
