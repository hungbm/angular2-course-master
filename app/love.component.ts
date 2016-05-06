import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
    selector:'love',
    templateUrl:'app/love.template.html',
    styles: [ `
        .glyphicon-heart {
            color: deeppink;
            cursor: pointer;
        }
        .glyphicon-heart-empty{
            color: #ccc;
            cursor: pointer;
        }
    `]
})

export class LoveComponent{
    @Input() count=0;
    @Input() isLove = false;
    @Output('call-change') change = new EventEmitter();
    
    onClick(){
        this.isLove = !this.isLove;
        if (this.isLove==true){
            this.count++;
        }else this.count--;
        
    }  
}