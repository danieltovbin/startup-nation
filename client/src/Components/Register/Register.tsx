import { useEffect, useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");

  useEffect(() => {}, [matchPassword]);

  return (
    <div>
      <form action="">
        <input
          type="text"
          onChange={(ev: any) => {
            setFullName(ev.target.value);
          }}
          name="fullName"
          id=""
        />
        <input
          type="email"
          onChange={(ev: any) => {
            setEmail(ev.target.value);
          }}
          name="email"
          id=""
        />
        <input
          type="password"
          onChange={(ev: any) => {
            setPassword(ev.target.value);
          }}
          name="password"
          id=""
        />
        <input
          type="password"
          onChange={(ev: any) => {
            setMatchPassword(ev.target.value);
          }}
          name="password"
          id=""
        />
      </form>
    </div>
  );
};

export default Register;
