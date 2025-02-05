import { Row, Col } from "antd";
import BackgroundImage from "../../assets/images/homepage/bg.jpg";
import cv from "../../assets/images/homepage/cv.jpg";
import nlp from "../../assets/images/homepage/nlp.jpg";
import iot from "../../assets/images/homepage/iot.jpg";

const Card = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Header Image */}
      <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transform transition-transform duration-300 hover:scale-110">
        <img src={image} alt={title} className="w-full h-full object-cover " />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h5 className="mb-3 text-xl font-semibold text-blue-gray-900">{title}</h5>
        <p className="text-base font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Whatwedo = () => {
  const cardData = [
    {
      image: nlp,
      title: "NLP & Gen AI",
      description: "Explore the world of Natural Language Processing and Generative AI. Dive into how AI can understand, generate, and interact with human language in various applications, from chatbots to advanced language models.",
    },
    {
      image: cv,
      title: "Computer Vision",
      description: "Discover the capabilities of Computer Vision. Learn how machines can interpret and understand visual data, enabling applications like facial recognition, object detection, and autonomous vehicles.",
    },
    {
      image: iot,
      title: "Internet of Things (IoT)",
      description: "The Internet of Things connects devices to the internet, enabling smarter decision-making. Learn how IoT is transforming industries by enabling automation, remote monitoring, and real-time data analytics.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light text-white font-poppins mb-12">
          Our Capabilities
        </h2>

        {/* Ant Design Grid System with spacing */}
        <Row gutter={[32, 32]} justify="center">
          {cardData.map((card, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card image={card.image} title={card.title} description={card.description} />
            </Col>
          ))}
        </Row>

        <div className="container mx-auto px-6 text-center font-poppins">
          {/* Company Name */}
          <div className="">
            <h3 className="text-lg font-semibold">Motherson Technology Services Limited</h3>
          </div>

  
          {/* Copyright */}
          <div className="text-sm font-light">
            <p>&copy; {new Date().getFullYear()} MTSL. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
