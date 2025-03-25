import "./Header.css";
const words = ["All what", "Everything", "Funny things", "Amazing Things"];

const geRandomWord = (max) => {
  return Math.floor(Math.random() * max + 1);
};

export default function Header() {
  let randomWord = words[geRandomWord(3)];

  return (
    <header>
      <h1>The Cat Chronicles 🐱</h1>
      <p>
        {randomWord} you need to know about our mysterious, fluffy overlords!
      </p>
    </header>
  );
}
