import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {
  modify() {
    this.user.set({
      id: this.user().id + 1,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
    });
  }
  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  })

  efecto = effect(() => {
    console.log(`Efecto: ${this.user().id}`)
  })

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update(user => {
      switch (field) {
        case 'id': user.id = Number(value); break;
        case 'email': user.email = value; break;
        case 'first_name': user.first_name = (value); break;
        case 'last_name': user.last_name = (value); break;
      }
      return user;
    })
  }

}
