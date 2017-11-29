import React from 'react';
import {connect} from 'react-redux';

import {addComment} from '../actions';

export class CommentForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(
            addComment(this.authorInput.value, this.commentInput.value)
        );
        e.target.reset();
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    ref={input => (this.authorInput = input)}
                />
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    ref={input => (this.commentInput = input)}
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default connect()(CommentForm);
