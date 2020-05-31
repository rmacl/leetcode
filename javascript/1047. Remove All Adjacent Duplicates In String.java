class Solution {
    public String removeDuplicates(String S) {
        Deque<Character> result = new ArrayDeque();
        StringBuffer letters =new StringBuffer();
        result.push(S.charAt(0));
        
        for(int index = 1; index < S.length(); index++){
            char character = S.charAt(index);
            if(result.size() > 0 && result.peekLast() == character){
                result.pollLast();
                continue;
            }
            result.offer(character);
        }
        
        for(char s:result){
            letters.append(s);
        }
        return letters.toString();
    }
}
