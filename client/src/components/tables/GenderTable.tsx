
const GenderTable = () => {
  return (
    <>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>No.</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Male</td>
                <td>
                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
                
            </tr>
            <tr>
                <td>2</td>
                <td>Female</td>
                <td>
                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Others</td>
                
                
                <td>
                <button className="btn btn-sm btn-primary me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>

                </td>
            </tr>
        </tbody>     
    </table>
    </>
  );
};

export default GenderTable;
