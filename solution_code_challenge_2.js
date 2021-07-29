var findLength = function (nums1, nums2) {
  const rows = nums1.length;
  const cols = nums2.length;

  const arr = Array(rows + 1).fill().map(() => Array(cols).fill(0));
  let max = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
        max = Math.max(max, arr[i][j]);
      }
    }
  }

  return max;
};