// ======= Movie data (local image paths) =======
const movieData = {
  topSearches: [
    "images/new.image1.jpg",
    "images/new.image2.jpg",
    "images/new.image3.jpg",
    "images/new.image4.jpg"
  ],
  nextWatch: [
    "images/new.image5.jpg",
    "images/new.image6.jpg",
    "images/new.image7.jpg",
    "images/new.image8.jpg"
  ],
  retroTV: [
    "images/new.image9.jpg",
    "images/new.image10.jpg",
    "images/new.image11.jpg",
    "images/new.image12.jpg"
  ]
};

// ======= Function to display movies =======
function displayMovies(sectionId, imageList) {
  const container = document.getElementById(sectionId);

  imageList.forEach(src => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Movie Poster";

    movieDiv.appendChild(img);
    container.appendChild(movieDiv);
  });
}

// ======= Load movies when page opens =======
displayMovies("top-searches", movieData.topSearches);
displayMovies("next-watch", movieData.nextWatch);
displayMovies("retro-tv", movieData.retroTV);
