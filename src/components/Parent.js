import { useState } from "react";

import ButtonMain from "./Button";
import PostContainer from "./PostContainer";

const Parent = ({ children, ...rest }) => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     console.log({ posts });
  //   }, [posts]);

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
      <ButtonMain color="secondary" parentCallback={fetchData}>
        Fetch array from an api
      </ButtonMain>
      <PostContainer posts={posts}></PostContainer>
    </div>
  );
};

export default Parent;
