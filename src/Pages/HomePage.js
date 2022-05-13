import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/article?name=ashkan&age=35&lastname=ahmadi&gender=male">
        go to article
      </Link>
    </div>
  );
};

export default HomePage;
