import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

const columns = ["#", "Remarks", "Type", "Amount"];

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
          <th className="text-end">{columns[3]}</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((row, index) => (
          <tr key={row.tid}>
            <td>{index + 1}</td>
            <td className="text-capitalize">{row.remarks}</td>
            <td
              className={
                row.type === "credit" ? "text-success" : "text-warning"
              }
            >
              {row.type}
            </td>
            <td className="text-end">{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
