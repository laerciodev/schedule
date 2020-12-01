import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'button-add-contact',
  templateUrl: './button-add-contact.component.html',
  styleUrls: ['./button-add-contact.component.scss'],
})
export class ButtonAddContactComponent implements OnInit {
  @Input() height: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openModal(): void {
    this.router.navigateByUrl('home/(modal:add)', {
      skipLocationChange: true,
    });
  }
}
