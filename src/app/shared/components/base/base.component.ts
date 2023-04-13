import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  template: ''
})
export class BaseComponent {
  constructor(private http: HttpClient) {}

  protected getDataFromApi(apiUrl: string) {
    return this.http.get(apiUrl);
  }
}

// import { Component } from '@angular/core';
// import { BaseComponent } from './base.component';

// @Component({
//   selector: 'app-my-component',
//   template: '<div>{{ data }}</div>'
// })
// export class MyComponent extends BaseComponent {
//   data: any;

//   constructor() {
//     super();
//     this.getDataFromApi('https://example.com/api/data').subscribe((res) => {
//       this.data = res;
//     });
//   }
// }
