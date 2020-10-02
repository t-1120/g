import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  CircleInfoArr = [
    {
      date: '2020.09.30',
      info: 'hello world',
    },
    {
      date: '2020.09.30',
      info: 'hello world',
    },
    {
      date: '2020.09.30',
      info: 'hello world',
    },
    {
      date: '2020.09.30',
      info: 'hello world',
    }, // こんな感じで配列に情報を書いてあげてHTMLの方でngforで回して表示する。
  ]; // 長くなりそうならその時考える。
  ngOnInit(): void {}
}
