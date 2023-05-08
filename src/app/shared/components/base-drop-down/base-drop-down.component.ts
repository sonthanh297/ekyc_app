import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-dropdown',
  templateUrl: './base-drop-down.component.html'
})
export class BaseDropdownComponent {
  @Input() items: DropdownItem[] = [];
  selectedItem: any;
}

interface DropdownItem {
  label: string;
  value: any;
}


// <select [(ngModel)]="selectedItem">
//   <ng-content></ng-content>
// </select>

// <app-base-dropdown [(ngModel)]="selectedItem">
//   <option *ngFor="let item of dropdownItems" [value]="item.value">{{ item.label }}</option>
// </app-base-dropdown>
