const Map = () => {
  const data = [
    {
      title: "Samsung 653 L, 3 Star",
      price: "99",
      image: "https://m.media-amazon.com/images/I/61hEEWSj-cL._AC_SY95_AIweblab1084404%2CT1_.jpg",
    },
    {
      title: "Samsung 654 L, 3 Star",
      price: "999",
      image: "https://m.media-amazon.com/images/I/61hEEWSj-cL._AC_SY95_AIweblab1084404%2CT1_.jpg",
    },
    {
      title: "Samsung 655 L, 3 Star",
      price: "9999",
      image: "https://m.media-amazon.com/images/I/61hEEWSj-cL._AC_SY95_AIweblab1084404%2CT1_.jpg",
    },
    {
      title: "Samsung 656 L, 3 Star",
      price: "99999",
      image: "https://m.media-amazon.com/images/I/61hEEWSj-cL._AC_SY95_AIweblab1084404%2CT1_.jpg",
    },
  ];

  return (
    <div className="card">
      <h1>Continue shopping for</h1>
      <div className="itemCards">
        {data.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
      <button>See more</button>
    </div>
  );
};

const ItemCard = (props) => {
  return (
    <div className="itemCard">
      <img src={props.item.image} alt="" />
      <p>{props.item.title}</p>
      <p>$ {props.item.price}</p>
    </div>
  );
};

export default Map;
