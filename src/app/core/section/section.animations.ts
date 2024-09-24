import { trigger, transition, group, query, style, animate } from "@angular/animations";


const DEFAULT_EASE = ".5s ease";

export const backgroundSlideTrigger = trigger("backgroundSlide", [
  transition(':decrement', [
    group(
      [
        query(":leave .background", [
          style({ top: "*" }),
          animate(DEFAULT_EASE, style({ top: "100%" }))
        ]),
        query(":enter .background", [
          style({ top: "-100%" }),
          animate(DEFAULT_EASE, style({ top: "*" }))
        ]),
      ]
    )
  ],),
  transition(":increment", [
    group(
      [
        query(":leave .background", [
          style({ top: "*" }),
          animate(DEFAULT_EASE, style({ top: "-100%" }))
        ]),
        query(":enter .background", [
          style({ top: "100%" }),
          animate(DEFAULT_EASE, style({ top: "*" }))
        ]),
      ]
    )
  ])
])
