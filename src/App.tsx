import { useEffect, useState } from "react";
import { getAll } from "./API";

function App() {
  const [headerData, setHeaderData] = useState<string[]>([]);
  const [bodyData, setBodyData] = useState<Array<string[]>>([]);

  useEffect(() => {
    getAll().then((values) => {
      setHeaderData(Object.keys(values[0]));

      setBodyData(
        values.map((value) => {
          return Object.values(value);
        })
      );
    });
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {headerData.map((headerValue, ind) => {
              return <th key={ind}>{headerValue}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((bodyD, ind) => {
            return (
              <tr key={ind}>
                {bodyD.map((b, ind) => (
                  <td key={ind}>{b.toString()}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
