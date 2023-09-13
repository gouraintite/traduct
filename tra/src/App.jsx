import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Router />
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;