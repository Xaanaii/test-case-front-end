import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
})
export class FilterPanelComponent {
  tags = ['Full-time', 'Part-time', 'Remote', 'Onsite'];
  selectedTag = '';
  
  selectedSalaryRange = {
    min: 1200,
    max: 20000
  };

  filterByTag(tag: string) {
    this.selectedTag = tag;
  }

  updateSalaryRange(event: any) {
    this.selectedSalaryRange.min = event.target.min;
    this.selectedSalaryRange.max = event.target.max;
  }
}
