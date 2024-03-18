public with sharing class BadicCon {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
       
        if (!Schema.sObjectType.Contact.isAccessible()) {
            throw new AuraHandledException('You do not have permission to access Contact records.');
        }
        
       
        return [SELECT Id, Name  FROM Contact LIMIT 10];
    }
}