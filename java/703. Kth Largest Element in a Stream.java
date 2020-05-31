class Solution {
    public String longestWord(String[] words) {
        
        Set <String> wordSet = new HashSet();
        Arrays.sort(words, (first, second) -> {
            if(first.length() == second.length()){ 
                return second.compareTo(first);
            }
            return first.length() - second.length();});
                                        
        for(String word: words){
            wordSet.add(word);
        }
        return compareWord(words.length-1, words, wordSet);
    }
    
    private String compareWord(int endIndex, String[] words, Set<String> wordSet){

        String targetWord = words[endIndex];
        int wordLength = targetWord.length();
        if(wordLength == 1){
            return targetWord;
        }
        for(int index = wordLength-1; index > 0; index--){
            if(wordSet.contains(targetWord.substring(0, index)) == false){
                return compareWord(endIndex-1, words, wordSet);
            }
        }
        return targetWord;
    }
}
