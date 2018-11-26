import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import moment from 'moment'; 

function Posts({post}) {
    return(
        <div className='post'>
            <div className="first-line">
                <PostNum postNumber={post.id} />
                <PostTitle title={post.title} />
                <PostSource source={post.source} />
            </div>
            <div className="second-line">
                <PostPoints points={post.points} />
                <UserName username={post.userName} />
                <Time time={post.time} />
                <FlagLink />
                <HideLink />
                <Comments commentNum={post.comments} />
            </div>
        </div>
    )
};

function PostNum({postNumber}) {
    return(
        <div className="post-number">
        {postNumber}. <i className="fas fa-caret-up"/>
        </div>
    )
}

PostNum.proptypes = {
    postNumber:PropTypes.number.isRequired
};

function PostTitle({title}) {
    return(
        <div className="post-title">
            {title}
        </div>
    )
};

PostTitle.prototypes = {
    title:PropTypes.string.isRequired
};

function PostSource({source}) {
    return(
        <div className="source">
        ({source})
        </div>
    )
};

PostSource.proptypes = {
    source:PropTypes.string.isRequired
};

function PostPoints({points}) {
    return(
        <div className="points">
        {points} points
        </div>
    )
};

PostPoints.proptypes={
    points:PropTypes.number.isRequired
};

function UserName({username}) {
    return(
        <div className="username">
            by {username}
        </div>
    )
}

UserName.proptypes={
    username:PropTypes.string.isRequired
};

function Time({time}) {
    let timeString = moment(time).fromNow();
    return(
        <div className="time">
            {timeString}
        </div>
    )
};

Time.proptypes={
    time:PropTypes.string.isRequired
};

const FlagLink = () => {
    return(
        <div className="flag">
        | flag |
        </div>
    )
}

const HideLink = () => (
    <div className="hide">hide |</div>
)

function Comments({commentNum}) {
    return(
        <div className="comments">
        {commentNum} comments
        </div>
    )
}

Comments.proptypes = {
    commentNum:PropTypes.number.isRequired
};

const testPosts = {
    id:1,
    title: "Why cats are better than dogs and other interseting details about humans",
    source:"www.sendhelp.com",
    points: 124,
    userName:'oleeesssia',
    time: "Mon Nov 26 2018 19:38:05 GMT-0300",
    comments: 43
}

ReactDOM.render(<Posts post={testPosts}/>, document.querySelector('#root'));


