import "./App.css";

let name = "Shreya";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          porro labore molestiae eligendi neque illo impedit sapiente in non?
          Quaerat vel itaque voluptatem similique cupiditate ipsam reiciendis
          culpa praesentium inventore accusamus, voluptate ad nisi.
        </p>
      </div>
    </>
  );
}

export default App;
