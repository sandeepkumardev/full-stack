const Props = () => {
    return(
        <div>
            <Header />
        </div>
    )
}
const Header = () => {
    const data = {
        unreadNotifications: 15,
        CartItem: 5,
        user: {
            name: "j4umme",
        }
    }
    return (
        <div className="header">
            <h1>Logo</h1>
            <input type="text" />
            <Notifications count={data.unreadNotifications} />
        <Cart totalItems={data.CartItems}/>
        <User user={data.user.name} />
            <div>cart item -05</div>

        </div>
    )
}
const Notifications = (props) => {
    console.log(props);
    return <div>Notifications - {props.count}</div>
}
const Cart = (props) => {
    return<div>Cart item - {props.totalItems} </div>}
    const User =(props) => {
        return <div>User name - {props.user}</div>
    }




export default Props;



// function sum(a,b) {
    // return a + b;
// }

// sum(2,3);

