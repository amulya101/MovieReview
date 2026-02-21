import './CommentsSection.scss';
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

export default function CommentsSection({ poemId, comments, setComments }) {
    return (
        <div className="comments_section">
            <h3>Comments</h3>
            <CommentsList comments={comments} />
            <AddComment 
                poemId={poemId} 
                onAdd={c => setComments(prev => [...prev, c])} 
            />
        </div>
    );
}