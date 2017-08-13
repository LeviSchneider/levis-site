import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'contact',
  templateUrl: `./contact.template.html`,
})
export class ContactComponent {
    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}
}