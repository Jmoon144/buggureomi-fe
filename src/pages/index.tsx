import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { MockRouteList } from "./_mock";

import Main from "./main";

import MemberJoin from "./member-join";
import MemberLogin from "./member-login";

import QuestionCreate from "./question-create";
import QuestionCreateDetail from "./question-create-detail";
import QuestionCreateComplete from "./question-create-complete";

import AnswerCreate from "./answer-create";
import AnswerResult from "./answer-result";
import SelfReflection from "./self-reflection";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Route 확인용 (작업 시 꼭 추가 부탁드립니다!!) */}
          <Route exact path="/" render={() => <MockRouteList />} />

          <Route exact path="/main" render={() => <Main />} />

          <Route exact path="/member-join" render={() => <MemberJoin />} />
          <Route exact path="/member-login" render={() => <MemberLogin />} />

          <Route
            exact
            path="/question-create"
            render={() => <QuestionCreate />}
          />
          <Route
            exact
            path="/question-create-detail"
            render={() => <QuestionCreateDetail />}
          />
          <Route
            exact
            path="/question-create-complete"
            render={() => <QuestionCreateComplete />}
          />

          <Route
            exact
            path="/self-reflection"
            render={() => <SelfReflection />}
          />

          <Route exact path="/answer-create" render={() => <AnswerCreate />} />
          <Route exact path="/answer-result" render={() => <AnswerResult />} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
