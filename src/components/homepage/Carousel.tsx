"use client";
import { Carousel, Card } from "../../components/homepage/ui/apple-cards-carousel";
import img from "../../assets/images/homepage/img1.jpg";
import forklift from "../../assets/images/homepage/forklift.jpg";
import Dwg from "../../assets/images/homepage/Dwg.jpg"
import Motherson_Translate from "../../assets/images/homepage/Motherson_Translate.jpg"
import Glove from "../../assets/images/homepage/Glove.jpg"
import M_Translate from "../../assets/images/homepage/M translate.jpg"
import DummyContent from "./Projects/DummyContent";
import DrawingComparison from "./Projects/DrawingComparison";
import InvoiceInformationRetrieval from "./Projects/InvoiceInformationRetrieval";
import MNA from "./Projects/M&A";
import FinancialBot from "./Projects/FinancialBot";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full pt-8 pb-20 bg-black flex flex-col items-center text-center">
  <h2 className="text-xl md:text-5xl font-poppins font-light text-white">
    AI Agents
  </h2>
  <Carousel items={cards} />
</div>

  );
}


const data = [
  {
    category: "",
    title: "SmartExtract",
    src: forklift, // Direct reference to imported image
    content: <InvoiceInformationRetrieval />,
  },
  {
    category: "",
    title: "FinAIlytics",
    src: Dwg, // Direct reference to imported image
    content: <FinancialBot/>,
  },
  {
    category: "",
    title: "ClauseLens AI",
    src: Motherson_Translate, // Direct reference to imported image
    content: <MNA />,
  },
  {
    category: "",
    title: "SketchVision Agent",
    src: Glove, // Direct reference to imported image
    content: <DrawingComparison/>,
  },
  {
    category: "",
    title: "M Translate",
    src: M_Translate, // Direct reference to imported image
    content: <DummyContent />,
  },
];
