import { Header } from "../Components/Header";
import React from "react";
import { Link } from "react-router-dom";

export const Excel = () => {
  const questions = [
    {
      title: "Электронная таблица (ЭТ) – это:",
      variants: [
        "устройство персонального компьютера, управляющее его ресурсами",
        "прикладная программа, предназначенная для обработки структурированных в виде таблицы данных",
        "системная программа, управляющая ресурсами персонального компьютера",
      ],
      correct: 1,
    },
    {
      title: "Основным элементом ЭТ является:",
      variants: ["ячейка", "строка", "столбец", "таблица"],
      correct: 0,
    },
    {
      title: "Диапазон – это",
      variants: [
        "все ячейки одной строки",
        "совокупность клеток, образующих в таблице область прямоугольной формы",
        "все ячейки одного столбца",
      ],
      correct: 1,
    },
    {
      title: "Укажите правильный адрес ячейки",
      variants: ["А12С", "В1256", "123С"],
      correct: 1,
    },
    {
      title:
        "В электронных таблицах выделена группа ячеек А1:В3. Сколько ячеек входит в этот диапазон?",
      variants: ["4", "5", "6"],
      correct: 2,
    },
    {
      title: `Укажите неправильную формулу`,
      variants: ["=С245*М67", "=О89-К89", "А2+В4", "=А1/С453"],
      correct: 2,
    },
    {
      title: "Результатом вычислений в ячейке С1 будет A1:5 B1:=A1*2 C1:=A1*B1",
      variants: ["10", "15", "20"],
      correct: 1,
    },
    {
      title: "В ЭТ нельзя удалить:",
      variants: ["содержимое ячейки", "имя ячейки", "строку"],
      correct: 1,
    },
  ];

  const [question, setQuestion] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [barWidth, setBarWidht] = React.useState(0);

  const answer = (value) => {
    if (value == questions[question]["correct"]) {
      setCount(count + 1);
    }
    console.log(count);
    setQuestion(question + 1);
    setBarWidht(((question + 1) / 100) * questions.length * 100);
  };

  return (
    <div className="game">
      <Header />
      <main className=" w-screen h-screen flex flex-col items-center   ">
        {question < questions.length ? (
          <div className="bg-white  w-10/12 mt-10 p-8 rounded-xl mx-auto flex flex-col items-center">
            <div className="bar h-4 border-2 rounded-xl mb-2 border-black flex items-center  w-full ">
              <div
                style={{ width: `${barWidth}%` }}
                className="bar_progress rounded-xl h-3"
              ></div>
            </div>

            <p>{questions[question]["title"]}</p>
            <ul className="flex w-11/12 flex-col items-center">
              {questions[question]["variants"].map((obj, index) => {
                return (
                  <li
                    onClick={() => {
                      answer(index);
                    }}
                    key={index}
                    className="tests w-11/12 cursor-pointer select-none hover:scale-105   bg-gray-100 border-black shadow-lg  text-center border-2 my-2 p-2 rounded-3xl"
                  >
                    {obj}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="bg-white  w-10/12 mt-10 p-8 rounded-xl mx-auto flex flex-col items-center ">
            <img src="prize.png" className="w-3/12" alt="" />
            <div className=" mt-10 flex flex-col items-center">
              <p>
                Поздравляю вы отгадали {count} вопросов из {questions.length}{" "}
              </p>
              <Link
                to={"/"}
                className="mt-3 flex justify-center btn_back border-2 w-4/5  items-center  border-black rounded-3xl h-10"
              >
                <span>Вернуться на главную</span>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
