import React from 'react';
// import PropTypes from 'prop-types';
import './Search.css';

export default function Search() {
  return(
    <h2>Search</h2>
  );
}

// async function loginUser(credentials) {
//  return fetch('http://localhost:8080/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     console.log("this is handling the submit ")
//     e.preventDefault();
//     const token = await loginUser({
//       email,
//       password
//     });
//     setToken(token);
//     console.log("this is after  ")
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Email</p>
//           <input type="text" onChange={e => setEmail(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };
