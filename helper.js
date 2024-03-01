export function formattedDate(date) {
  const parts = date.split("-");
  const transactionDate = new Date(parts[0], parts[1] - 1, parts[2]);
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
