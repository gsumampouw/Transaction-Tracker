
function FillterByType(props){
const typeFilterHandler = (event) =>{
    props.onTypeSelected(event.target.value);
}

    return(
        <div>
            <button>Fillter By Type</button>
            <select onChange={typeFilterHandler}>
            <option>All</option>
            <option>Eating Out</option>
                <option>Entertainment</option>
                <option>Gas</option>
                <option>Groceries</option>
                <option>Home</option>
                <option>Internet</option>
            </select>
        </div>
    );

}

export default FillterByType;