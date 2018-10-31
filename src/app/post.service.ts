import { Injectable } from '@angular/core';
import { Post } from './wall/model/post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {

    private postUrl = 'http://localhost/social/web/index.php/api/blog/1';  // URL to web api

    constructor(private http: HttpClient) {

    }

    getPOSTS(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    }

    addPost(post: Post): Observable<Post[]> {
        return this.getPOSTS()

    }
    deletePost (post: Post| number): Observable<Post> {
        const id = typeof post === 'number' ? post : post.id;
        const url = `${this.postUrl}/${id}`;

        return this.http.delete<Post>(this.postUrl,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        ;
    }




    }

