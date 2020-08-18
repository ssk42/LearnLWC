public with sharing class ContactControllerImperative {
    @AuraEnabled()
    public static List<Contact> getContacts() {
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY Email
        ];
    }
}
