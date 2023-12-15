import "./login.css";
import image from "../../images/list.png";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="image-half">
          <img className="listimg" src={image} alt="liste" />
        </div>
        <div className="text-half">
          <h1>Velkommen til startsiden</h1>
          <p>Her kan du legge til tekst, lenker, eller annet innhold.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
