import React from 'react';
import {connect} from 'react-redux';
import CommentForm from './comment-form';

export function Comments(props) {
    const comments = props.comments.map((comment, index) => (
        <li key={index}>
            <div className="author">{comment.author} says:</div>
            <div className="comment">{comment.comment}</div>
        </li>
    ));
    return (
        <section>
            <h2>Comments</h2>
            {comments.length ? <ul>{comments}</ul> : <div>No comments</div>}
            <h3>Add a comment</h3>
            <CommentForm />
        </section>
    );
}

export const mapStateToProps = (state, props) => ({
    comments: state.comments
});

export default connect(mapStateToProps)(Comments);
