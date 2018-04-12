import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {GithubService}from './github.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private gitservice:GithubService){}
    user={};
    follow=[];
    onSubmit(form:NgForm){
    if(form.status=='INVALID'){
      console.log("not working");
    }else{
      console.log(form.value.name);
      Observable.forkJoin(
        this.gitservice.getGitData(form.value.name),
        this.gitservice.getGitDatafollowers(form.value.name)
      ).subscribe(
        (result)=>{
          this.user=result[0];
          this.follow=result[1];
        }
      )
    }
  }
}
      
