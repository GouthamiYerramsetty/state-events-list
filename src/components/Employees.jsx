import Employee from "./Employee";

const Employees = () => {
    const jsonData = [
        {id :1, name: 'Mark', email: 'mark@gmail.com'},
        {id :2, name: 'Clerk', email: 'c@gmail.com'},
        {id :3, name: 'John', email: 'j@gmail.com'},
        {id :4, name: 'shift', email: 's@gmail.com'},
        {id :5, name: 'watson', email: 'w@gmail.com'}

    ];

    
    return(
        <div>
            <h1 className="text centre">All Employees</h1>
           <table className="table table-bordered"> 
           <thead className = "thead-dark">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
           </thead>
           <tbody>
            {
               jsonData.map((emp) => <Employee key = {emp.id}  data={ emp } />)
            }
           </tbody>
           </table>
        </div>
    );
};
export default Employees;