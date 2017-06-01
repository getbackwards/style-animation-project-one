import {animate, group, state, style, transition, trigger} from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    'background-color': '#5cb85c',
    borderColor: 'green',
    color: '#fff'
  })),
  state('invalid', style({
    backgroundColor: '#555',
    borderColor: '#333',
    color: '#fff'
  })),
  transition('invalid => valid', [
    group([
      animate(100), style({
        transform: 'scale(1.1)'
      }),
      animate(200, style({
        backgroundColor: '#5cb85c'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate(100), style({
        transform: 'scale(1.1)'
      }),
      animate(200, style({
        backgroundColor: '#555'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
]);
