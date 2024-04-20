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
      setLoading(false);
      console.error("Error uploading image", error);
    }
  };
  return (
    <div className="flex flex-col items-center w-4/6">
      <Header>New Groceries !</Header>
      <h2 className="text-2xl font-semibold mt-[-1rem] mb-20">
        Upload an Image 📲
      </h2>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-y-4 w-3/6"
      >
        <div className="flex gap-x-6">
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept=".png, .jpg, .jpeg"
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-center text-white font-semibold px-8 py-2 rounded-lg text-xl cursor-pointer"
          >
            Choose File
          </label>
          {file && <p className="mt-2 text-sm text-gray-500">{file.name}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-center text-white font-semibold px-8 py-2 rounded-lg text-xl"
        >
          Upload
        </button>
      </form>
      {!error && loading && <Loader />}
      {error && (
        <p className="mt-8 text-xl">
          Failed to add groceries to the fridge 😢!
        </p>
      )}
      {!error && success && (
        <p className="mt-8 text-xl">
          New groceries added successfully to the fridge 😋!
        </p>
      )}
    </div>
  );
}
