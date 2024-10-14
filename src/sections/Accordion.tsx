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
        <AccordionTrigger>Как начать пользоваться ботом?</AccordionTrigger>
        <AccordionContent>
          Просто найдите бота в Telegram, нажмите кнопку «Старт», и все готово.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Могу ли я загружать видео в разных форматах?
        </AccordionTrigger>
        <AccordionContent>
          Да, при загрузке вы можете выбирать между форматами MP4, MP3 и
          другими.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Нужно ли мне вставлять ссылку на YouTube?
        </AccordionTrigger>
        <AccordionContent>
          Нет, просто введите название видео, и бот автоматически его найдет.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
