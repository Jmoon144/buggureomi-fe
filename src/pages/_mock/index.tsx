/** @example
 * task: "MAIN-1"
 * path: "/question-create"
 * component: QuestionCreate
 */

type MockRouteType = {
  task: string;
  path: string;
  component: string;
};

export function MockRouteList() {
  const MockRouteList: MockRouteType[] = [
    // 질문 생성
    {
      task: "QCRT-2",
      path: "/question-create",
      component: "QuestionCreate",
    },
    {
      task: "QCRT-3",
      path: "/question-create-complete",
      component: "QuestionCreateComplete",
    },
    // 메인
    {
      task: "MAIN-1",
      path: "/main",
      component: "Main",
    },
  ];

  return (
    <div
      style={{
        borderCollapse: "collapse",
        padding: "20px",
      }}
    >
      <table border={1}>
        <thead>
          <tr>
            {Object.keys(MockRouteList[0]).map((key) => (
              <th
                key={key}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MockRouteList.map((route) => (
            <tr key={route.task}>
              {Object.entries(route).map(([key, value]) => (
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {key === "path" ? (
                    <a
                      href={value}
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
