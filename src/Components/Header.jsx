import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-12 w-10/12 px-10 flex justify-between  items-center rounded-xl mt-2 mx-auto ">
      <Link to={"/"}>
        <p>Online-Tests-GPT</p>
      </Link>
      <Link to={"/"}>
        <button>Главная</button>
      </Link>
    </header>
  );
};
