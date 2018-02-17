import { trigger, animate, transition, style, query } from '@angular/animations';
import { appSettings } from "../../app-settings";

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition( '* => *', [
      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),
      query(':leave',
        [
          style({ opacity: 1 }),
          animate('200ms', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(':enter',
        [
          style({ opacity: 0 }),
          animate('200ms', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);
