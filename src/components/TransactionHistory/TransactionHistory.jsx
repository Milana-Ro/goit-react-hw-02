import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const renderItems = items.map((item) => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{renderItems}</tbody>
    </table>
  );
};

export default TransactionHistory;
