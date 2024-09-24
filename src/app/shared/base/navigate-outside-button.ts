export abstract class NavigateOutsideButton
{
  private _href!: string;

  constructor(href: string) {
    this._href = href;
  }

  protected navigateOutside = () => window.open(this._href, "_blank");
}
