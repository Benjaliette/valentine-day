import { Button, MovingButton } from "../UI";
import "./Main.scss";
import Gift from "../Gift/Gift";

const Main = ({ question = true, onClick}: any) => {
  return (
    <main className="main">
      {question && (
        <>
          <Button onClick={onClick} />
          <MovingButton />
        </>
      )}
      {!question && (
        <Gift />
      )}
    </main>
  );
};

export default Main;
