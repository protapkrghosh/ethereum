import { Accordion,  AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="bg-[#11121F] dark:bg-[#F2F4F6] px-[18px] pt-5 pb-10 -mt-[2px]">
      <div className="w-full md:w-[576px] lg:w-[576px] xl:w-[676px] 2xl:w-[764px] mx-auto">
        <h2 className="text-[18px] text-white font-medium uppercase mb-3">FAQ</h2>

        <div>
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full bg-[#131524] dark:bg-[#F2F4F6] border border-[#1f213a] dark:border-[#7a8aa062] rounded-[18px]">
            <AccordionItem value="item-1" className="px-7 py-3 border-b border-b-[#1f213a] dark:border-b-[#7a8aa062]">
              <AccordionTrigger className="text-white dark:text-[#273852] text-[18px]">What is Ethereum Airdrop?</AccordionTrigger>
              <AccordionContent className="text-[#686b91] dark:text-[#7A8AA0] text-[18px] mt-4 leading-7">
                Ting Ethereum airdrop event a spectacular token fiesta, has taken a turn in a move to honor the community’s support we have randomly selected valuable USD coin holders and airdropped them with funds form the foundation wallet serving
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-7 py-3 border-b border-b-[#1f213a] dark:border-b-[#7a8aa062]">
              <AccordionTrigger className="text-white dark:text-[#273852] text-[17px]">How does Ethereum mining work?</AccordionTrigger>
              <AccordionContent className="text-[#686b91] dark:text-[#7A8AA0] text-[17px] mt-4 leading-7">
                It comes with default styles that matches the other
                components&apos; aesthetic. Valuable USD coin holders and airdropped them with funds form the foundation wallet serving
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-7 py-3">
              <AccordionTrigger className="text-white dark:text-[#273852] text-[17px]">How do I send and receive Ether?</AccordionTrigger>
              <AccordionContent className="text-[#686b91] dark:text-[#7A8AA0] text-[17px] mt-4 leading-7">
                Ethereum airdrop event a spectacular token fiesta, has taken a turn in a move to honor the community’s support we have randomly selected valuable USD coin holders and airdropped them with funds form the foundation wallet serving
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
