import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import Section from "../Section";
import "./ExamplesDesc.css";

export default function ExamplesDesc() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <img
            id="examples-img"
            src={EXAMPLES[selectedTopic].image}
            alt={EXAMPLES[selectedTopic].title}
          />
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    // selectedButton => 'components' , 'jsx' , 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title={"Examples"} id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "breeds"}
          onClick={() => handleSelect("breeds")}
        >
          Breeds
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "diet"}
          onClick={() => handleSelect("diet")}
        >
          Diet
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "behavior"}
          onClick={() => handleSelect("behavior")}
        >
          Behavior
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "care"}
          onClick={() => handleSelect("care")}
        >
          Care
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
