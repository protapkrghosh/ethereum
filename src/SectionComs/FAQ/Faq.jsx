import { Accordion,  AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="bg-[#11121F] px-[30px] md:px-[23%] lg:px-[25%] xl:px-[28%] 2xl:px-[30%] pt-5 pb-10 -mt-[2px]">
      <h2 className="text-[18px] text-white font-medium uppercase mb-3">FAQ</h2>

      <div>
        <Accordion type="single" defaultValue="item-1" collapsible className="w-full bg-[#131524] border border-[#1f213a] rounded-[18px]">
          <AccordionItem value="item-1" className="px-7 py-3 border-b border-b-[#1f213a]">
            <AccordionTrigger className="text-white text-[18px]">What is Ethereum Airdrop?</AccordionTrigger>
            <AccordionContent className="text-[#686b91] text-[18px] mt-4 leading-7">
              Ting Ethereum airdrop event a spectacular token fiesta, has taken a turn in a move to honor the community’s support we have randomly selected valuable USD coin holders and airdropped them with funds form the foundation wallet serving
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="px-7 py-3 border-b border-b-[#1f213a]">
            <AccordionTrigger className="text-white text-[17px]">How does Ethereum mining work?</AccordionTrigger>
            <AccordionContent className="text-[#686b91] text-[17px] mt-4 leading-7">
              It comes with default styles that matches the other
              components&apos; aesthetic. Valuable USD coin holders and airdropped them with funds form the foundation wallet serving
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="px-7 py-3">
            <AccordionTrigger className="text-white text-[17px]">How do I send and receive Ether?</AccordionTrigger>
            <AccordionContent className="text-[#686b91] text-[17px] mt-4 leading-7">
              Ethereum airdrop event a spectacular token fiesta, has taken a turn in a move to honor the community’s support we have randomly selected valuable USD coin holders and airdropped them with funds form the foundation wallet serving
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
