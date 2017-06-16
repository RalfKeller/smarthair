import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'packet-component',
    templateUrl: 'packet.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class PacketComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}