import { Header } from "../Components/Header";
import React from "react";
import { Link } from "react-router-dom";

export const Security = () => {
  const questions = [
    {
      title:
        "Основная масса угроз информационной безопасности приходится на ... ?",
      variants: ["Троянские программы", "Черви", "Шпионские программы"],
      correct: 0,
    },
    {
      title:
        "Какой вид идентификации и аутентификации получил наибольшее распространение?",
      variants: ["одноразовые пароли", "постоянные пароли", "системы PKI"],
      correct: 1,
    },
    {
      title:
        "Под какие системы распространение вирусов происходит наиболее динамично ?",
      variants: ["Windows", "Android", "Mac OS"],
      correct: 1,
    },
    {
      title: "Заключительным этапом построения системы защиты является",
      variants: ["анализ уязвимых мест", "планирование", "сопровождение"],
      correct: 2,
    },
    {
      title: "Какие угрозы безопасности информации являются преднамеренными ?",
      variants: [
        "Ошибки персонала",
        "Не авторизованный доступ",
        "Открытие электронного письма, содержащего вирус",
      ],
      correct: 1,
    },
    {
      title: "Какого подход к обеспечению безопасности имеет место ?",
      variants: ["комплексный", "теоретический", "логический"],
      correct: 0,
    },
    {
      title: "Системой криптографической защиты информации является:",
      variants: ["Крипто Про", "BFox Pro", "CAudit Pro"],
      correct: 0,
    },
    {
      title:
        "Какие вирусы активизируются в самом начале работы с операционной системой ?",
      variants: ["троянцы", "загрузочные вирусы", "черви"],
      correct: 1,
    },
    {
      title: "Stuxnet это ...",
      variants: ["Промышленный вирус", "Android", "Mac OS"],
      correct: 0,
    },
    {
      title: "Таргетированная атака - ...",
      variants: [
        "Атака на конкретный компьютер пользователя",
        "Атака на компьютерную систему крупного предприятия",
        "Атака на сетевое оборудование",
      ],
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
            <ul className="flex w-11/12 flex-col items-center ">
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
