import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'packet-component',
    templateUrl: 'packet.component.html',
    animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class PacketComponent implements OnInit {
    constructor(private router : Router) { }

    navigateNext() {
        this.router.navigateByUrl("/plz");
    }

    ngOnInit() { }
}