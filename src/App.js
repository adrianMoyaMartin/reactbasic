import "./App.css";

import Parent from "./components/Parent";
//import { useState, useEffect } from "react";

function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   console.log("ENTRA");
  //   fetch("http://0.0.0.0:3000")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  return (
    <div className="App">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 underline">
        Fetch from an api
      </h1>
      <Parent></Parent>

      <p id="textDisp" className="text-3xl my-10"></p>
      {/* <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post}>
              <h2 className="post-title">{post}</h2>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
