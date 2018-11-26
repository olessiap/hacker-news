import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Posts({post}) {
    return(
        <div className='post'>
            <div className="first-line">
                <PostNum postNumber={post.id} />
                <PostTitle title={post.title} />
                <PostSource source={post.source} />
            </div>
            <div className="second-line">
                
            </div>
        </div>
    )
};

function PostNum({postNumber}) {
    return(
        <div className="post-number">
        {postNumber}. <i class="fas fa-caret-up"/>
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


