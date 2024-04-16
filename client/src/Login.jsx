import { useState } from "react";
import { Header } from "./Header";

export function Login({setIsSubmitted }) {
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
      <div>
        <Header>Sign In</Header>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username </label>
              <input
                type="text"
                name="uname"
                placeholder="aditya"
                defaultValue={"aditya"}
                required
              />
              {renderErrorMessage("uname")}
            </div>
            <div>
              <label>Password </label>
              <input
                type="password"
                name="pass"
                placeholder="jindal"
                defaultValue={"jindal"}
                required
              />
              {renderErrorMessage("pass")}
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
  );
}
