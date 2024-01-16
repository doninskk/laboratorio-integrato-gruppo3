import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit{
  popularTeams: any[] = []; // Assuming each team has a 'name' and 'id' property
  searchQuery: string = '';


  constructor(private router: Router) {}

  ngOnInit() {
    this.popularTeams = [
      { id: 741, name: 'Cisterna',idLeague: 97, id_season:2023 },
      { id: 737, name: 'Lube Civitanova',idLeague: 97, id_season:2023 },
      { id: 742, name: 'Milano',idLeague: 97, id_season:2023 },
      { id: 738, name: 'Modena',idLeague: 97, id_season:2023 },
      { id: 743, name: 'Monza',idLeague: 97, id_season:2023 },
      { id: 744, name: 'Padova',idLeague: 97, id_season:2023 },
      { id: 745, name: 'Piacenza' ,idLeague: 97, id_season:2023},
      { id: 751, name: 'Taranto',idLeague: 97, id_season:2023 },
      { id: 740, name: 'Trentino',idLeague: 97, id_season:2023 },
      { id: 747, name: 'Verona',idLeague: 97, id_season:2023 },
    ];
  }

  search() {
    // Implement your search logic here
    // You can use the value of this.searchQuery to perform the search
    console.log('Searching for:', this.searchQuery);
    // Update the search results based on your actual search implementation
  }

  redirectToTeamPage(team: any) {
    // Redirect to the team page based on the team id
    this.router.navigate(['/team', team.id, team.idLeague,team.id_season ]);
  }
}

