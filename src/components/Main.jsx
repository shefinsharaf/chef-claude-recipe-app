import { useState } from "react";
import IngredientsList from "./IngredientsList";
import { fetchAIResponse } from "../api/api";
import ClaudeRecipe from "./ClaudeRecipe"
const Main = () => {
  const [listItem, setListItem] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

   function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");

    if (newIngredient.trim() !== "") {
      setListItem((prevlist) => [...prevlist, newIngredient.trim()]);
    }

    event.target.reset();
  }
  const [recipeShown, setRecipeShown] = useState(false);
  async function getrecipe() {
    setLoading(true);
    setRecipeShown(false);
    const ingredientString = listItem.join(", ");
    const prompt = `Give me a recipe using these ingredients: ${ingredientString}`;
    const recipeMarkdown = await fetchAIResponse(prompt);
    setRecipe(recipeMarkdown);
    setRecipeShown(true);
    setLoading(false)
  }

  const ingrediantListitems = listItem.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingrediant-form">
        <input
          aria-label="Add ingrediant"
          type="text"
          placeholder="e.g tomato"
          name="ingredient"
        />
        <button>Add ingrediant</button>
      </form>
      {listItem.length > 0 && (
        <IngredientsList
          ingrediantListitems={ingrediantListitems}
          getrecipe={getrecipe}
          listItem={listItem}
        />
      )}
        {loading && <div className="spinner"></div>}
      {recipeShown && <ClaudeRecipe recipe = {recipe} />}
    </main>
  );
};

export default Main;
