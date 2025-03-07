import { useEffect, useState } from "react";

function RandomArticle() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    async function fetchRandomArticle() {
      try {
        const response = await fetch("https://api.elifesciences.org/articles");
        const data = await response.json();
        const articles = data.items || []; 

        // selects a random article ... is this right?
        const randomIndex = Math.floor(Math.random() * articles.length);
        setArticle(articles[randomIndex]);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    }

    fetchRandomArticle();
  }, []);

  if (!article) {
    return <div>Loading article...</div>;
  }

  return (
    <div style={styles.card}>
      <h3>{article.title}</h3>
      <p>{article.abstract}</p> 
      <small>Published: {article.published}</small>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px 0",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  },
};

export default RandomArticle;
