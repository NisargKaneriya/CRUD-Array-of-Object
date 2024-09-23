import React, { useState } from 'react';

const Display = () => {
  const [student, setStudent] = useState([]);
  const [data, setData] = useState({ Name: "", Batch: "", Sem: "" });
  const [index, setIndex] = useState("");

  // Mapping through student array
  const displayStudent = student.map((s, idx) => (
    <tr key={idx}>
      <td style={{border:"solid 2px black"}}>{s.Name}</td>
      <td style={{border:"solid 2px black"}}>{s.Batch}</td>
      <td style={{border:"solid 2px black"}}>{s.Sem}</td>
      <td style={{border:"solid 2px black"}}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={() => {
            setData(s);
            setIndex(idx);
            document.getElementById('addedit').innerHTML = "edit";
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={(e) => {
            e.preventDefault();

            student.splice(idx,1);
            setStudent([...student]);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="actionbtn">
        <div style={{ margin: "10px" }}>
          <h3>Name:</h3>
          <input
            type="text"
            value={data.Name}
            onChange={(e) => {
              setData({ ...data, Name: e.target.value });
            }}
          />
        </div>

        <div style={{ margin: "10px" }}>
          <h3>Batch:</h3>
          <input
            type="text"
            value={data.Batch}
            onChange={(e) => {
              setData({ ...data, Batch: e.target.value });
            }}
          />
        </div>

        <div style={{ margin: "10px" }}>
          <h3>Sem:</h3>
          <input
            type="text"
            value={data.Sem}
            onChange={(e) => {
              setData({ ...data, Sem: e.target.value });
            }}
          />
        </div>

        <div className="actionbtn" style={{ margin: "10px" }}>
          <button
            id="addedit"
            onClick={(e) => {
              e.preventDefault();

              if (document.getElementById('addedit').innerHTML === "add") {
                setStudent([...student,data]);
                setData({ Name: "", Batch: "", Sem: "" });

              } else {
                student[index] = data;
                setStudent([...student]);
                setData({ Name: "", Batch: "", Sem: "" });
                document.getElementById('addedit').innerHTML = "add";
              }
            }}
          >
            add
          </button>
        </div>
      </div>

      <table style={{margin: "10px"}}>
        <thead>
          <tr >
            <th style={{border:"solid 2px black"}}>Name</th>
            <th style={{border:"solid 2px black"}}>Batch</th>
            <th style={{border:"solid 2px black"}}>Sem</th>
            <th style={{border:"solid 2px black"}}>Actions</th>
          </tr>
        </thead>
        <tbody>{displayStudent}</tbody>
      </table>
    </>
  );
};

export default Display;
