import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = "Esteban Vásquez"
  profession = "Desarrollador Web"
  description =
    "Me especializo en crear aplicaciones web modernas y responsivas utilizando tecnologías como Angular, Firebase y Node.js. Tengo experiencia en el desarrollo de aplicaciones de una sola página (SPA) y en la integración de APIs RESTful."
  additionalInfo =
    "Tengo pasión por aprender nuevas tecnologías y resolver problemas complejos. Cuando no estoy programando, disfruto de la música y los videojuegos."

  githubUrl = "https://github.com/TebanV07"
}
