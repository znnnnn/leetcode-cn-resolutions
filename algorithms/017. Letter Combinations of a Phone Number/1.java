class Solution {
  /**
   * 思路：先搞一个map的映射，映射数字和字符的关系。
   */

  public List<String> letterCombinations(String digits) {
      Map<Character,String> map1=new HashMap<Character,String>();
      map1.put('2',"abc");
      map1.put('3',"def");
      map1.put('4',"ghi");
      map1.put('5',"jkl");
      map1.put('6',"mno");
      map1.put('7',"pqrs");
      map1.put('8',"tuv");
      map1.put('9',"wxyz");
      //存放下一次增加前的
      List<String> list1=new ArrayList<String>();
      list1.add("");
      //存放增加后的
      List<String> list2=new ArrayList<String>();
      for(int i=0;i<digits.length();i++){
          list2.clear();
          char c=digits.charAt(i);
          String s=map1.get(c);
          //System.out.println(list1);
          for(int j=0;j<s.length();j++){
                  for (String s1:list1){
                      String s2=s1+s.charAt(j);
                      //System.out.println(s2);
                      list2.add(s2);
                  }
          }
          list1.clear();
          list1.addAll(list2);
      }
      //System.out.println(list2);
      return list2;
  }
}