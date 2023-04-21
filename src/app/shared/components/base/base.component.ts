import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../service/base.service';

@Component({
  template: ''
})
export class BaseComponent<T> {


  constructor(private service:BaseService<T>) {}


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
