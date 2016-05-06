import {Component} from 'angular2/core';

@Component({
    selector: 'zippy',
    template:`
    <div class="panel panel-default">
        <div class="panel-heading" (click)="onClick()">
            <strong><ng-content select=".heading"></ng-content></strong>

            <i style="top: -15px;"
                class="pull-right glyphicon"
                [ngClass]="{
                    'glyphicon-chevron-down': !isClicked,
                    'glyphicon-chevron-up':isClicked                    
                }"
                >
            </i>

        </div>
        <div *ngIf="isClicked!=false" class="panel-body">
            <ng-content select=".body"></ng-content>
        </div>
    </div>
    ` 
})
export class ZippyPanel {
    isClicked = false;
    onClick(){
        this.isClicked =!this.isClicked;
    }
}