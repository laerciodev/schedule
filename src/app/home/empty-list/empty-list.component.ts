import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.scss']
})
export class EmptyListComponent implements OnInit {

  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModal(value: string) {
    this.open.emit(value)
  }

}
