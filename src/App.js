import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setInterval(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#1f1f1f";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode has been enable", "success");
    }
  };
  return (
    <>
      <Navbar title="DevKaApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter your Text Here"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
