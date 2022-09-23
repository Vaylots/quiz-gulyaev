import { Header } from "../Components/Header";
import React from "react";
import { Link } from "react-router-dom";

export const Literacy = () => {
  const questions = [
    {
      title: "Через какой тип подключения Internet работает быстрее?",
      variants: [
        "прямое по оптоволоконному каналу",
        "через wi-fi",
        "по телефонному каналу через модем",
      ],
      correct: 0,
    },
    {
      title: "Microsoft Word это ... ",
      variants: [
        "текстовый редактор",
        "видео редактор",
        "графический редактор",
      ],
      correct: 0,
    },
    {
      title:
        "Какое действие не рекомендуется выполнять при включённом компьютере?",
      variants: ["подключать монитор", "копировать файлы", "скачивать музыку"],
      correct: 2,
    },
    {
      title: "В каком виде процессор обрабатывает информацию?",
      variants: ["в двоичном коде", "в текстовом виде", "на английском языке"],
      correct: 0,
    },
    {
      title: "От чего зависит производительность компьютера?",
      variants: [
        "от скорости нажатия клавиш",
        "от частоты процессора",
        "от размера экрана",
      ],
      correct: 1,
    },
    {
      title: `Что такое "слэш"?`,
      variants: [
        "устройство хранения информации",
        "направление в музыке",
        "символ",
      ],
      correct: 2,
    },
    {
      title: "Что является единицей измерения количества информации?",
      variants: ["1 байт", "1 бит", "1 килобайт"],
      correct: 1,
    },
    {
      title: "Что можно передавать по e-mail?",
      variants: [
        "видео, изображение и сообщения",
        "сообщения и приложенные файлы",
        "только файлы",
      ],
      correct: 1,
    },
    {
      title: `Что такое "браузер"?`,
      variants: [
        "средство просмотра веб-страниц",
        "сервер в Интернете",
        "антивирусная программа",
      ],
      correct: 0,
    },
    {
      title: "Как может произойти заражение компьютерным вирусом?",
      variants: [
        "при перезагрузке компьютера",
        "при скачивании музыки из интернета",
        "при печати на принтере",
      ],
      correct: 1,
    },
    {
      title: "Что обязательно имеет компьютер, подключённый к интернету?",
      variants: ["web-сервер", "ip-адрес", "доменное имя"],
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
