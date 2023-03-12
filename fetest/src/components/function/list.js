import './1.css';
function List(props){

    let {object, editDataFunc, deleteDataFunc} = props;



    return (
        <div>
            <h2 className='title'>Profile </h2>
            <table className='my-table'>
            <thead>
              <tr>
                <th> ID </th>
                <th> Title </th>
                <th> Description </th>
                <th> Tag </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {
                object.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.tag}</td>
                        <td>
                            <button className='btn btn-success' onClick={() => editDataFunc(item)}> Sửa</button>
                            <button className='btn btn-danger' onClick={() => deleteDataFunc(item.id)}> Xoá</button>
                        </td>
                    </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
    )
}

export default List;