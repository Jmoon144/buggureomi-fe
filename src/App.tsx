import RootLayout from "@/components/RootLayout";
import Main from "./pages/main";
// import QuestionCreate from "./pages/question-create";

function App() {
  return (
    <>
      {/* TODO: 추후 Route 작업 필요 */}
      {/* <QuestionCreate /> */}
      <RootLayout>
        <Main />
      </RootLayout>
    </>
  );
}

export default App;
