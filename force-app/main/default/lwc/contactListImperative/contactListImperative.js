import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactControllerImperative.getContacts';

export default class ContactListImperative extends LightningElement {
    @track contacts;
    @track error;

    handleLoad(){
        getContacts()
            .then( contacts=>{
                this.contacts=contacts;
            })
            .catch( error=>{
                this.errors=errors;
            })
    }

    handleSave(event) {
        this.saveDraftValues = event.detail.draftValues;
    }
    
}