import { useState } from "react";
import { Header } from "./Header";
import Loader from "./Loader";

export function UploadImg({ setGroceries }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleFileChange = function (e) {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const formData = new FormData();
    formData.append("file", file);
    try {
      if (!file) {
        alert("Please select an image to upload.");
        return;
      }
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });
      console.log("response");
      console.log(response);
      const data = await response.json();
      console.log("data");
      console.log(data);
      const dataArray = JSON.parse(data);
      const newGroceries = dataArray.map((grocery) => ({
        name: grocery.name,
        shelfLife: Number(grocery.shelfLife),
        purchaseDate: new Date().getTime(),
        expiryDate: function () {
          const newDate = new Date(this.purchaseDate);
          newDate.setDate(newDate.getDate() + this.shelfLife);
          return newDate.getTime();
        },
      }));
      setGroceries((oldGroceries) => [...oldGroceries, ...newGroceries]);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setError(true);
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
        <button type="submit" disabled={loading}>
          Upload
        </button>
      </form>
      {loading && <Loader />}
      {error && <p>Failed to add groceries to the fridge 😢!</p>}
      {!error && success && (
        <p>New groceries added successfully to the fridge 😋!</p>
      )}
    </div>
  );
}
