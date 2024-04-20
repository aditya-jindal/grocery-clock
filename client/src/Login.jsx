import { useState } from "react";
import { Header } from "./Header";

export function Login({ setIsSubmitted }) {
  const [errorMessages, setErrorMessages] = useState({});
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "aditya",
      password: "jindal",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div>{errorMessages.message}</div>;

  return (
    <div className="flex flex-col items-center">
      <Header>Hey There, Welcome 👋!</Header>
      <h1 className="text-3xl mb-4 font-semibold mt-[-1.3rem] capitalize">
        Sign in to get started
      </h1>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="uname"
              placeholder="username"
              // defaultValue={"aditya"}
              required
            />
            {renderErrorMessage("uname")}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="pass"
              type="password"
              placeholder="password"
              required
            />
            {renderErrorMessage("password")}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
