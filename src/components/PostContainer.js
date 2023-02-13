//import { useState, useEffect } from "react";
import { Space, List } from "antd";
import useStorage from "/Users/adrianmoya/Documents/GitHub/reactbasic/src/store/states";

const PostContainer = ({ children, ...rest }) => {
  const data = useStorage((state) => state.data);
  // const [state, setState] = useState(null);
  // useEffect(() => {
  //   setState(posts);
  // }, [posts]);

  return (
    <Space
      direction="horizontal"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <List
        style={{ width: "1000px" }}
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>{item.Name + " " + item.surname}</List.Item>
        )}
      ></List>
    </Space>
  );
};

export default PostContainer;
