import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <PageNav></PageNav>
      <AppNav></AppNav>
      <h3>Home Page of the app</h3>
    </div>
  );
}
