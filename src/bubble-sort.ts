const arr: string[] = ["5", "3", "2", "4", "1", "6", "9", "8", "7"];

const runBubbleSort = (arr: string[]): void => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};
runBubbleSort(arr);

console.log(JSON.stringify(arr, null, 2));

export {};
