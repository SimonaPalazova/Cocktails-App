import './home.css';

export default function Home(){
    return(
        <div className="container">
  <div className="row">
    <div className="col">
      <h1 className='titles'>Cocktails</h1>
      <p>
        Welcome to the page for cocktail lovers, bartenders and people who
        respect alcohol. Here you will find recipes for various cocktails.
        Register on the page to be able to access the cocktail recipes or you
        can share the recipe of your favorite cocktail.
      </p>
    </div>
    <div className="col">
      <img
        className="cocktail"
        src="https://cdn.pixabay.com/photo/2016/03/31/22/10/assets-1296892_1280.png"
        alt="cocktail"
      />
    </div>
  </div>
</div>
    );
}