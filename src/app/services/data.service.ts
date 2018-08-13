import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  // call API to get users
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
// get user details as per userid

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  // Get posts
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
