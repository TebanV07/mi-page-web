import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  name = "Esteban Nicolás Vásquez Ortega"
  profession = "Desarrollador Web"
  currentYear = new Date().getFullYear()

  githubUrl = "https://github.com/TebanV07"
}
