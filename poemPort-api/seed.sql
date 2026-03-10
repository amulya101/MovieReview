-- Create tables
CREATE TABLE IF NOT EXISTS poems (
  id          SERIAL PRIMARY KEY,
  author      TEXT NOT NULL,
  title       TEXT NOT NULL,
  description TEXT,
  image       TEXT,
  content     TEXT
);

CREATE TABLE IF NOT EXISTS comments (
  id       SERIAL PRIMARY KEY,
  poem_id  INTEGER NOT NULL REFERENCES poems(id) ON DELETE CASCADE,
  author   TEXT NOT NULL,
  text     TEXT NOT NULL
);

-- Seed existing poems
INSERT INTO poems (author, title, description, image, content) VALUES
(
  'Lamxmi Devi Kota',
  'Poem Title 1',
  'This is a description of Poem Title 1.',
  './poet.jpeg',
  'नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,'
),
(
  'Lamxmi Prasad Devkota',
  'Poem Title 2',
  'This is a description of Poem Title 2.',
  './poet.jpeg',
  'नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,'
),
(
  'Lamxmi Prasad Devkota',
  'Poem Title 3',
  'This is a description of Poem Title 3.',
  './poet.jpeg',
  'नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,'
),
(
  'Lamxmi Prasad Devkota',
  'Poem Title 4',
  'This is a description of Poem Title 4.',
  './poet.jpeg',
  'नछाडी जानोस् हे मेरा प्राण ! अकेली मलाई, मनको वनमा ननिभ्ने गरी विरह जलाई ! ननिभ्ने गरी विरह जलाई, लोचनका तारा ! हे मेर प्यारा ! यो जोति  बिलाए ! के भनूँ? भन्ने म केही थिइन  विष नै पिलाए ! प्यारा ! विष नै पिलाए !मनको कुरा गलामा अड्छ, अड्कन्छ गलामा, यो मेरो मुटु पचासबाजी धड्कन्छ पलामा । यो छाती मेरो चिरेर खोली नजर गराए,'
);
