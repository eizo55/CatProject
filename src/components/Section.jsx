import "./ExamplesDesc/ExamplesDesc.css";

export default function ({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
