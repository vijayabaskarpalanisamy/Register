import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class RegisterService {

  constructor( private http:Http) { }
  getDetails(){
    return this.http.get("https://vbaskar.herokuapp.com/college")
        .map(res => res.json());
  }
   addmethod(details){
    return this.http.post("https://vbaskar.herokuapp.com/college",details)
        .map(res => res.json());
  }
  getData(id){
    return this.http.get("https://vbaskar.herokuapp.com/college/"+id)
        .map(res => res.json());
  }
  deletemethod(id){
    return this.http.delete("https://vbaskar.herokuapp.com/college/"+id)
      
  }
  updatemethod (id, details){
    return this.http.put("https://vbaskar.herokuapp.com/college/"+id,details)
        .map(res => res.json());
  }
}