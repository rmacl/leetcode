class Solution {
    public int maxNumberOfBalloons(String text) {
        
        int result = Integer.MAX_VALUE;
        String [] balloon = {"b","a", "l", "o", "n"};
        Set balloonSet = new HashSet(Arrays.asList(balloon));
       
        Map<String, Integer> map = new HashMap<String, Integer>();
        for(String c:balloon){
            map.put(c, 0);
        }
        
        for(int index = 0; index < text.length(); index++){
        
            String alphabet = String.valueOf(text.charAt(index));
            if(map.containsKey(alphabet) == false){
                continue;
            }
            int count = map.containsKey(alphabet) ? map.get(alphabet) + 1 : 1; 
            map.put(alphabet, count);
        }
        for(Map.Entry<String, Integer>  entry:map.entrySet()){
            String key = entry.getKey();
            Integer value = entry.getValue();
            if(value  == 0){
                return 0;
            }
            int count = (key.equals("l") || key.equals("o")) ? value/2 : value;
            result = Math.min(result, count);
        }
        return result;
    }
}
