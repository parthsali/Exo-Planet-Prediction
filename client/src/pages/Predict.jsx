import React, { useState } from "react";
import axios from "axios";
import readExcelFile from "./ExcelReader";

import "./Predict.css";

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [output, setOutput] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (
      (selectedFile &&
        selectedFile.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "application/vnd.ms-excel.sheet.binary.macroenabled.12",
      //csv file
      "text/csv")
    ) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid Excel file (xlsx format).");
    }
  };

  const downloadCSVFromArray = (dataArray) => {
    const csvContent = `data:text/csv;charset=utf-8,${dataArray.join(",")}`;
    const encodedUri = encodeURI(csvContent);

    // Create a link element and click it to trigger the download
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "output.csv";
    link.click();
  };

  const handleSubmit = async () => {
    if (file) {
      try {
        // Read the file
        const excelData = await readExcelFile(file);
        console.log("data sent");

        const response = await fetch("http://localhost:5000/api/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(excelData),
        });

        const responseData = await response.json();

        if (responseData) {
          console.log(responseData);
          setOutput(responseData);
        }
      } catch (error) {
        console.error("Error submitting file:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <header>
          <h1>Exoplanet Prediction</h1>
        </header>
      </div>
      <div className="div">
        <h2>Upload Excel File</h2>
        <input
          type="file"
          accept=".csv, .xls, .xlsx"
          onChange={handleFileChange}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button onClick={handleSubmit} disabled={!file}>
          Submit
        </button>
      </div>
      {output && (
        <div className="output">
          <h2>Output</h2>

          <button onClick={downloadCSVFromArray(output)}>
            Download CSV File
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
