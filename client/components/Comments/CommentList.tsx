import React from 'react';
import CommentItem from './CommentItem';

interface Comment {
    avatar: string;
    name: string;
    comment: string;
}

interface CommentsListProps {
    comments: Comment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
    return (
        <div className="comments-list">
            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </div>
    );
};

export default CommentsList;
