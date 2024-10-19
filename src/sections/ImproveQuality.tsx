import BeforeLady from "@/assets/beauty-before.jpg";
import AfterLady from "@/assets/beauty-after.jpg";
import { useState } from "react";
import SeeMore from "@/components/SeeMore";
import { BeforeAfter } from "@/components/BeforeAfter";

const ImproveQuality = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5 gap-10 text-center flex flex-col justify-evenly max-w-4xl *:text-center *:md:text-start">
      <h2 className="text-[24px] md:text-[36px] font-bolder text-center mx-auto">
        Улучшение качества изображений
      </h2>
      <BeforeAfter beforeImage={BeforeLady} afterImage={AfterLady} />
      <p className="mt-4 text-start text-lg lg:text-xl">
        Нужно обновить старое семейное фото? Заказчик прислал изображение
        плохого качества и у него нет вектора? На фотографии с отпуска много
        шумов или пересветов? Воспользуйтесь ботом TopMusicBot! <br />
        <br />
        Бот поможет сделать плохое фото хорошим, ярким и интересным. Мы
        разрабатывали инструмент как для обычных людей, которые увлекаются
        фотографией, так и профессиональных и фотографов.{" "}
        <button
          onClick={() => setOpen(!open)}
          className="underline  text-lg lg:text-xl"
        >
          {open ? "Узнать Меньше" : "Узнать Больше"}
        </button>
      </p>
      <SeeMore open={open} className="*:text-center *:md:text-start ">
        <h2 className="text-xl font-bold text-start mb-2">
          Возможности TopMusicBot
        </h2>
        <p className="my-2 text-start">Наш бот умеет:</p>
        <ul className="list-disc ml-4">
          <li className="text-start">
            <strong>Повышать разрешение:</strong> У каждого найдется не один
            десяток памятных или семейных фото в плохом разрешении. TopMusicBot
            повысить разрешение без потери резкости. Даже если его сделали на
            старый фотоаппарат.
          </li>
          <li className="text-start">
            <strong>Настраивать яркость и баланс белого:</strong> На фото много
            бликов или оно слишком блеклое? TopMusicBot выровняет яркость и
            сделает его приятным глазу.
          </li>
          <li className="text-start">
            <strong>Убирать размытость:</strong> Фотография получилась слишком
            размытая или неправильно наложилось боке? TopMusicBot уберет любые
            огрехи изображения.
          </li>
          <li className="text-start">
            <strong>Скрывать дефекты:</strong> Если вы хотите улучшить скан
            старой фотографии, TopMusicBot уберет мелкие дефекты, как трещины и
            потертости.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2 text-start">
          Плюсы TopMusicBot для улучшения изображений
        </h3>
        <p className="my-2 text-start">
          У нашего бота есть три ключевых достоинства:
        </p>
        <ul className="list-disc ml-4">
          <li className="text-start">
            Он всегда под рукой. Не нужно искать сервис в интернете. Просто
            загрузите фотографию в бот.
          </li>
          <li className="text-start">
            Обработка занимает минимум времени. Не нужно ждать очереди – фото
            будет готова сразу после обработки сервисом.
          </li>
          <li className="text-start">
            Неограниченное количество обработок. Вы покупаете подписку один раз
            и можете обработать столько фотографий, сколько хотите.
          </li>
        </ul>

        <p className="mt-2 text-start">
          Наш сервис поможет улучшить фотографии в любом состоянии, в том числе
          старые снимки из прошлого века. Воспользуйтесь нашим ботом в
          Телеграме, чтобы обновить семейный фотоальбом или улучшить фото с
          отпуска!
        </p>
      </SeeMore>
    </div>
  );
};

export default ImproveQuality;
