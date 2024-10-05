import { HostListener, Injectable, OnInit } from "@angular/core";

@Injectable()
export abstract class ListPagination<TEntity> implements ListWithPaging, OnInit
{
  protected filteredRecords: Array<TEntity> = [];
  protected abstract records: Array<TEntity>;
  protected abstract getMaximumRecordsPerPage(): number;

  protected numberOfPages!: number;

  protected _screenCoords: { width: number; height: number } = { width: 0, height: 0 };
  protected currentPage: number = 1;

  public ngOnInit(): void {
    this.updateCoordsAndPages();

    window.addEventListener('resize', () => {
      this.updateCoordsAndPages();
    })
  }

  private updateCoordsAndPages() {
    this.updateScreenCoords();
    this.updatePages();
  }

  private updatePages()
  {
    const numberOfRecords = this.getMaximumRecordsPerPage();
    this.numberOfPages = Math.ceil(this.records.length / numberOfRecords);

    const startIndex = (this.currentPage - 1) * numberOfRecords;
    const endIndex = this.currentPage * numberOfRecords;
    this.filteredRecords = this.records.slice(startIndex, endIndex);
  }

  private updateScreenCoords()
  {
    const height = window.innerHeight;
    const width = window.innerWidth;

    this._screenCoords = { height, width };
  }

  public changeCurrentPage = (pageNumber: number) =>
    {
      this.currentPage = pageNumber;
      this.updatePages();
    }
}

interface ListWithPaging {
  changeCurrentPage: (pageNumber: number) => void;
}
