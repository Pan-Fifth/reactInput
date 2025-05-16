import { useState } from 'react';


const Form = () => {
  const [output, setOutput] = useState({
    name: "",
    gender: "",
    birth: "",
    color: [],
  });
  const [submittedOutput, setSubmittedOutput] = useState(null);
  const [error, setError] = useState("");
  const hdlChange = (e) => {
    if (e.target.name === "color") {
      setOutput((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked
          ? [...(prev[e.target.name] || []), e.target.value]
          : (prev[e.target.name] || []).filter((el) => el !== e.target.value),
      }));
    } else {
      setOutput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const hdlOnClick = () => {
    if (!output.name || !output.gender || !output.birth) {
      setError("Please fill in all fields.");
      return;
    }
    if (output.color.length === 0) {
      setError("Please select at least one favorite color.");
      return;
    }
    setError("");
    setSubmittedOutput(output);
  };

  const hdlClear = () => {
    setOutput({ name: "", gender: "", birth: "", color: [] });
    setSubmittedOutput(null);
    setError("");
  };



  console.log("output", output)
  return (
    <div className="container">
      <div className="input" >
        <p >Name:</p>
        <input
          style={{ width: "400px" }}
          name="name"
          type="text"
          value={output.name}
          onChange={(e) => hdlChange(e)}
        />
      </div>

      <div className="input" >
        <p >Gender:</p>
        <input
          type="radio"
          name="gender"
          value='male'
          checked={output.gender === "male"}
          onChange={(e) => hdlChange(e)}
        />
        <label for='gender'>Male</label>
        <input
          type="radio"
          name="gender"
          value='Female'
          checked={output.gender === "Female"}
          onChange={(e) => hdlChange(e)}
        />
        <label for='gender'>Female</label>
      </div>

      <div className="input" >
        <p >Birthday:</p>
        <input
          type="date"
          name="birth"
          value={output.birth}
          onChange={(e) => hdlChange(e)}
          style={{
            padding: "8px 12px",
            border: "1px solid #CBD5E0",
            borderRadius: "8px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            color: "#2D3748",
            backgroundColor: "#F7FAFC",
            outline: "none",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#3182CE";
            e.target.style.boxShadow = "0 0 0 2px rgba(49, 130, 206, 0.6)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#CBD5E0";
            e.target.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.1)";
          }}
        />
      </div>

      <div className="input" >
        <p >Favorite Color:</p>
        <input
          type="checkBox"
          name="color"
          value='red'
          checked={output.color.includes("red")}
          onChange={(e) => hdlChange(e)}
        />
        <label for='color'>Red</label>
        <input
          type="checkBox"
          name="color"
          value='green'
          checked={output.color.includes("green")}
          onChange={(e) => hdlChange(e)}
        />
        <label for='color'>Green</label>

        <input
          type="checkBox"
          name="color"
          value='yellow'
          checked={output.color.includes("yellow")}
          onChange={(e) => hdlChange(e)}
        />
        <label for='color'>Yellow</label>
        <input
          type="checkBox"
          name="color"
          value='blue'
          checked={output.color.includes("blue")}
          onChange={(e) => hdlChange(e)}
        />
        <label for='color'>Blue</label>
      </div>

      <button className='button' onClick={hdlOnClick}>Submit</button>
      <button className='button' onClick={hdlClear} >Clear</button>
      <hr />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedOutput && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedOutput.name}</p>
          <p>Gender: {submittedOutput.gender}</p>
          <p>Birthday: {submittedOutput.birth}</p>
          <p>Favorite Colors: {submittedOutput.color.join(", ")}</p>
        </div>
      )}
    </div>
  )
}
export default Form