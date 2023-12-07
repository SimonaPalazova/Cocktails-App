
import {} from 'react-router-dom';
import './createCocktail.css'
export default function CreateCocktail(){
    return(
        <>
  <div className="container-create">
    <form className="form-create" method="post">
      <div className="form-create-title">
        <span>Create your</span>
      </div>
      <div className="title-create-form-2">
        <span>Cocktail</span>
      </div>
      <div className="input-container-create">
        <input
          className="input-name-create"
          name='name'
          type="text"
          placeholder="Enter cocktail name"
        />
      </div>
      <div className="input-container-create">
        <input
          className="input-img-create"
          name='image'
          type="text"
          placeholder="Enter image url"
        />
        <span> </span>
      </div>
      <div className="input-container-create">
        <textarea
          className="input-cocktail-ingredients-create"
          name='cocktail-ingredients'
          type="text"
          placeholder="Enter Planet cocktail ingredients"
          defaultValue={""}
        />
      </div>
      <div className="input-container-create">
        <textarea
          className="input-method-of-preparation-create"
          name='method-of-preparation'
          type="text"
          placeholder="Enter Planet method of preparation"
          defaultValue={""}
        />
      </div>
      <button type="submit" className="submit-create">
        <span className="sign-text">Create</span>
      </button>
    </form>
  </div>
</>


    );
}