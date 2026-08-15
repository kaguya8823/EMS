
const Login = () => {
  return (
    <div>
      <h2>Employee Management System</h2>
      <form>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
