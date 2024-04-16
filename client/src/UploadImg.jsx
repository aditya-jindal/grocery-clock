import { useState } from "react";
import { Header } from "./Header";

export function UploadImg({ setGroceries }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select an image to upload.");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch("http://192.168.134.95:8000/imgr/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Upload successful", data);
      setGroceries((oldGroceries) => [...oldGroceries, ...data]);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <div>
      <Header>New Groceries !</Header>
      <div>Upload an Image</div>

      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>
    </div>
  );
}
