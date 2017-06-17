import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { routerTransition } from '../animation/router.animations'

@Component({
    selector: 'booking',
    templateUrl: 'booking.component.html',
        animations: [routerTransition()],
    host: {'[@routerTransition]' : ''}
})

export class BookingComponent implements OnInit {
    constructor(private router:Router) { }

    navigateNext() {
        this.router.navigateByUrl("/final");
    }
    ngOnInit() { }
}