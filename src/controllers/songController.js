import Song from "../models/songModel";

const addSong = async (req, res) => {
  const { title, artist, genre } = req.body;
  const fileUrl = req.file.path;

  try {
    const newSong = new Song({ title, artist, genre, fileUrl });
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { addSong };
