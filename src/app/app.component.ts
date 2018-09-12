import { Component } from '@angular/core';
import {FeedServiceService} from "./feed-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: any;

  constructor (
    private feedService: FeedServiceService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
      .then(feed =>{
        this.feeds = feed.items;
      }).catch(error => {
      console.log(error);
    });
  }

}
