import { Header } from "./Header";
import { List } from "./List/index";
import { skills, toLearn } from "./List/content";  

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
    </>
  );
}

export default App;

