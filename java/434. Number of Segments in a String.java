class Solution {
    public int countSegments(String s) {
        s = s.replaceAll("\\s+", " ").trim();
        String[] result = s.split(" ");
        return (s.length() == 0) ? 0 : result.length;
    }
}
