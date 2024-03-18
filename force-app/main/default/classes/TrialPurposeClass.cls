public with sharing class TrialPurposeClass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(){    
     return   [SELECT FirstName From Contact];
        
 }
 }