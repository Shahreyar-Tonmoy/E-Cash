/* eslint-disable react/prop-types */


const UserTransectionTable = ({data,From}) => {

    
    return (
        <tr>
                <td>{data.from[0].phoneNumber}</td>
                <td>{From}</td>
                <td>{data?.createdAt.split("T", 1)[0]}</td>
                <td>{data?.amounts}</td>
                <td>{data?.type}</td>
                <td>{data?.transactionId}</td>
                
              </tr>
    );
};

export default UserTransectionTable;