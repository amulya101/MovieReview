import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByPoemId } from "../../api/comment";
import CommentsSection from "./CommentsSection";
import "./Details.scss";

export default function Details() {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/poems/${id}`)
      .then((response) => response.json())
      .then((data) => setPoem(data))
      .catch((error) => console.error("Error fetching poem details:", error));
    
    const loadComments = async () => {
      const fetchedComments = await fetchCommentsByPoemId(id);
      setComments(fetchedComments);
    };
    loadComments();
  }, [id]);


  return (
    <div className="detailsCtn">
      {!poem ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="detailsCtn__title">
            <h2>Poem {poem.id}</h2>
            <p>{poem.author}</p>
          </div>
          <div className="detailsCtn__image"></div>
          <div className="detailsCtn__desc">
            <p>{poem.content}</p>
          </div>

          {
            comments ? (
              <CommentsSection poemId={poem.id} comments={comments} setComments={setComments} />
            ) : (
              <p>No comments available</p>
            )
          }
        </>
      )}
    </div>
  );
}
