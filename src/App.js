import { Header } from "./Header/index";
import { List } from "./List/index";
import { skills, toLearn } from "./List/content";  
import { Portfolio } from "./Portfolio/index"

function App() {
  return (
    <>
      <Header />
      <List
        title={"My skillset includes 🛠️"}
        content={skills}
      />
      <List
        title={"What I want to learn next 🚀"}
        content={toLearn}
      />
      <Portfolio/>
    </>
  );
}

export default App;

