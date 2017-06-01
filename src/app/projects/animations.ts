import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid #cdcdcd',
    'background-color': '#fff',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid cornflowerblue',
    'background-color': 'rgba(42, 168, 202, 0.05)',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid #cdcdcd',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.007)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid cornflowerblue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    animate('500ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(4%)',
        offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ]),
  transition(':leave', [
    animate('500ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(-4%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ])
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ])
]);

// Previous simpler version without keyframes form lecture 96
// export const itemStateTrigger = trigger('itemState', [
//   transition(':enter', [
//     style({
//       opacity: 0,
//       transform: 'translateX(-100%)'
//     }),
//     animate('500ms ease-out', style({
//       opacity: 1,
//       transform: 'translateX(0)'
//     }))
//   ]),
//   transition(':leave', [
//     animate('500ms ease-in', style({
//       opacity: 0,
//       transform: 'translateX(100%)'
//     }))
//   ])
// ]);
