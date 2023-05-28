import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private logo : string = "";
  private lastName: string = "";
  private firstName : string = "";

  constructor() { 
  }

  setLastName(value : string) {
    this.lastName = value;
  }
  setFirstName(value : string) {
    this.firstName = value;
  }
  setLogo(value : string) {
    this.logo = value;
  }

  public getLastName() : string {
    return this.lastName;
  }
  public getFirstName() : string {
    return this.firstName;
  }
  public getLogo() : string {
    return this.logo;
  }

}
