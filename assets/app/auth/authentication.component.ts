import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';


@Component ({
    selector: 'my-auth',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 clo-md-offset-2">
                <ul class="nav nav-tabs">
                    <li><a [routerLink] = "['./signup']" >Singup</a></li>
                    <li><a [routerLink] = "['./signin']" >Singup</a></li>
                    <li><a [routerLink] = "['./logout']" >Singup</a></li>
                </ul>
            </nav>
        </header>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@Routes ([
    {path: '/signup', component: SignupComponent},
    {path: '/signin', component: SigninComponent},
    {path: '/logout', component: LogoutComponent}
])

export class AuthenticationComponent {

}