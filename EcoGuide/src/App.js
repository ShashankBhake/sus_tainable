import React, { useState } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Paper from "@mui/material/Paper"; // Import Paper component from MUI
import "./App.css";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [outputMarkdown, setOutputMarkdown] = useState("");
    var chk = false;

    const handleSubmit = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5005/getOpenAIResponse?query=${
                    "give some sustainable practices that can be implemented in developing the project by reading the description below:" +
                    inputText +
                    "write the whole response only in markdown code, just send the code."
                }`
            );
            console.log("got: ", response.data);
            chk = true;
            setOutputMarkdown(response.data);
        } catch (error) {
            console.error("Error sending request:", error);
        }
    };

    return (
        <div className="container">
            <div className="takeInput">
                <label>
                    <input
                        type="text"
                        value={inputText}
                        placeholder=" Describe your project.."
                        onChange={(e) => setInputText(e.target.value)}
                        className="input"
                    />
                </label>
                <button onClick={handleSubmit} className="submit-button">
                    Submit
                </button>
            </div>
            <div className="content-border">
                {/* Render Markdown inside the Paper component */}
                <Paper elevation={3} className="paper">
                    <Markdown remarkPlugins={[remarkGfm]}>
                        {outputMarkdown}
                    </Markdown>
                    {/* {outputMarkdown} */}
                </Paper>
            </div>
        </div>
    );
};

createRoot(document.body).render(<App />);
export default App;
