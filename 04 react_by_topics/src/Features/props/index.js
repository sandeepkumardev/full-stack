const Props = ()=>{
    return(
        <div>
            <Header/>
        </div>
    )
};

const Header=()=>{
    const data={
        unreadNotification:15,
        cartItems:5,
        user:{name:"Ayush" }
    };
    return(
        <div className="Header">
        <h1 >Logo</h1>
        <input type="text"></input>
        <Notification count={data.unreadNotification} />
        <Cart item={data.cartItems}  />
        <User  names={data.user} />
        </div>

    )

;}
const Notification=(props)=>{
    console.log(props);
    return <div>Notification -{props.count} </div>
}
const Cart=(props)=>{
    console.log(props);
    return <div>Cart Items  -{props.item} </div>
}
const User=(props)=>{
    console.log(props);
    return <div>Username -{props.names.name} </div>
}

export default Props;