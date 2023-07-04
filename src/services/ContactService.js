import axios from "axios";

export class ContactService{
  static serverUrl = "http://localhost:9000";

  static getAllContacts(){
    let dataUrl = `${this.serverUrl}/contacts/`
    return axios.get(dataUrl);
  }

  static getContact(id){
    let dataUrl = `${this.serverUrl}/contacts/${id}`
    return axios.get(dataUrl);
  }

  static createContact(contact){
    let dataUrl = `${this.serverUrl}/contacts/`
    return axios.post(dataUrl, contact);
  }

  static updateContact(contact, contactId){
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`
    return axios.put(dataUrl, contact);
  }

  static deleteContact(id){
    let dataUrl = `${this.serverUrl}/contacts/${id}`
    return axios.delete(dataUrl);
  }

  static getAllGroups(){
    let dataUrl = `${this.serverUrl}/groups/`
    return axios.get(dataUrl);
  }

  static getGroup(id){
    let dataUrl = `${this.serverUrl}/groups/${id}`
    return axios.get(dataUrl);
  }
}