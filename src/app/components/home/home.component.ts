import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latestProject: Project | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProject('1').subscribe((data) => {
      this.latestProject = data;
    });
  }
}
