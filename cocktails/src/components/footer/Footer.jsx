import './footer.css';

export default function Footer(){
    return(
        <footer>
  <div className="”footer-content”">
    <h3>Cocktails</h3>
    <ul className="social">
      <li>
        <a href="#">
          <i className="fa fa-facebook-square" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-github" />
        </a>
      </li>
    </ul>
  </div>
  <div className="footer-bottom">
    <p>
      copyright ©2023 Cocktails Designed by <span>Simona</span>
    </p>
  </div>
</footer>
    );
}