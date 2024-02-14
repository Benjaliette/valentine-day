import { SpongeBob } from "../UI";
import Party from "../UI/Gifs/Party";
import "./Header.scss";

const Header = ({ question = true}: any) => {
  return (
    <header className="prose header">
      {question && (
        <>
          <SpongeBob />
          <h1>Veux tu être ma valentine ?</h1>
        </>
      )}
      {!question && (
        <>
          <Party />
          <h1>Let's goooooo</h1>
        </>
      )}
    </header>
  );
};

export default Header;
