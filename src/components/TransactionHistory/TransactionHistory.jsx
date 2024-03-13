import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.nameValues}>Type</th>
          <th className={css.nameValues}>Amount</th>
          <th className={css.nameValues}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td className={index % 2 === 0 ? css.secondValues : css.values}>{item.type}</td>
            <td className={index % 2 === 0 ? css.secondValues : css.values}>{item.amount}</td>
            <td className={index % 2 === 0 ? css.secondValues : css.values}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
