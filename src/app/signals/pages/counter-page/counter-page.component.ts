import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  increaseBy(value: number) {
    this.counter.set(this.counter() + value);
  }

  public counter = signal(10);
  public squeareCounter = computed(() => this.counter() * this.counter());
}
