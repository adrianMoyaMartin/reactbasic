import { useState } from "react";
import Button from "./Button";

const Parent = ({ children, ...rest }) => {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    console.log("ENTRA");
    fetch("http://0.0.0.0:3000")
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(posts);
  return (
    <div>
      <Button color="secondary" parentCallback={fetchData}>
        Fetch array from an api
      </Button>

      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post}>
              <h2 className="post-title">{post}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Parent;
