class Solution {
 int time;
 private static final int DIGIT = 4;

 public String largestTimeFromDigits(int[] A) {
  time = -1;

  for (int i = 0; i < DIGIT; i++) {
   for (int j = 0; j < DIGIT; j++) {
    if (i != j) {
     for (int k = 0; k < DIGIT; k++) {
      if (j != k && i != k) {
       int l = 6 - i - j - k;
       int hour = A[i] * 10 + A[j];
       int minute = A[k] * 10 + A[l];
       if (hour < 24 && minute < 60) {
        time = Math.max(time, hour * 60 + minute);
       }
      }
     }
    }

   }

  }
  return time >= 0 ? String.format("%02d:%02d", time / 60, time % 60) : "";
 }
}
