import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animation/router.animations';
import { Router } from "@angular/router";

@Component({
    selector: 'list-selector',
    templateUrl: 'list.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class ListComponent implements OnInit {
    constructor(private router:Router) { }

    navigateNext() {
        this.router.navigateByUrl("/booking");
    }
    ngOnInit() { }
}