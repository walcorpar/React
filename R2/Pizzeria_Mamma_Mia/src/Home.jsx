//Home.jsx
import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";

export default function Home() {
  return (
    <div>
    <header className="header-area">
        <Header />
    </header>
    <main className="main-area">
        <CardPizza />
    </main>
    </div>
  );
}
