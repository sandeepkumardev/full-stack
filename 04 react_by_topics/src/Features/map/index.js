const Map=()=>{

    const data = [ 
        { title: "Samsung 653 L",
            price:8000,
            image:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"

        },
        { title: "Samsung 653 L",
            price:8000,
            image:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"

        },
        { title: "Samsung 653 L",
            price:9000,
            image:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"

        }
    ];
    return(
        <div className="cards">
            <h1>Continue Shooping For</h1>
            <div className="card">
                { data.map(item, index=>(
                    <ItemCard item={item}/>
                )) }
            
            
            </div>
            <button>See More</button>
        </div>
    )
};

const ItemCard=(props)=>{
    return(
        <div className="item">
            <img src={props.item.image} alt=""></img>
            <p>{props.item.title}</p>
            <p>{props.item.price}</p>
        </div>
       
    )
    
};
export default Map;