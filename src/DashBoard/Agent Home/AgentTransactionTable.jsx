/* eslint-disable react/prop-types */


const AgentTransactionTable = ({data}) => {
    return (
        <tr>
                <td>{data?.From}</td>
                <td>{data?.To}</td>
                <td>{data?.Date}</td>
                <td>{data?.Amounts}</td>
                <td>{data?.Type}</td>
                <td>{data?.TransactionId}</td>
                
              </tr>
    );
};

export default AgentTransactionTable;