export default function CommentsList({ comments }) {
    return (
        <div className="comments_list">
            {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment below!</p>
            ) : (
                comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p className="comment_author">User: {comment.author}</p>
                        <p className="comment_text">Comment: {comment.text}</p>
                    </div>
                ))
            )}
        </div>
    );
}
