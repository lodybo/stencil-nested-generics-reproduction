import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import { format } from '../../utils/utils';
import { Currency } from '../../types/Currency';
import { MyEvent } from '../../types/MyEvent';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() myChange: EventEmitter<MyEvent<Currency>>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
