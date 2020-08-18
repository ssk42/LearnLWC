public class ContactAndLeadSearch {
    public static List<List<SObject>> searchContactsAndLeads(String partOfName){
        List<List<SObject>> searchList=[FIND :partOfName IN NAME FIELDS RETURNING Contact,Lead];
        
        System.debug(searchList);
        return searchList;
    }

}