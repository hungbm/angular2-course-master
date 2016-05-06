import {Component,Input,Output,EventEmitter} from "angular2/core"
import {LoveComponent} from "./love.component"
import {TweetService} from "./tweet.service"

@Component({
    selector: 'tweet',
    template: `
        <div *ngFor="#name of names"   class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{name.img}}" alt="pic">
                </a>
            </div>  
            <div class="media-body">
                <h4  class="media-heading" style="text-align:left;float:left;font-size: 25">{{name.name}}&nbsp; </h4>
                <h4  class="media-heading" style="text-align:left;float:left;color:grey;">{{name.locate}}</h4><br> 
                <br>   
                <love style="float:left;" [isLove]=name.isLove [count] = "name.votecount"></love>   &nbsp; &nbsp;      
                {{name.doc}}
                              
            </div>           
         </div>
    `,
    providers [TweetService],
    directives: [LoveComponent]
})

export class TweetComponent{
     names;
    @Output() like = new EventEmitter();
    
    constructor(tweetService: TweetService){
        this.names = tweetService.getNames(); 
    }   
}