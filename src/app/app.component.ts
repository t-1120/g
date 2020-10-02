import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'g';
  home = true;
  works = false;
  gallary = false;
  contact = false;
  /* 基本的にコンテンツを切り替える方式で行こうと思っているので
  ngIfで見え切り替えます。 */
  homeshow(): void {
    this.contact = false;
    this.works = false;
    this.gallary = false;
    this.home = true;
  }
  worksshow(): void {
    this.works = true;
    this.contact = false;
    this.gallary = false;
    this.home = false;
  }
  gallaryshow(): void {
    this.works = false;
    this.contact = false;
    this.gallary = true;
    this.home = false;
  }
  contactshow(): void {
    this.works = false;
    this.contact = true;
    this.gallary = false;
    this.home = false;
  }
}
