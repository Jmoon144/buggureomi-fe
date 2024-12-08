import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import QuestionCreate from "./question-create/index";
import Main from "./main";
import { MockRouteList } from "./_mock";
import QuestionCreateComplete from "./question-create-complete";

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route 확인용 (작업 시 꼭 추가 부탁드립니다!!) */}
        <Route exact path="/" render={() => <MockRouteList />} />
        <Route exact path={"/main"} render={() => <Main />} />
        <Route
          exact
          path="/question-create"
          render={() => <QuestionCreate />}
        />
        <Route
          exact
          path="/question-create-complete"
          render={() => <QuestionCreateComplete />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
