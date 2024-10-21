import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
})
export class JobListingComponent {
  jobOpportunities = [
    {
      organisationTitle: 'Amazon',
      organisationIcon: '/Amazon-Logo.png',
      opportunityTitle: 'Senior UI/UX Designer',
      tags: ['Full time', 'Senior level'],
      date: '20 May, 2024',
      salary: '$4,000/month',
      location: 'San Francisco, CA',
    },
    {
      organisationTitle: 'Google',
      organisationIcon: '/google-logo.png',
      opportunityTitle: 'Junior UI/UX Designer',
      tags: ['Full time', 'Junior level', 'Distant', 'Project work', 'Flexible Schedule'],
      date: '4 Feb, 2024',
      salary: '$150/hr',
      location: 'California, CA',
    },
    {
      organisationTitle: 'Gojek Tokopedia',
      organisationIcon: '/gojek-logo.png',
      opportunityTitle: 'Data Analyst',
      tags: ['Full time', 'Entry level', 'Full Day', 'Shift work'],
      date: '29 Jan, 2024',
      salary: '$350/month',
      location: 'Jakarta, Indonesia',
    },
    {
      organisationTitle: 'X Corporation',
      organisationIcon: '/x-logo.webp',
      opportunityTitle: 'UX Designer',
      tags: ['Full time', 'Middle level', 'Distant', 'Project work'],
      date: '11 Apr, 2024',
      salary: '$120/hr',
      location: 'California, CA',
    },
    {
      organisationTitle: 'Airbnb',
      organisationIcon: '/airbnb-logo.png',
      opportunityTitle: 'Graphic Designer',
      tags: ['Part time', 'Senior level'],
      date: '2 Apr, 2024',
      salary: '$300/hr',
      location: 'New York, NY',
    },
    {
      organisationTitle: 'Apple',
      organisationIcon: '/Apple-Logo.png',
      opportunityTitle: 'Graphic Designer',
      tags: ['Part time', 'Distant'],
      date: '18 Jan, 2024',
      salary: '$140/hr',
      location: 'San Francisco, CA',
    },
    {
      organisationTitle: 'Spotify',
      organisationIcon: '/spotify-logo.png',
      opportunityTitle: 'Accountant',
      tags: ['Full time', 'Middle level', 'Distant'],
      date: '5 June, 2024',
      salary: '$4,000/month',
      location: 'Singapore',
    },
    {
      organisationTitle: 'Facebook',
      organisationIcon: '/Facebook-logo.png',
      opportunityTitle: 'Senior Product Designer',
      tags: ['Full time', 'Senior level', 'On-site'],
      date: '10 Jul, 2024',
      salary: '$70/hr',
      location: 'Menlo Park, CA',
    },
    {
      organisationTitle: 'Netflix',
      organisationIcon: '/netflix-logo.jpg',
      opportunityTitle: 'Creative Director',
      tags: ['Full time', 'Executive level', 'Distant'],
      date: '15 Aug, 2024',
      salary: '$50/hr',
      location: 'Los Angeles, CA',
    },
    {
      organisationTitle: 'Agoda',
      organisationIcon: '/agoda-logo.png',
      opportunityTitle: 'Senior Brand Designer',
      tags: ['Part time', 'Senior level', 'Distant'],
      date: '22 Sep, 2024',
      salary: '$190/hr',
      location: 'Remote',
    },
    {
      organisationTitle: 'Singapore Airlines',
      organisationIcon: '/sq-logo.jpg',
      opportunityTitle: 'Senior Business Development',
      tags: ['Full time', 'Senior level'],
      date: '22 Oct, 2024',
      salary: '$5,500/month',
      location: 'Singapore',
    },
    {
      organisationTitle: 'Guoco Land',
      organisationIcon: '/Guocoland-logo.webp',
      opportunityTitle: 'Junior System Developer',
      tags: ['Full time', 'Entry level'],
      date: '27 Sep, 2024',
      salary: '$3,500/month',
      location: 'Singapore',
    }
  ];

  sortByUpdated() {
    this.jobOpportunities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  
}
