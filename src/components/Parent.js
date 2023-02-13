import ButtonMain from "./Button";
import PostContainer from "./PostContainer";

const Parent = ({ children, ...rest }) => {
  //   useEffect(() => {
  //     console.log({ posts });
  //   }, [posts]);
  return (
    <div>
      <ButtonMain color="secondary">Fetch array from an api</ButtonMain>
      <PostContainer></PostContainer>
    </div>
  );
};

export default Parent;
