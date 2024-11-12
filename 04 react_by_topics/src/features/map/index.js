const Map = () => {
  const data = [
    {
      title: "samsung ac 1",
      price: "1000",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    },
    {
      title: "samsung ac 2",
      price: "10000",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    },
    {
      title: "samsung ac 3",
      price: "100000",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    },
    {
      title: "samsung ac 4",
      price: "1000000",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    },
  ];
  return (
    <div className="card">
      <h1>Appliances for your home | Up to 55% off</h1>
      <div className="itemcards">
        {data.map((item, index) => (
          <ItemCard key="index" item={item} />
        ))}
      </div>
      <button>See more..</button>
    </div>
  );
};

const ItemCard = (props) => {
  return (
    <div className="itemcard">
      <img src={props.item.image} />
      <p>{props.item.title}</p>
      <p>{props.item.price}</p>
    </div>
  );
};
export default Map;
