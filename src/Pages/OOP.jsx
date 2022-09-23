import { Header } from "../Components/Header";
import React from "react";
import { Link } from "react-router-dom";

export const OOP = () => {
  const questions = [
    {
      title:
        "Выберите правильную структуру альтернативного условного оператора (полный вариант).",
      variants: [
        "If <условие> Then <оператор 1>",
        "If <условие> Then <оператор 1> Else <оператор 2>",
        "IF <условие> THEN <оператор 1> <оператор 2>",
        "If <условие1> Then If <условие2> Then <оператор1> <оператор2>",
      ],
      correct: 1,
    },
    {
      title:
        "Выберите правильную структуру безальтернативного блочного оператора (сокращенный вариант).",
      variants: [
        "If <условие> Then <оператор1> <оператор2>",
        "If <условие1> Then If <условие2> Then <оператор1> <оператор2>",
        "If <условие> Then <оператор 1> Else <оператор 2>",
        "If <условие> Then <оператор1> <оператор2> Else <оператор1> <оператор2> End If",
      ],
      correct: 0,
    },
    {
      title: "Что из этого не является циклом:",
      variants: ["Do While", "Do Until", "Select case", "For …Next"],
      correct: 2,
    },
    {
      title: "Циклы, в которых число повторений заранее известно называются:",
      variants: ["арифметические циклы", "В1256", "123С"],
      correct: 0,
    },
    {
      title:
        "Циклы в которых известно только условные завершения цикла, а число повторений цикла заранее неизвестно называют:",
      variants: [
        "циклами с предусловием",
        "арифметические циклы",
        "итерационные циклы",
        "безусловные циклы",
      ],
      correct: 2,
    },
    {
      title: `Выберите все цикл с условием.`,
      variants: ["For Next", "Do while", "Do until", "If Then"],
      correct: 1,
    },
    {
      title:
        "Управляющие конструкции, позволяющие проверить некоторое условие и в зависимости от результатов этой проверки выполнить ту или иную группу операторов называются:",
      variants: [
        "Операторы безусловного перехода",
        "Операторы ветвления",
        "Операторы цикла",
        "Операторы присваивания",
      ],
      correct: 1,
    },
    {
      title: "Цикл, используемый для организации арифметических циклов:",
      variants: ["Do Until", "For  Next", "Select Case", "Do While"],
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
      <main className=" w-full h-full flex flex-col items-center   ">
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
