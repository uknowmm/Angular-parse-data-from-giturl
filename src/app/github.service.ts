import {Http,Response} from '@angular/http'
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class GithubService{
constructor(private http:Http){}
private _url='https://api.github.com/users/';
getGitData(name:string){
return this.http.get(this._url+ name)
.map((response:Response)=>response.json());
}

getGitDatafollowers(name:string){
    return this.http.get(this._url+ name +"/followers")
    .map((response:Response)=>response.json());
    }

}