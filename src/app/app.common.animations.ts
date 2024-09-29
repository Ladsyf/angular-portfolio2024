import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

const enterTransition = transition(':enter',
  [
    query('*',
      [style({ opacity: 0, scale: 0 }),
      stagger('.05s', animate('.2s .3s ease')),
      ]
    )
  ]
)

const exitTransition = transition(':leave',
  [
    query('*',
      [style({ opacity: "*", scale: "*" }),
      animate('.2s ease', style({ scale: "0", opacity: "0" })),
      ]
    ),
  ]
);

export const pageAnimationTransition = trigger("animatePage", [
  enterTransition,
  exitTransition
])
