import { LightningElement, wire } from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text', editable: true },
    { label: 'Last Name', fieldName: LASTNAME_FIELD.fieldApiName, type: 'text' , editable: true},
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text', editable: true }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    errors;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }

    handleSave(event) {
        this.saveDraftValues = event.detail.draftValues;
    }
    
}