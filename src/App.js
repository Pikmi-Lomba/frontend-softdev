import "./App.css";
import "./assets/style/DetailTopBar.scss";
import "./assets/style/DetailMenuPhoto.scss";
import "./assets/style/SliderCard.scss";

import AsuPage from "./components/contoh/asu";
import ExamSlider from "./components/contoh/slider";

import Routing from "./router/Routing";

function App() {
  return (
    <>
      <Routing />
      {/* <AsuPage /> */}
      {/* <ExamSlider /> */}
    </>
  );
}

export default App;
