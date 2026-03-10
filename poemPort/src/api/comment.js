const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchCommentsByPoemId = async (poemId) => {
  try {
    const response = await fetch(`${BASE_URL}/poems/${poemId}/comments`);
    const postedComments = await response.json();
    console.log("Fetched comments response:", postedComments);
    return await postedComments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

export const postComment = async (poemId, author, text) => {
  try {
    const response = await fetch(`${BASE_URL}/poems/${poemId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, text }),
    });
    const data = await response.json();
    console.log("Posted comment response:", data);
    return data;
  } catch (error) {
    console.error("Error posting comment:", error);
    return null;
  }
};