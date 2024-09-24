import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const toggleTrigger = [
  trigger("toggle", [
    transition(":enter", [
      query("li", [
        style({ position: 'relative', right: "-40rem" }),
      ]),

      style({ width: 0 }),
      animate(".1s ease", style({ width: "*" })),

      query("li", [
        stagger(".05s", animate(".2s ease", style({ position: 'relative', right: "0" })))
      ]),
    ]),

    transition(":leave", [
      query("li", [
        style({ position: 'relative', right: "0" }),
      ]),

      query("li", [
        stagger("-.05s", animate(".2s ease", style({ position: 'relative', right: "-40rem" })))
      ]),

      style({ width: "*" }),
      animate(".1s ease", style({ width: 0 })),
    ])
  ])
];
