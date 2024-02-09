
import { useState } from "react";


const TransactionHeader = () => {
    const [users, setUsers] = useState([]);

    return (
        <div className="overflow-x-auto mt-8 md:mt-12 ">
            <div className=" text-center space-y-3 mb-4 md:mb-8">
                <h1 className=" text-2xl md:text-3xl">User's Transaction Information</h1>
                <h1>Total Users : {users.length}</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>User's Photo</th>
                        <th>User's Name</th>
                        <th>Last Cash In</th>
                        <th>Total Cash In</th>
                        <th>Last Cash Out</th>
                        <th>Total Cash Out</th>
                        <th>Total Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {/* body information will be based on map */}
                    <tr>
                        <td>01765829959</td>
                        <td><img src="#" alt="user's photo" /></td>
                        <td>Elias 1</td>
                        <td>2 Feb 2024</td>
                        <td>4000</td>
                        <td>2 Feb 2024</td>
                        <td>1000</td>
                        <td>3000</td>
                    </tr>
                    <tr>
                        <td>01765827959</td>
                        <td><img src="#" alt="user's photo" /></td>
                        <td>Elias2</td>
                        <td>1 Feb 2024</td>
                        <td>7000</td>
                        <td>2 Feb 2024</td>
                        <td>1000</td>
                        <td>5000</td>
                    </tr>
                </tbody>



            </table>
        </div>
    );
};

export default TransactionHeader;