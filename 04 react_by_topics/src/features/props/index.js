const Props = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  const data = {
    unreadNotifications: 15,
    cartItems: 5,
    user: {
      name: "sandeep",
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
  return <div>Notifications - {props.count}</div>;
};

const Cart = (props) => {
  return <div>Cart items - {props.totalItems}</div>;
};

const User = (props) => {
  return <div>User name - {props.user.name}</div>;
};

export default Props;
