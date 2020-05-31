var addTwoNumbers = function(l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
    
  let result = new ListNode(l1.val + l2.val);
  result.next = addTwoNumbers(l1.next, l2.next);
  if (result.val >= 10) {
    result.val -= 10;
    result.next = addTwoNumbers(result.next, new ListNode(1));
  }
  return result;
};
