import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/shared/models';

@Component({
  selector: '[contact-item]',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() index: number;
  showHighlight: boolean;
  backgroundColor: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.backgroundColor = this.getRandomColor();
    this.showHighlight = true;
    setTimeout(() => {
      this.showHighlight = false;
    }, 10000);
  }

  edit(index: number) {
    this.router.navigateByUrl(`home/(modal:edit/${index})`, {
      skipLocationChange: true,
    });
  }

  deleteContact(index: number) {
    this.router.navigateByUrl(`home/(modal:delete/${index})`, {
      skipLocationChange: true,
    });
  }

  getRandomColor(): string {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
