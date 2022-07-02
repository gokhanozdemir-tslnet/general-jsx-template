import LanguageHelper from "../../utils/reducer/helpers/lang/LanguageManager";

const Home = () => {

  return (
    <div>
      Home Page
      {LanguageHelper("HOME")}
    </div>
  );
};

export default Home;
