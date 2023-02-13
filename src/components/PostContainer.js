//import { useState, useEffect } from "react";
import { Space, List } from "antd";

const PostContainer = ({ children, posts, parentCallback, ...rest }) => {
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
        dataSource={posts}
        renderItem={(item) => (
          <List.Item>{item.Name + " " + item.surname}</List.Item>
        )}
      ></List>
    </Space>
  );
};

export default PostContainer;
