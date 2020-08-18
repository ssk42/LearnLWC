public class ContactSearch {

    public static Contact[] searchForContacts(String name, String zip){
        Contact[] contactSearch= [SELECT Id, Name FROM Contact
                                  WHERE (LastName = :name AND MailingPostalCode= :zip)
                                 ];

      System.debug(contactSearch);
      return contactSearch;
    }
}