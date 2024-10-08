import rocket from "@/assets/rocket.png";
import magnifier from "@/assets/magnifier.png";
import pointer from "@/assets/pointer.png";
import download from "@/assets/download.png";
import phone from "@/assets/phone.png";
const SimilarSong = () => {
  return (
    <div className="flex justify-between items-center gap-4 w-full">
      <div className="flex justify-between items-end min-h-[135px] max-h-[290px] h-full flex-col gap-[17px] ">
        <div className="flex flex-col justify-end items-end gap-[6px]">
          <img
            src={rocket}
            alt="rocket"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-end">
              Запуск бота
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-end max-w-[358px] w-full">
              Найдите бота в Telegram и нажмите кнопку «Старт».
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end gap-[6px] ">
          <img
            src={magnifier}
            alt="magnifier"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-end">
              Поиск музыки
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-end max-w-[358px] w-full">
              Введите название музыки, которую вы ищете. Бот автоматически
              найдет соответствующую музыку.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={phone} alt="phone" />
      </div>

      <div className="flex justify-between items-start flex-col max-h-[290px] min-h-[135px] h-full gap-[17px] ">
        <div className="flex flex-col justify-start items-start gap-[6px] max-w-[358px]">
          <img
            src={pointer}
            alt="pointer"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-start">
              Выбор музыки
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-start max-w-[358px] w-full">
              Выберите понравившуюся вам музыку из результатов поиска.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-[6px] max-w-[358px]">
          <img
            src={download}
            alt="download"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-start">
              Загрузка музыки
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-start max-w-[358px] w-full">
              Выберите нужный формат (WAV, MP3 и т.д.) для выбранной музыки и
              нажмите кнопку загрузки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarSong;
