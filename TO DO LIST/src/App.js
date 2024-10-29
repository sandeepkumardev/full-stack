import "./index.css";

const App=()=>{
    return(
     <div className="Box">
        <div className="Head">
            <input type="text"></input>
            <button id="but">ADD</button>
        </div>
        <ul>
           <li>Task 1</li>
           <li>Task 2</li>
           <li>Task 3</li>
           <li>Task 4</li>
        </ul>
     </div>
    );
};

export default App;