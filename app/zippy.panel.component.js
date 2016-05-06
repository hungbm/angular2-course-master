System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ZippyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyPanel = (function () {
                function ZippyPanel() {
                    this.isClicked = false;
                }
                ZippyPanel.prototype.onClick = function () {
                    this.isClicked = !this.isClicked;
                };
                ZippyPanel = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" (click)=\"onClick()\">\n            <strong><ng-content select=\".heading\"></ng-content></strong>\n\n            <i style=\"top: -15px;\"\n                class=\"pull-right glyphicon\"\n                [ngClass]=\"{\n                    'glyphicon-chevron-down': !isClicked,\n                    'glyphicon-chevron-up':isClicked                    \n                }\"\n                >\n            </i>\n\n        </div>\n        <div *ngIf=\"isClicked!=false\" class=\"panel-body\">\n            <ng-content select=\".body\"></ng-content>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyPanel);
                return ZippyPanel;
            }());
            exports_1("ZippyPanel", ZippyPanel);
        }
    }
});
//# sourceMappingURL=zippy.panel.component.js.map