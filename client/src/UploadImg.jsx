import { useState } from "react";
import { Header } from "./Header";

export function UploadImg({ setGroceries }) {
  const [file, setFile] = useState(null);
  const handleFileChange = function (e) {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      if (!file) {
        alert("Please select an image to upload.");
        return;
      }

      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload successful", data);
      const new_groceries = {
// todo
      }
      setGroceries((oldGroceries) => [...oldGroceries, ...new_groceries]);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <div>
      <Header>New Groceries !</Header>
      <div>Upload an Image</div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
