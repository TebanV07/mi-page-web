import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = "vasquezesteban541@gmail.com"
  phone = "+593 96 744 6056"
  location = "Cuenca, Ecuador"

  githubUrl = "https://github.com/TebanV07"

  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  formSubmitted = false

  onSubmit() {
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log("Formulario enviado:", this.formData)

    // Simular envío exitoso
    this.formSubmitted = true

    // Resetear formulario después de 5 segundos
    setTimeout(() => {
      this.formSubmitted = false
      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    }, 5000)
  }
}
  