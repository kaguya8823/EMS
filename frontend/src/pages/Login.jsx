import React from "react";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post("http://localhost:3001/api/auth/login", {
            email,
            password
        });
        console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  return (
    <div 
      className="flex flex-col items-center h-screen justify-center
      bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6"
      >
        <h2 className="font-pacifico text-3xl text-white" id="title">
          Employee Management System
        </h2>
        <div className="border shadow p-6 w-80 bg-white">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
             type="email"
             id="email"
             placeholder="Enter Email"
             className="w-full px-3 py-2 border"
             onChange={(e) => setEmail(e.target.value)}
             />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
             type="password"
             id="password"
             placeholder="Enter Password"
             className="w-full px-3 py-2 border"
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-teal-600">
              Forgot password?
            </a>
          </div>
          <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2"
          >
            Login
          </button>
        </div>
        </form>
        </div>
      </div>
  );
};

export default Login;
