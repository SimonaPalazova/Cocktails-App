import './editCocktail.css'

export default function EditCoctail(){
    return(<div className="container-edit-cocktail">
    <form className="form-edit-cocktail" method="post">
      <div className="form-edit-coctail-title">
        <span>Edit your</span>
      </div>
      <div className="edit-coctail-title-2">
        <span>Cocktail</span>
      </div>
      <div className="input-container-edit-cocktail">
        <input
          className="input-name-cocktail-edit"
          name='name'
          type="text"
          placeholder="Enter cocktail name"
          defaultValue="Name"
        />
      </div>
      <div className="input-container-edit-cocktail">
        <input
          className="input-img-edit-cocktail"
          name='image'
          type="text"
          placeholder="Enter image url"
          defaultValue="imgUrl"
        />
        <span> </span>
      </div>
      <div className="input-container-edit-cocktail">
        <textarea
          className="input-cocktail-ingredients-edit-cocktail"
          name='cocktail-ingredients'
          type="text"
          placeholder="Enter Cocktail ingredients"
          defaultValue={"Ingredients"}
        />
      </div>
      <div className="input-container-edit-cocktail">
        <textarea
          className="input-method-of-preparation-edit-cocktail"
          name='method-of-preparation'
          type="text"
          placeholder="Enter Cocktail overview"
          defaultValue={"Method of preparation"}
        />
      </div>
      <button type="submit" className="submit-edit-cocktail">
        <span className="sign-text">Edit</span>
      </button>
    </form>
  </div>
  );
}