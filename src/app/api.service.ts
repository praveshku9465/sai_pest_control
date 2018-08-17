import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
/*import { Http, Response, Headers, RequestOptions } from '@angular/http';*/


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	API_URL  =  'http://localhost:8000';

  constructor(private  httpClient:  HttpClient) {}

	displayHeaders(){
	  	let header = new HttpHeaders();
	    header.append('content-type', 'application/json');
	    return header;
   	}

   	/*getToken(){

  		return localStorage.getItem('access_token');
  	}*/


  	createContact_(contact): Observable<any>{
  		const httpOptions = {
		  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
	  	contact = JSON.stringify(contact);
	    return this.httpClient.post<any>(`${this.API_URL}/v1/contact/create`, contact, httpOptions).pipe(
	    	tap((hero: any) => console.log('herio', hero)),
	    	catchError(this.handleError<any>('addHero')));
	}

	/*submitRequest(aRequest){        
		if(aRequest.method === 'POST'){
			let headers  = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
			//headers  = new Headers({ 'token': this.getToken()});
			let options  = new RequestOptions({ 
									headers: headers
							}); // Create a request option
			let body = JSON.stringify(aRequest.data);
			return this.http.post(aRequest.url, body, options);
		}
        
    }

    createContact(contact){
		var data = {
			url: this.API_URL+'v1/contact/create',
			method : 'POST',
			dataType: 'json',			
			data: contact
		};

		this.submitRequest(data);
	};*/

	  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
