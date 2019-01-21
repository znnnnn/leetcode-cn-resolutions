class Solution {
  public int uniqueMorseRepresentations(String[] words) {
      int baseIndex = 97;
      Set<String> set = new HashSet<>();
      for (String word : words) {
        int lenght = word.length();
        StringBuilder sb = new StringBuilder();
    for (int i = 0; i < lenght; i++) {
      sb.append(morse[word.charAt(i) - baseIndex]);
    }
    set.add(sb.toString());
  }
      return set.size();
  }

  String[] morse = {
      ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."
  };
}