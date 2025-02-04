function hasPairSum(arr, target) {
  let left = 0,
    right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum == target) return true;
    else if (sum < target) left++;
    else right--;
  }
  return false;
}
