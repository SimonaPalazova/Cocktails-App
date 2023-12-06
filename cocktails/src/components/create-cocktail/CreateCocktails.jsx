
import {} from 'react-router-dom';

export default function CreateCocktail(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./createCocktail.css" />
  <title>Create Cocktail</title>
  <div className="container">
    <form className="form" method="post">
      <div className="form-title">
        <span>Create your</span>
      </div>
      <div className="title-2">
        <span>Cocktail</span>
      </div>
      <div className="input-container">
        <input
          className="input-name"
          type="text"
          placeholder="Enter cocktail name"
        />
      </div>
      <div className="input-container">
        <input
          className="input-img"
          type="text"
          placeholder="Enter image url"
        />
        <span> </span>
      </div>
      <div className="input-container">
        <textarea
          className="input-cocktail-ingredients"
          type="text"
          placeholder="Enter Planet cocktail ingredients"
          defaultValue={""}
        />
      </div>
      <div className="input-container">
        <textarea
          className="input-method-of-preparation"
          type="text"
          placeholder="Enter Planet method of preparation"
          defaultValue={""}
        />
      </div>
      <button type="submit" className="submit">
        <span className="sign-text">Create</span>
      </button>
    </form>
  </div>
</>


    );
}