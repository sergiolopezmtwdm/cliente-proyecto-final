import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'componentes-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.scss']
})
export class XboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoplayTimeout: 5000,
    // navText: ['&#8249', '&#8250;'],
    navText: [ '<div class="nav-owl text-center font-weight-bold"><i class="bx bx-left-arrow-alt"></i></div>', '<div class="nav-owl text-center font-weight-bold"><i class="bx bx-right-arrow-alt"></i></div>' ],
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      },
      1250: {
        items: 5
      }
    },
    nav: true
  }

}
