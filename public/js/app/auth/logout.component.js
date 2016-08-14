"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.onLogout = function () {
        console.log('logged out');
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'my-logout',
            template: "\n        <section class=\"col-md-8 clo-md-offset-2\">\n            <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBVzFDO0lBQUE7SUFLQSxDQUFDO0lBSkcsa0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVpMO1FBQUMsZ0JBQVMsQ0FBRTtZQUNSLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSx1S0FJVDtTQUNKLENBQUM7O3VCQUFBO0lBT0Ysc0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLHVCQUFlLGtCQUszQixDQUFBIiwiZmlsZSI6ImF1dGgvbG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNsby1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xyXG4gICAgb25Mb2dvdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQnKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
