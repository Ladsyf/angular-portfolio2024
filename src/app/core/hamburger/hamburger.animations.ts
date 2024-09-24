import { trigger, state, style, transition, query, animate } from "@angular/animations";

const FULL_SPAN_WIDTH = "30px";
const HALF_SPAN_WIDTH = "20px";

const EASE_TIME = ".2s ease";

const animateWidthWithDefaultEase = (width: string) =>
{
  return animate(EASE_TIME, style({ width }));
};

const animateWidth = {
  full: () => animateWidthWithDefaultEase(FULL_SPAN_WIDTH),
  half: () => animateWidthWithDefaultEase(HALF_SPAN_WIDTH),
  zero: () => animateWidthWithDefaultEase("0")
}

const styleWidth = {
  full: () => style({ width: FULL_SPAN_WIDTH }),
  half: () => style({ width: HALF_SPAN_WIDTH }),
  zero: () => style({ width: "0" })
}

export const toggleTrigger = [
  trigger("toggle", [
    state("closed", styleWidth.full()),

    state("opened", styleWidth.full()),

    transition("closed => opened", [
      query("span", [
        style({ transform: 'rotate(0deg)', position: 'static' }),
        animateWidth.zero()
      ]),

      query(".full-first", [
        style({ transform: 'rotate(-45deg)', width: 0, position: 'relative', top: '4px', right: '5px' }),
        animateWidth.full()
      ]),

      query(".full", [
        style({ transform: 'rotate(45deg)', position: 'relative', transformOrigin: 'center' }),
        animateWidth.full()
      ]),
    ]),

    transition("opened => closed", [
      query(".full-first", [
        style({ width: FULL_SPAN_WIDTH, transform: 'rotate(-45deg)', position: 'relative', top: '4px', right: '5px', transformOrigin: "top right" }),
      ]),

      query(".full", [
        style({ transform: 'rotate(45deg)', position: 'relative', transformOrigin: 'center' }),
      ]),

      query(".half", [
        styleWidth.zero()
      ]),

      query(".full-first", [
        animate(".2s ease", styleWidth.zero())
      ]),

      query(".full", animateWidth.zero()),

      query(".full-first", [
        style({ position: 'static', transform: 'rotate(0)' }),
        animateWidth.full()
      ]),

      query('.full', [
        style({ position: 'static', transform: 'rotate(0)' }),
        animateWidth.full()
      ]),

      query(".half", [
        animateWidth.half()
      ])
    ])
  ])
]
