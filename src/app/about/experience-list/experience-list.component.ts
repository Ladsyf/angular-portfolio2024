import { Component, HostListener, OnInit } from '@angular/core';
import { experiences } from './../../../variables/experience';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent implements OnInit {
  public experiences = experiences;

  public currentPage: number = 1;
  public numberOfPages!: number;

  public ngOnInit(): void {
    this.updatePages(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updatePages(window.innerWidth);
  }

  private updatePages(screenWidth: number) {
    const numberOfRecords = this.getNumberOfRecords(screenWidth);
    this.numberOfPages = Math.ceil(experiences.length / numberOfRecords);

    const startIndex = (this.currentPage - 1) * numberOfRecords;
    const endIndex = this.currentPage * numberOfRecords;
    this.experiences = experiences.slice(startIndex, endIndex);
  }

  private getNumberOfRecords(screenWidth: number): number {
    if (screenWidth >= 1300) return 3;
    else if (screenWidth >= 1000) return 2;
    else if (screenWidth >= 800) return 2;
    return 1;
  }

  public changeCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber + 1;
    this.updatePages(window.innerWidth);
  }
}
