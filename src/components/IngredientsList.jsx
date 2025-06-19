import React from 'react'

const IngredientsList = (props) => {
  return (
        <section>
          <h2>ingrediants on hand</h2>
          <ul className="ingredients-list" aria-live="polite">
            {props.ingrediantListitems}
          </ul>
          {props.listItem.length >= 3 && (
            <div className="get-recipe-container">
              <h3>Ready for a recipe</h3>
              <p>Generate a recepie from your list of ingrediants</p>
              <button onClick={props.getrecipe} >Get a recipe</button>
            </div>
          )}
        </section>
  )
}

export default IngredientsList
