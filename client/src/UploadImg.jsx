import { useState } from "react";
import { Header } from "./Header";

export function UploadImg() {
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
      formData.append("name", "Avanish");
      formData.append("image", selectedFile);

      // Replace 'YOUR_DJANGO_API_ENDPOINT' with the actual URL of your Django API endpoint
      const response = await fetch(
        "http://192.168.134.95:8000/imgr/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful", response.data);
      // Optionally, you can reset the selected file after successful upload
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
