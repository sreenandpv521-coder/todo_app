function List() {
    let colors = ['red', 'white', 'black']

    return (
        <>
            <ul>
                {colors.map((col,ind)=><li key={ind} >{col}</li>)}
            </ul>
        </>

    );
}

export default List