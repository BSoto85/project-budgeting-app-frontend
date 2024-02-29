export function formattedDate(date) {
  const transactionDate = new Date(date);
  return transactionDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function total(array) {
  const totalAmount = array.reduce((acc, cur) => {
    if (typeof cur.amount !== "number") {
      cur.amount = 0;
    }
    if (cur.transactionType === "Deposit") {
      acc = acc + cur.amount;
    } else acc = acc - cur.amount;
    return acc;
  }, 0);
  return totalAmount;
}

// export function wordFormatter() {

// }
