import "./styles.css";

const jsonData : any = {
  origin: "125.178.68.224",
  json: {
    address: {
      city: "Gwenborough",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      },
      street: "Kulas Light",
      suite: "Apt. 556",
      zipcode: "92998-3874"
    },
    company: {
      tagline: "harness real-time e-markets",
      catchPhrase: "Multi-layered client-server neural-net",
      name: "Romaguera-Crona"
    },
    email: "Sincere@april.biz",
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    username: "Bret",
    website: "hildegard.org"
  },
  url: "http://httpbin.org/post?format=json&username=Bret"
};

function renderTableData(data : any, tableName = "") {
  const nonObjectEntries : any = [];
  const objectEntries : any = [];

  // Separate entries into non-object and object categories
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      objectEntries.push([key, value]);
    } else {
      nonObjectEntries.push([key, value]);
    }
  });

  return (
    <div className="table-container" key={tableName}>
      <h2>{tableName}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {nonObjectEntries.map(([key, value] : any) => (
            <tr key={key}>
              <td> <div className="break-all">{key}</div></td>
              <td> <div className="break-all">{value}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
      {objectEntries.map(([key, value] : any) => (
        <div key={key}>{renderTableData(value, key.toUpperCase())}</div>
      ))}
    </div>
  );
}

function QuestionTwo() {
  return (
    <div className="App">
      <h1>User Data</h1>
      {renderTableData(jsonData, "Table data")}
    </div>
  );
}

export default QuestionTwo;
