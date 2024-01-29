/* eslint-disable react/prop-types */


const AgentTransactionTable = ({data,From}) => {

    
    return (
        <tr>
                <td>{From}</td>
                <td>{data.to[0].phoneNumber}</td>
                <td>{data?.createdAt.split("T", 1)[0]}</td>
                <td>{data?.amounts}</td>
                <td>{data?.type}</td>
                <td>{data?.transactionId}</td>
                
              </tr>
    );
};

export default AgentTransactionTable;