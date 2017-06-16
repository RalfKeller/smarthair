import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'plz',
    templateUrl: 'plz.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class PlzComponent implements OnInit {
    constructor(private router : Router) { }

    navigateNext() {
        this.router.navigateByUrl("/packet");
    }

    ngOnInit() { }
}