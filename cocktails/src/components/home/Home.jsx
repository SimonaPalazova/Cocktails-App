import './home.css';

export default function Home(){
    return(
      <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./home.css" />
      <title>Home</title>
      <div className="container-home">
        <div className="row-home">
          <div className="col-home">
            <h1 className="title-home">Cocktails</h1>
            <p className="paragraph-home">
              Welcome to the page for cocktail lovers, bartenders and people who
              respect alcohol. Here you will find recipes for various cocktails.
              Register on the page to be able to access the cocktail recipes or you
              can share the recipe of your favorite cocktail.
            </p>
          </div>
          <div className="col-home">
            <img
              className="cocktail-home"
              src="https://cdn.pixabay.com/photo/2016/03/31/22/10/assets-1296892_1280.png"
              alt="cocktail"
            />
          </div>
        </div>
      </div>
    </>
    
    );
}