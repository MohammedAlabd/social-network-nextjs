import PostTitle from "./PostTitle"
import DemoData from "../../data/PostData.json"
import TextBody from "./TextBody";
import PostImage from "./PostImage";

const PostBody = () => {
    const post = DemoData.post
  return (
    <div>
        {post.content.map((item, index) => {
        if (item.type === "title") {
          return <PostTitle text = {item.text} key={index}  />;
        }else if (item.type === "text") {
          return <TextBody text = {item.text} key={index}  />;
        } else if (item.type === "photo") {
          return <PostImage image={"hello"} key={index} />
        } else if (item.type === "url") {
          return <a key={index} href={item.url}>{item.url}</a>;
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default PostBody