import './cocktails.css';

import { Link } from 'react-router-dom';

export default function Cocktails(){
    return(
      <>
  <div className='container-list'>
  <div className="title-list">
    <h1>COCKTAILS</h1>
  </div>
  <div className="dynamic-data-list">
    <div className="cocktails-list">
      <div className="one-cocktail">
        <div className="image-cocktail-list">
          <Link to="/details">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/22/10/assets-1296892_1280.png"
              alt="img"
            />
          </Link>
          <div className="one-cocktail-name">
            <Link to="/details">
              <h4>Strawberry daiquiri</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <article className="not-available-photo-coctail-list">
      <h3>No uploaded cocktails yet!</h3>
      <Link to="/create/cocktail">Create cocktail</Link>
    </article>
  </div>
  </div>
</>
    );
}