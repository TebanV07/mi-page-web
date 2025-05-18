import { Component } from "@angular/core"
import { HeaderComponent } from "./Components/header/header.component"
import { AboutComponent } from "./Components/about/about.component"
import { SkillsComponent } from "./Components/skills/skills.component"
import { ProjectsComponent } from "./Components/projects/projects.component"
import { ContactComponent } from "./Components/contact/contact.component"
import { FooterComponent } from "./Components/footer/footer.component"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Mi Página Personal"
}
