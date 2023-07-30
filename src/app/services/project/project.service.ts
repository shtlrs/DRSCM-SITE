import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectUrl = 'Amrdog.com'

  constructor(
    private http: HttpClient
  ) { }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectUrl, project)
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(this.projectUrl + '/' + id)
  }

  
}
