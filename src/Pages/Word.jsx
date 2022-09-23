import { Header } from "../Components/Header";
import React from "react";
import { Link } from "react-router-dom";

export const Word = () => {
  const questions = [
    {
      title: "Microsoft Word - это:",
      variants: [
        "графичeский рeдактор",
        "текстовый редактор",
        "редактор таблиц",
      ],
      correct: 1,
    },
    {
      title:
        "Какая команда помещает выделенный фрагмент текста в буфер без удаления: ",
      variants: ["Копировaть", "Вырезать", "Вставить"],
      correct: 0,
    },
    {
      title: "Поместить в документ рисунок можно при помощи вкладки:",
      variants: ["Вид", "Сервис", "Вставка"],
      correct: 2,
    },
    {
      title: "Чтобы выполнить проверку документа, нужно:",
      variants: [
        "Рецензирование - Правописание",
        "Вставка - Правописание",
        "Разметка страницы - Правописание",
      ],
      correct: 0,
    },
    {
      title: "Чтобы вставить изображение из Галереи изображений Office:",
      variants: ["Вставка - Рисунок", "Главная - Рисунок", "Вид - Рисунок"],
      correct: 0,
    },
    {
      title: `Чтобы сделать текст полужирным:`,
      variants: [
        "Выделить текст и нажать кнопку Ж на вкладке Рецензирование",
        "Выделить текст и нажать кнопку Ж на вкладке Главная",
        "Выделить текст и нажать кнопку Ж на вкладке Вид",
      ],
      correct: 1,
    },
    {
      title: "Чтобы вставить объект WordArt необходимо выбрать:",
      variants: [
        "Вставка - Word Art ",
        "Вставка - Объект - Word Art",
        "Главная - Word Art",
      ],
      correct: 0,
    },
    {
      title: "Колонтитулы в документ можно ввести используя вкладку:",
      variants: ["Правка", "Вид", "Вставка"],
      correct: 2,
    },
    {
      title: `Как вставить матeматичeскоe выражeниe в тeкстовый докумeнт?`,
      variants: [
        "Вставка/Объект/Формулы",
        "Главная/Формулы",
        "Вставка/формулы",
      ],
      correct: 2,
    },
    {
      title: "Для создания фона страницы используется команда:",
      variants: [
        "Главная/Цвет страницы",
        "Вставка/Цвет страницы",
        "Разметка страницы/Цвет страницы",
      ],
      correct: 2,
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
