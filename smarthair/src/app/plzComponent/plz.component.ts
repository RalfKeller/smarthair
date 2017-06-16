import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'plz',
    templateUrl: 'plz.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class PlzComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}