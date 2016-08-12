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
var message_component_1 = require('./message.component');
var message_1 = require('./message');
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.messages = [
            new message_1.Message('A new Message', null, 'Efim'),
            new message_1.Message('Another Message', null, 'Anna')
        ];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n            <section class=\"col-md-8 col-md-offset-2\">\n                <my-message *ngFor=\"let message of messages \" [message] = \"message\" (editClicked)=\"message.content = $event\"></my-message>\n            </section>\n        ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFZcEM7SUFBQTtRQUNJLGFBQVEsR0FBYztZQUNsQixJQUFJLGlCQUFPLENBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7WUFDM0MsSUFBSSxpQkFBTyxDQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7U0FDaEQsQ0FBQztJQUVOLENBQUM7SUFoQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ0gsUUFBUSxFQUFDLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsZ1BBSVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNyQyxDQUFDOzs0QkFBQTtJQVFGLDJCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBb0IsdUJBTWhDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6J215LW1lc3NhZ2UtbGlzdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzIFwiIFttZXNzYWdlXSA9IFwibWVzc2FnZVwiIChlZGl0Q2xpY2tlZCk9XCJtZXNzYWdlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LW1lc3NhZ2U+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBgLFxyXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcclxuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXHJcbiAgICAgICAgbmV3IE1lc3NhZ2UgKCdBIG5ldyBNZXNzYWdlJywgbnVsbCwgJ0VmaW0nKSxcclxuICAgICAgICBuZXcgTWVzc2FnZSAoJ0Fub3RoZXIgTWVzc2FnZScsIG51bGwsICdBbm5hJylcclxuICAgIF07XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
