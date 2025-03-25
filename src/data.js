import cats from "./assets/cats.png";
import catSleeping from "./assets/catSleeping.png";
import catEating from "./assets/catEating.png";
import nuggetCat from "./assets/nuggetCat.png";
import cat from "./assets/cat.png";
import catFood from "./assets/catFood.png";
import donutCat from "./assets/donutCat.png";
import catBed from "./assets/catBed.png";

export const FELINE_FUNDAMENTALS = [
  {
    image: cat,
    title: "Breeds",
    description:
      "From the sassy Siamese to the lazy British Shorthair—each breed has its quirks.",
  },
  {
    image: catFood,
    title: "Culinary Choices",
    description:
      "Cats are obligate carnivores, meaning they thrive on protein-packed diets!",
  },
  {
    image: donutCat,
    title: "Mysterious",
    description:
      "Why do they knock things off tables? The world may never know, but science has clues.",
  },
  {
    image: catBed,
    title: "Cat Care",
    description:
      "A comfy bed, a clean litter box, and regular head scratches—simple, yet vital.",
  },
];

export const EXAMPLES = {
  breeds: {
    title: "Breeds",
    description:
      "Cats come in various breeds, each with unique traits and personalities. Some, like the Siamese, are vocal and energetic, while others, like the British Shorthair, enjoy a quiet and relaxed lifestyle. Understanding a cat's breed can help owners cater to their specific needs and behaviors.",
    image: cats,
  },
  diet: {
    title: "Culinary Choices",
    description:
      "Cats are obligate carnivores, meaning their diet should be rich in protein to stay healthy and active. A well-balanced diet includes high-quality meats, essential nutrients, and occasional treats. Proper nutrition helps maintain a cat’s shiny coat, strong muscles, and playful energy.",
    image: catEating,
  },
  behavior: {
    title: "Feline Mysteries",
    description:
      "Cats have a fascinating range of behaviors—kneading soft surfaces, purring when content, and sometimes knocking things over just for fun. They use body language and vocalizations to communicate with humans and other animals. Understanding their signals can help strengthen the bond between a cat and its owner.",
    image: nuggetCat,
  },
  care: {
    title: "Cat Care Essentials",
    description:
      "Caring for a cat goes beyond food and water. Regular grooming prevents matting, clean litter boxes ensure hygiene, and providing cozy sleeping spots keeps them comfortable. Playtime is also crucial for their mental and physical health, keeping them engaged and happy.",
    image: catSleeping,
  },
};
