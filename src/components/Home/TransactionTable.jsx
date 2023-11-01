import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

const columns = ["#", "Remarks", "Amount"];

const TransactionTable = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactionList
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{columns[0]}</th>
          <th>{columns[1]}</th>
          <th>{columns[2]}</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((row, index) => (
          <tr key={row.tid}>
            <td>{index + 1}</td>
            <td>{row.remarks}</td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
