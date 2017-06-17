import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'final-component',
    templateUrl: 'final.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class FinalComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }
}