import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionSection() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left">
          Как начать пользоваться ботом?
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Просто найдите бота в Telegram, нажмите кнопку «Старт», и все готово.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left">
          Могу ли я загружать видео в разных форматах?
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Да, при загрузке вы можете выбирать между форматами MP4, MP3 и
          другими.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left">
          Нужно ли мне вставлять ссылку на YouTube?
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Нет, просто введите название видео, и бот автоматически его найдет.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
