import { useState, useEffect } from "react";

const PostContainer = ({ children, posts, parentCallback, ...rest }) => {
  // const [state, setState] = useState(null);
  // useEffect(() => {
  //   setState(posts);
  // }, [posts]);
  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post}>
            <h2 className="post-title">{post}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
