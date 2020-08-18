public class StringArrayTest {
    public static String[] generateStringArray(Integer n){
        String[] StringArray= new String[n];
        for(Integer i=0;i<StringArray.size();i++){
           StringArray[i]='Test '+i;
        }
        system.debug(StringArray);
        
        return (StringArray);
    }

}