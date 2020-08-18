public class AccountUtils {
    public static Account[] accountsByState(String abbrv){
        Account[] accts=[SELECT Id, Name FROM Account WHERE (BillingState=:abbrv)];
        return accts;
    }

}