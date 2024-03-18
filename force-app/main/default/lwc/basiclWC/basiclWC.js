import { LightningElement,wire, track } from 'lwc';
import getContact from '@salesforce/apex/TrialPurposeClass.getContact';
export default class BasiclWC extends LightningElement {
    @track conList;
    @track contactOptions = [];
    @track selectedContactId;

    @wire(getContact)
    wiredContacts({ error, data }) {
        if (data) {
            this.conList = data;
            this.contactOptions = this.conList.map(contact => ({
                label: contact.FirstName,
                value: contact.Id
            }));
        } else if (error) {
            console.error('Error retrieving data:', error); 
        }
    }

    handleContacts(event) {
        const selectedContactId = event.detail.value;
        console.log('Selected Contact Id:', selectedContactId);
        this.selectedContactId = selectedContactId; 
    }
}