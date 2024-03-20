import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
   return (
      <div className="max-w-7xl mx-auto px-8">
         <HoverEffect items={projects} />
      </div>
   );
}
export const projects = [
   {
      title: "Education",
      description:
         "Cultivating inquisitive minds by fostering a love of learning. Equipping individuals with the knowledge, skills, and critical thinking necessary to thrive in a dynamic world.",
      link: "https://stripe.com",
   },
   {
      title: "Retail and Consumer",
      description:
         "Bridging the gap between products and the people who need or desire them.  This sector encompasses the entire buying journey, from product development and marketing to in-store experiences and online shopping.",
      link: "https://netflix.com",
   },
   {
      title: "Travel and Tousrism",
      description:
         "Unlocking the world's wonders and fostering cultural exchange. This industry caters to the desire for exploration and adventure, offering experiences that create lasting memories.",
      link: "https://google.com",
   },
   {
      title: "Transportation",
      description:
         "The lifeblood of the global economy, ensuring the seamless movement of people and goods. This includes various modes of transport like air, sea, and land.",
      link: "https://meta.com",
   },
   {
      title: "Engineering",
      description:
         "Transforming ideas into tangible products. Engineers design and solve problems, while manufacturers bring those designs to life through production processes.",
      link: "https://amazon.com",
   },
   {
      title: "Technology",
      description:
         "Fueling innovation and driving progress through digital solutions. This sector encompasses a wide range of fields, from software development and artificial intelligence to cybersecurity and networking.",
      link: "https://microsoft.com",
   },
   {
      title: "Heatlhcare",
      description:
         "A commitment to promoting well-being and treating illness. This field encompasses a vast network of professionals and institutions dedicated to preventative care, diagnosis, and treatment.",
      link: "https://microsoft.com",
   },
   {
      title: "Finance and Banking",
      description:
         "Guiding individuals and businesses towards financial security. This sector offers a range of services, including managing money, saving for the future, securing loans, and investing in various assets.",
      link: "https://microsoft.com",
   },
];
