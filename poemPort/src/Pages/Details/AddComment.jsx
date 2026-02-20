import { useState } from "react";
import {postComment} from "../../api/comment";

export default function AddComment({poemId, onAdd}) {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = await postComment(poemId, author, text);
        onAdd(newComment);
        setAuthor("");
        setText("");
    };

    return (
        <div className="add_comment">
            <h3>Leave a comment below</h3>
            <input type="text" name="author" value={author} placeholder="User" onChange={e => setAuthor(e.target.value)} />
            <textarea name="comment" value={text} placeholder="Comment" onChange={e => setText(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}