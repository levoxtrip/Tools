import { Link } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";

const NotFound = () => {
  return (
    <div className="page stack-md">
      <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Not found" }]} />
      <h1>This page got lost.</h1>
      <p className="text-soft max-w-md">
        The link might be broken, or the page might have moved.
      </p>
      <Link to="/" className="btn-ghost">
        <span aria-hidden>←</span> Back home
      </Link>
    </div>
  );
};

export default NotFound;
