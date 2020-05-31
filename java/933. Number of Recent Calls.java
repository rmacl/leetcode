class RecentCounter {
    List<Integer> calls;
    public RecentCounter() {
        calls = new ArrayList();
    }
    
    public int ping(int t) {
        int count = 0;
        int length = calls.size();
        int end = length-1;
        int start = 0;
        int diff = (t-3000 >= 0) ? t-3000 : 0;
    
        while(start <= end){
            int middle = (start+end)/2;
            if(diff > calls.get(middle)){
                start = middle+1;
                continue;
            }
                end = middle-1;
        }
        calls.add(t);
        return length +1 - start;
    }
}
