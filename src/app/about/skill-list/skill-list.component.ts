import { skills } from './../../../variables/skills';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent implements OnInit{
  public skills = skills

  public currentPage: number = 1;
  public numberOfPages!: number;

  public ngOnInit(): void {
    this.updatePages(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updatePages(window.innerHeight);
  }

  private updatePages(screenHeight: number) {
    const numberOfRecords = this.getNumberOfRecords(screenHeight);
    this.numberOfPages = Math.ceil(skills.length / numberOfRecords);

    const startIndex = (this.currentPage - 1) * numberOfRecords;
    const endIndex = this.currentPage * numberOfRecords;
    this.skills = skills.slice(startIndex, endIndex);
  }

  private getNumberOfRecords(screenHeight: number): number {
    if (screenHeight >= 1300) return skills.length + 1;
    else if (screenHeight >= 800) return 15;
    else if (screenHeight >= 730) return 8;
    else if (screenHeight >= 600) return 6;
    return 4;
  }

  public changeCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber + 1;
    this.updatePages(window.innerWidth);
  }
}
