setText((text) => [...text, data.slice(0, amount)]);

let n = parseInt(amount / 9);
for (let i = 0; i < n; i++) {
  let temp1 = [];
  let temp2 = data.slice(0, amount);
  setText((text) => [temp1, temp2]);
}
