import React,{useState} from 'react';
import { Grape ,Citrus,Apple,Banana,Cherry,Fish} from "lucide-react";


function Shopping(){
  const [pick,setPick]=useState([]);
  const [total,setTotal]=useState(0);

  const [products,setProducts] = useState([
    { id: 0, name: "Grape", price: 15, img: <Grape className="w-10 h-10 text-blue-500" />, color: 'green' },
    { id: 1, name: "Citrus", price: 10, img: <Citrus className="w-10 h-10 text-blue-500" /> ,color:'green'},
    { id: 2, name: "Apple", price: 12, img: <Apple className="w-10 h-10 text-blue-500" />, color: 'green' },
    { id: 3, name: "Banana", price: 8, img: <Banana className="w-10 h-10 text-blue-500" />, color: 'green'},
    { id: 4, name: "Cherry", price: 18, img: <Cherry className="w-10 h-10 text-blue-500" />, color: 'green' },
    { id: 5, name: "Fish", price: 20, img: <Fish className="w-10 h-10 text-blue-500" />, color: 'green'},
  ]);

  console.log("pick",pick)

  

  return(
    <div id ="container">
    <div >
    <ProductCard products = {products}  setPick={setPick} pick={pick} total={total} setTotal={setTotal}/>
    </div>
    <p style={{textAlign:"center"}}>Shopping Cart</p>
    {
      pick.map((el)=>(
    <Card id={el.id} icon = {el.img} name={el.name} price={el.price} setPick={setPick} pick={pick} total={total} setTotal={setTotal} products = {products}/>
      ))
    }
    {
      total != 0
      ?<p>The total is {total}</p>
      :<p>there is nothing</p>
    
    }
    </div>
  )
}

function ProductCard(props){
  const {products,setPick,pick,total,setTotal} = props;
  const hdlClick = (el) => {
    if(pick.some((item)=>item.name===el.name)){
      setPick(pick.filter((item)=>item.name!=el.name))
      setTotal(total- el.price)
      products[el.id].color="green"
    }else{
    products[el.id].color = 'red'
    setPick([...pick,el])
    setTotal(total+el.price)
      
    }
  }

  return(
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px", 
    }}>
    {products.map((el)=>(
      <button style={{ display: "flex", width: "200px", border: "solid", gap: "5px", backgroundColor: `${el.color}`,alignItems:"center",justifyContent:"center",color:"white"}}
      onClick={()=>hdlClick(el)}
      >
      {el.img}
      <p>{el.name}</p>
      <p>{el.price}</p>
      <p>Thb</p>
      </button>
      ))}
    </div>
  )
}

function Card({ icon, name, price,setPick,pick,total,setTotal,products ,id}) {

  const hdlClick =()=>{
    console.log(name)
    setPick(pick.filter((item)=>item.name!=name))
    setTotal(total- price)
    products[id].color="green"
    }
    
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "10px",
                border: "1px solid lightgray",
                borderRadius: "5px",
                marginBottom: "10px",
            }}
        >
            <div style={{flexGrow:"1"}}>{icon}</div>
            <div style={{flexGrow:"1"}}>{name}</div>
            <div style={{flexGrow:"1"}}>{price}</div>
            {/* ปุ่มลบ */}
            <button
                onClick={()=>hdlClick()}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                }}
            >
                X
            </button>
        </div>
    );
}


export default Shopping