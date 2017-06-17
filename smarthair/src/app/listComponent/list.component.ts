import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animation/router.animations';

@Component({
    selector: 'list-selector',
    templateUrl: 'list.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class ListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}