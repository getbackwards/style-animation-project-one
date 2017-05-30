import {trigger, state, style, transition, animate} from '@angular/animations';

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
