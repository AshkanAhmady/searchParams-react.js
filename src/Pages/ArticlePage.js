import { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const ArticlePage = () => {
  // just look like useState
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  let userInfo = [];

  //   first way
  let location = useLocation().search;
  location = location.replace("?", "");
  let array = location.split("&");
  array.map((item) => {
    let equalIndex = item.indexOf("=");
    let key = item.slice(0, equalIndex);
    let value = item.slice(equalIndex + 1, item.length);
    userInfo.push({ key, value });
  });

  console.log(userInfo);

  // second way
  searchParams.forEach((value, key) => userInfo.push({ key, value }));
  console.log(userInfo);

  return (
    <div>
      <h1>article</h1>
      <Link to="/">go back</Link>
    </div>
  );
};

export default ArticlePage;
