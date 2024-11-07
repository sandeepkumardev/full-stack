const Map = () => {

const data = [
    { 
    title: "flowers",
    price: "234",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxspqeaYvk2ay2J7mK4T4vt_XEXWKBx-QEA&s"
},
{ 
    title: "flowers",
    price: "234",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxspqeaYvk2ay2J7mK4T4vt_XEXWKBx-QEA&s"

},
{ 
    title: "flowers",
    price: "234",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxspqeaYvk2ay2J7mK4T4vt_XEXWKBx-QEA&s"

},
{ 
    title: "flowers",
    price: "234",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxspqeaYvk2ay2J7mK4T4vt_XEXWKBx-QEA&s"

}
];


    return <div className="card">
        <h1>continue shopping for</h1>
        <div className="itemcards">
    {data.map((item,index) => (
        <Itemcard key={index} item={item} />

     ))}

      </div>
        <button>see more</button>

    </div>
}

const Itemcard =(props) => {
    return(
        <div className="itemcard">
            <img src={props.item.image} alt="" width={100} />
            <p>{props.item.title}</p>
            <p>$ {props.item.price} </p>
        </div>
    )
}




export default Map;