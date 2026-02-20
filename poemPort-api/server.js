import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 3001;

const poems = [
  {
      id: 1,
      author: "Lamxmi Devi Kota",
      title: "Poem Title 1",
      description: "This is a description of Poem Title 1.",
      image: "./poet.jpeg",
      content: "नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,"
    },
    {
      id: 2,
      author: "Lamxmi Prasad Devkota",
      title: "Poem Title 2",
      description: "This is a description of Poem Title 2.",
      image: "./poet.jpeg",
      content: "नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,"
    },
    {
      id: 3,
      author: "Lamxmi Prasad Devkota",
      title: "Poem Title 3",
      description: "This is a description of Poem Title 3.",
      image: "./poet.jpeg",
      content: "नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,"
    },
    {
      id: 4,
      author: "Lamxmi Prasad Devkota",
      title: "Poem Title 4",
      description: "This is a description of Poem Title 4.",
      image: "./poet.jpeg",
      content: "नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,"
    }
];

// Allow JSON requests/responses
app.use(express.json());

let comments = [
  {id: 1, poemId: 1, author: "Amulya", text: "Great poem!"},
];

// Root route
app.get("/", (req, res) => {
  res.send("User API is running!");
});

// Endpoint to get list of users
app.get("/poems", (req, res) => {
  const shortPoems = poems.map(({ id, title, description, image, author }) => ({
    id,
    title,
    description,
    image,
    author
  }));
  res.json(shortPoems);
});

app.get("/poems/:id", (req, res) => {
  const poem_content = poems.find(p => p.id === parseInt(req.params.id));
  if (!poems) return res.status(404).json({ message: "Post not found" });
  res.json(poem_content);
});

app.get("/poems/:id/comments", (req, res) => {
  const poemId = parseInt(req.params.id);
  const poemComments = comments.filter(c => c.poemId === poemId);
  res.json(poemComments);
});

app.post("/poems/:id/comments", (req, res) => {
  const poemId = parseInt(req.params.id);
  const { author, text } = req.body;
  const newComment = {
    id: comments.length + 1,
    poemId,
    author,
    text
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});