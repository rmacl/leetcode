class Solution {
    
    public List<String> commonChars(String[] A) {
        List<String> result = new LinkedList();
        int[] count = new int[26];
        
        for(int i = 0; i < A.length; i++){
            String word = A[i];
            int[] temp = new int[26];
            for(int j = 0; j < word.length(); j++){
                int code = (int) word.charAt(j) - 97;
                if(i == 0){
                    count[code]++;
                    continue;
                }
                temp[code]++;
                if(j == word.length()-1){
                    for(int k = 0; k < 26; k++){
                        count[k] = Math.min(temp[k], count[k]);
                    }
                }
            }
        }
        for(int i = 0; i < 26; i++){
            if(count[i] > 0){
                char common = (char)(i+97);
                for(int j = 0; j < count[i]; j++){
                    result.add(String.valueOf(common));
                }
            }
        }
        return result;
    }
}
