import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'zeit-component',
    templateUrl: 'zeit.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class ZeitComponent implements OnInit {
    constructor(private router: Router) { }

        navigateNext() {
        this.router.navigateByUrl("/list");
    }

    ngOnInit() { }
}