import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import moment from 'moment'; 

function Posts({posts}) {
    return(
        <div className="posts">
            {posts.map(post => (
                <div className='post' key={post.id}>
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
            ))}
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

const testPosts = [
    {
        id:1,
        title: "Why cats are better than dogs and other interseting details about humans",
        source:"www.sendhelp.com",
        points: 124,
        userName:'oleeesssia',
        time: "Mon Nov 26 2018 19:38:05 GMT-0300",
        comments: 43
    },
    {
        id:2,
        title: "hi-liter of choise for next winner of pagentshow is YELLOW",
        source:"www.siono.com",
        points: 12,
        userName:'lokiloki',
        time: "Mon Nov 23 2018 19:38:05 GMT-0300",
        comments: 65
    },
    {
        id:3,
        title: "the reason DJ Paul went to class is finally revealed",
        source:"www.xanc.com",
        points: 1233,
        userName:'kiwiLoverXoXo',
        time: "Mon Sep 13 2018 19:38:05 GMT-0300",
        comments: 100
    },
    {
        id:4,
        title: "Are YOU prepared for the robot apocolypse? ",
        source:"www.abracadabra.com",
        points: 0,
        userName:'oleeesssia',
        time: "Mon Oct 06 2016 19:38:05 GMT-0300",
        comments: 543
    },
    {
        id:2,
        title: "where to find cute boys and ugly sweaters",
        source:"www.whatate.com",
        points: 102,
        userName:'oleeesssia',
        time: "Mon Nov 11 2018 19:38:05 GMT-0300",
        comments: 65
    }
]

ReactDOM.render(<Posts posts={testPosts}/>, document.querySelector('#root'));


