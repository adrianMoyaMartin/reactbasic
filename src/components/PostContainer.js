//import { useState, useEffect } from "react";

const PostContainer = ({ children, posts, parentCallback, ...rest }) => {
  // const [state, setState] = useState(null);
  // useEffect(() => {
  //   setState(posts);
  // }, [posts]);
  return (
    <div className="flex justify-center">
      <ul className="inline-flex flex-col-reverse bg-white rounded-lg w-96 text-gray-900">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post}>
              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                {post}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PostContainer;
