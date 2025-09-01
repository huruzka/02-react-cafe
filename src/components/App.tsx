import css from "../styles/App.module.css";
import CafeInfo from "./CafeInfo";


const App = () => {
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
};

export default App;
