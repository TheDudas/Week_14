// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, songname: "Bohemian Rhapsody", album: "A Night at the Opera", band: "Queen" },
    { id: 2, songname: "Hotel California", album: "Hotel California", band: "Eagles" },
    { id: 3, songname: "Stairway to Heaven", album: "Led Zeppelin IV", band: "Led Zeppelin" },
  ]);

  const [newSong, setNewSong] = useState({
    id: "",
    songname: "",
    album: "",
    band: "",
  });

  const handleAddSong = () => {
    if (newSong.id && newSong.songname && newSong.album && newSong.band) {
      setSongs([...songs, newSong]);
      setNewSong({ id: "", songname: "", album: "", band: "" }); // Clear input fields
    }
  };

  const handleRemoveSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Playlist</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Song Name</th>
            <th>Album</th>
            <th>Band</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.id}</td>
              <td>{song.songname}</td>
              <td>{song.album}</td>
              <td>{song.band}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveSong(song.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add a Song</h3>
      <div className="mb-3">
        <input
          type="number"
          placeholder="ID"
          className="form-control mb-2"
          value={newSong.id}
          onChange={(e) => setNewSong({ ...newSong, id: parseInt(e.target.value, 10) })}
        />
        <input
          type="text"
          placeholder="Song Name"
          className="form-control mb-2"
          value={newSong.songname}
          onChange={(e) => setNewSong({ ...newSong, songname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Album"
          className="form-control mb-2"
          value={newSong.album}
          onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
        />
        <input
          type="text"
          placeholder="Band"
          className="form-control mb-2"
          value={newSong.band}
          onChange={(e) => setNewSong({ ...newSong, band: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddSong}>
          Add Song
        </button>
      </div>
    </div>
  );
};

export default SongList;

