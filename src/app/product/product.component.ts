import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Headers} from "@angular/http"
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 手动订阅response流
  // dataSource: Observable<any>; // 响应式编程里流的类型就是Observable。该变量用来接收response流
  // products: Array<any> = [];
  //
  // constructor(private http: Http) {
  //   this.dataSource = this.http.get('/api/products') // 定义get http方法，此时并没有实际发送这个请求
  //     .map((res) => res.json()); // get得到的response是流，要拿到流里面的数据并把它转换成json。map方法需要先导入rxjs/Rx这个包才能用
  // }
  //
  // ngOnInit() {
  //   this.dataSource.subscribe( // 在订阅的时候才真正发送了请求
  //     (data) => this.products = data // 订阅dataSource并将值传给products属性
  //   )
  // }

  // 另一种订阅方式：使用async管道自动订阅流
  products: Observable<any>;
  constructor (private http: Http) {
    // this.products = this.http.get('/api/products')
    //   .map((res) => res.json());

    //  还可以给请求头中加入自定义信息
    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456");
    this.products = this.http.get('/api/products', {headers: myHeaders})
      .map((res) => res.json());
  }
  ngOnInit(){}
}
