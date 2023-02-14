import "./App.css";
import { Typography } from "antd";
import Parent from "./components/Parent";
import useStorage from "./store/states";
const { Title } = Typography;

//import { useState, useEffect } from "react";

function App() {
  const count = useStorage((state) => state.count);
  const countUp = useStorage((state) => state.countUp);
  const countDown = useStorage((state) => state.countDown);

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

  console.log(count);
  return (
    <div className="App">
      <Title mark underline>
        Fetch from an api
      </Title>
      <Parent></Parent>

      {/*<p id="textDisp" className="text-3xl my-10"></p>
       <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post}>
              <h2 className="post-title">{post}</h2>
            </div>
          );
        })}
      </div> */}
      <p>{count}</p>
      <button onClick={countUp} style={{ width: "100px", height: "100px" }}>
        Click me to count up
      </button>
      <button onClick={countDown} style={{ width: "100px", height: "100px" }}>
        Click me to count down
      </button>
    </div>
  );
}

export default App;
