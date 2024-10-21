import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job: any;

  // Function to toggle bookmark state
  toggleBookmark() {
    this.job.bookmarked = !this.job.bookmarked; // Toggle bookmarked state
  }
}
