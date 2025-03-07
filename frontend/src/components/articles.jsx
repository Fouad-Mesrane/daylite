import { useEffect, useState } from "react";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from the API
    async function fetchArticles() {
      try {
        const response = await fetch("https://api.elifesciences.org/articles");
        const data = await response.json();
        setArticles(data.items || []); 
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <strong>{article.title}</strong> - {article.published}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;
