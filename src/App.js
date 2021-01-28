import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-800 text-center text-white flex flex-col justify-center align-center h-force-full">
      <header>
        <p>
          This is a <code>Firebase, Tailwind, React</code> starter app.
        </p>
        <a
          className="text-blue-400"
          href="https://github.com/Lynxgsm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Twitter
        </a>
      </header>
      <HomePage></HomePage>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
