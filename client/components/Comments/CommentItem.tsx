import React from 'react';

export interface CommentItemProps {
    comment: {
        avatar: string;
        name: string;
        comment: string;
    };
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    return (
        <div className="comment">
            <img src={comment.avatar} alt={comment.name} />
            <div>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
            </div>
        </div>
    );
};

export default CommentItem;
