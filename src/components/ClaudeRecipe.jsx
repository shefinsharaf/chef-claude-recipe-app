import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <section className="recipe-section">
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </article>
    </section>
  );
};
export default ClaudeRecipe;
