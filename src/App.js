import "./styles/style.scss";
import { Link } from "react-router-dom";
import { Header } from "./Components/Header";
function App() {
  const tests = [
    {
      title: "Информационная безопасность",
      path: "/security",
    },
    {
      title: "Тест на компьютерную грамотность",
      path: "/literacy",
    },
    {
      title: "Тест на знание Microsoft Word",
      path: "/word",
    },
    {
      title: "Электронные таблицы Microsoft Excel",
      path: "/excel",
    },
    {
      title: "Основы ООП",
      path: "/oop",
    },
  ];
  return (
    <div className="App w-screen h-screen ">
      <Header />
      <main className=" w-screen h-screen flex flex-col items-center   ">
        <div className="bg-white  w-10/12 mt-10 p-8 rounded-xl mx-auto flex flex-col items-center">
          <p>Выбор теста</p>
          <ul className="flex w-8/12 flex-col ">
            {tests.map((obj) => {
              return (
                <Link className="items-center" to={obj.path}>
                  <li className=" tests w-12/12 cursor-pointer select-none hover:scale-105   bg-gray-200 border-black  text-center border-2 my-2 p-2 rounded-3xl">
                    {obj.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
