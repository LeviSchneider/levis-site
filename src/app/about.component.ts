import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  animations: [
      trigger('flyInOut', [
          state('in', style({transform: 'translateX(0)'})),
          transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(100)
          ]),
          transition('* => void', [
          animate(100, style({transform: 'translateX(100%)'}))
          ])
      ])
  ]
})
export class AboutComponent {
    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}
}