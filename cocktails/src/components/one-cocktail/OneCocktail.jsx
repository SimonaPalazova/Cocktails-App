import './oneCocktail.css'

import { Link } from 'react-router-dom';

export default function OneCocktail(){
    return(<>
        <div className="container-one-cocktail">
          <div className="cocktail-cocktail-info">
            <div className="cocktail-cocktail-name">
              <h1>Strawberry daiquiri</h1>
            </div>
            <div className="cocktail-cocktail-ingredients">
              <h3>Ingredients:</h3>
              <p>Rum, Strawberries, Lemon juice, Sugar syrup</p>
            </div>
            <div className="cocktail-method-of-preparation">
              <h3>Method of preparation:</h3>
              <p>Pour everything into a blender. Put ice and blend on ice mode</p>
            </div>
            <div className="cocktail-subscribe">
              <button>Subscribe</button>
              <p>Subscribes: 2</p>
            </div>
          </div>
          <div className="cocktail-cocktail-image">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/22/10/assets-1296892_1280.png"
              alt="Strawberry daiquiri"
            />
          </div>
        </div>
        <div className="cocktail-owner">
          <Link to="/edit/cocktail">Edit</Link>
          <Link to="/delete">Delete</Link>
        </div>
        
      </>
      );
}