import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: "Spirited Away", genre: "Japanese Anime Fantasy", rating: "8.6", description: "A young girl enters a mysterious spirit world and must find her way back home.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/500px-Spirited_Away_Japanese_poster.png" },
  { id: 2, title: "Your Name", genre: "Japanese Anime Romance", rating: "8.4", description: "Two teenagers mysteriously swap bodies and build a deep connection across distance and time.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/500px-Your_Name_poster.png" },
  { id: 3, title: "Suzume", genre: "Japanese Anime Adventure", rating: "7.6", description: "A schoolgirl travels across Japan to close magical doors causing disasters.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Suzume_no_Tojimari_poster.jpg/500px-Suzume_no_Tojimari_poster.jpg" },
  { id: 4, title: "Jujutsu Kaisen 0", genre: "Japanese Anime Action", rating: "7.8", description: "A troubled student joins a jujutsu school to control his dangerous cursed power.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png/500px-Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png" },
  { id: 5, title: "Demon Slayer: Mugen Train", genre: "Japanese Anime Action", rating: "8.2", description: "Tanjiro and the Hashira board the Mugen Train to battle a powerful demon.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/500px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg" },
  { id: 6, title: "The Boy and the Heron", genre: "Japanese Anime Fantasy", rating: "7.6", description: "A grieving boy enters a surreal world where life and death are deeply connected.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/How_Do_You_Live_poster.jpg/500px-How_Do_You_Live_poster.jpg" },
  { id: 7, title: "12th Fail", genre: "Bollywood Drama", rating: "8.8", description: "An inspiring story of perseverance and ambition against all odds.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/12th_Fail_poster.jpeg/500px-12th_Fail_poster.jpeg" },
  { id: 8, title: "Stree 2", genre: "Bollywood Horror Comedy", rating: "7.2", description: "The people of Chanderi face a new supernatural threat with humor and chaos.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Stree_2.jpg/500px-Stree_2.jpg" },
  { id: 9, title: "Fighter", genre: "Bollywood Action", rating: "6.9", description: "Top Indian Air Force pilots rise to a high-stakes mission in the sky.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Fighter_film_teaser.jpg/500px-Fighter_film_teaser.jpg" },
  { id: 10, title: "Oppenheimer", genre: "Hollywood Drama", rating: "8.3", description: "The story of J. Robert Oppenheimer and the making of the atomic bomb.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/500px-Oppenheimer_%28film%29.jpg" },
  { id: 11, title: "Dune: Part Two", genre: "Hollywood Sci-Fi", rating: "8.5", description: "Paul Atreides unites with the Fremen to confront the forces threatening Arrakis.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Dune_Part_Two_poster.jpeg/500px-Dune_Part_Two_poster.jpeg" },
  { id: 12, title: "Deadpool & Wolverine", genre: "Hollywood Action", rating: "7.6", description: "A wild team-up adventure across timelines with chaos and sharp humor.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/500px-Deadpool_%26_Wolverine_poster.jpg" },
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));
  const handleImageError = (event) => {
    event.currentTarget.src = "/poster-fallback.svg";
  };

  if (!movie) return <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Movie not found!</div>;

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={() => navigate("/")}
        style={{ background: "#f5c518", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", marginBottom: "30px" }}
      >
        ← Back
      </button>
      <div style={{ display: "flex", gap: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <img
          src={movie.image}
          alt={movie.title}
          onError={handleImageError}
          style={{ width: "300px", height: "400px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div style={{ color: "#fff" }}>
          <h1 style={{ color: "#f5c518" }}>{movie.title}</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p style={{ lineHeight: "1.6", color: "#aaa" }}>{movie.description}</p>
          <button
            onClick={() => navigate(`/booking/${movie.id}`)}
            style={{ marginTop: "30px", background: "#f5c518", border: "none", padding: "15px 30px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" }}
          >
            🎟️ Book Seat
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
