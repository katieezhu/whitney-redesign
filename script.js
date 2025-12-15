// code developed with the help of ai

const BASE_URL = "https://api.artic.edu/api/v1/artworks";

async function getRandomArtwork() {
  try {
    const response = await fetch(
      `${BASE_URL}?limit=50&fields=id,title,image_id,artist_title`
    );
    const data = await response.json();

    const artworks = data.data.filter(a => a.image_id);
    const random = artworks[Math.floor(Math.random() * artworks.length)];

    const imageUrl = `https://www.artic.edu/iiif/2/${random.image_id}/full/843,/0/default.jpg`;

    document.getElementById("random-artwork").src = imageUrl;
    document.getElementById("random-artwork").alt = random.title || "Artwork";
    document.getElementById("artwork-title").textContent = random.title || "";
    document.getElementById("artwork-artist").textContent =
      random.artist_title || "";
  } catch (error) {
    console.error("Error fetching artwork:", error);
  }
}

document
  .getElementById("new-artwork")
  .addEventListener("click", getRandomArtwork);

getRandomArtwork();
