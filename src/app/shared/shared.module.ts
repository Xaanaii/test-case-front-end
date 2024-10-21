// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';
import { JobListingComponent } from '../job-listing/job-listing.component';
import { JobCardComponent } from '../job-card/job-card.component'; 

@NgModule({
  declarations: [
    FilterPanelComponent,
    JobListingComponent,
    JobCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FilterPanelComponent,
    JobListingComponent,
    JobCardComponent
  ]
})
export class SharedModule { }