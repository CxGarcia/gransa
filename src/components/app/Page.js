import Meta from "./Meta";
import Nav from "@components/nav/Nav";

export default function Page(props) {
  return (
    <div>
      <Meta />
      <Nav />
      {props.children}
    </div>
  );
}
