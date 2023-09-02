const arr: (number | string)[] = [
  "Naseema",
  "Ibrahim",
  "Hisan",
  "Irfan",
  "1",
  "Nasrin",
  "Shadin",
];

const sorted = arr.sort((a, b): number => {
  if (a < b) return 1; // Return a positive value to place 'a' after 'b'
  if (a > b) return -1; // Return a negative value to place 'a' before 'b'
  return 0; // Return 0 to keep the order unchanged
});

console.log(JSON.stringify(sorted, null, 2));

export {};
