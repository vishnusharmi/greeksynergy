// import React, { useState } from "react";

// function Login({ onLogin }) {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };

//   const handleLogin = () => {
//     // Retrieve user data from local storage
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (
//       storedUser &&
//       storedUser.name === credentials.name &&
//       storedUser.password === credentials.password
//     ) {
//       onLogin();
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={credentials.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <button type="button" onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });
  console.log(credentials);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.name === credentials.name &&
      storedUser.password === credentials.password
    ) {
      onLogin();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <center>
        <h2>Login</h2>
      </center>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
