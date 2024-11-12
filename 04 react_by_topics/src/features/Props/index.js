const Props = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Props;

const Header = () => {
  const data = {
    unreadNotifications: 15,
    cartItems: 10,
    user: {
      name: "ajay",
    },
  };
  return (
    <div className="header">
      <h1>Logo</h1>
      <input type="text" />
      <Notifications count={data.unreadNotifications} />
      <Cart totalItems={data.cartItems} />
      <User user={data.user} />
    </div>
  );
};

const Notifications = (props) => {
  return <div>Notifications- {props.count}</div>;
};

const Cart = (props) => {
  return <div>Cart items- {props.totalItems}</div>;
};

const User = (props) => {
  return <div>UserName - {props.user.name}</div>;
};
