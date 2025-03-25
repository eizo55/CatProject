import { FELINE_FUNDAMENTALS } from "../../data.js";
import Card from "./Card.jsx";
import Section from "../Section.jsx";

export default function CardsBox() {
  return (
    <Section title={"Feline Fundamentals"} id="feline-fundamentals">
      <ul>
        {FELINE_FUNDAMENTALS.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
