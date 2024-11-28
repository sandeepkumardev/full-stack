import { useContext } from "react";
import Header from "../components/Header";
import { authContext } from "../store/authContext";

const Dashboard = () => {
  const { user } = useContext(authContext);

  console.log(user);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
