import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
    selector:'vote',
    templateUrl:"app/vote.template.html",
    styles: [`
        .voter{
            width: 20px;
            text-align: center;
            color: #999;
        }
        .glyphicon-menu-up{
            color: #ccc;
            cursor: pointer;
        }
        .glyphicon-menu-down{
            color: #ccc;
            cursor: pointer;
        }
        .highlighted{
            font-weight: bold;
            color: orange;
        }
        `]
})

export class VoteComponent{
    @Input() voteCount=0;
    @Input() myVote=0;
    @Output('vote-change') change = new EventEmitter(); 
    onClickUp(){ 
        if (this.myVote==-1){
            this.myVote=0;
            this.voteCount = this.voteCount+1;
        }else 
        if (this.myVote==0) {this.myVote = 1;  this.voteCount = this.voteCount+1;}
               
        if (this.myVote ==1){ 
            return;           
        }   
             
                    
    }
    onClickDown(){  
        
        if (this.myVote==1){
            this.myVote=0;
            this.voteCount = this.voteCount-1;
        }else
        if (this.myVote==0) {
            this.myVote=-1;
            this.voteCount = this.voteCount-1
        }
        if (this.myVote==-1) {  
            return;         
        }
           
            
    }
    
}