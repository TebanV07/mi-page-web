import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Skill {
  name: string
  level: number
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Angular", level: 80 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 85 },
  ]

  backendSkills: Skill[] = [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "SQL", level: 60 },
  ]

  otherSkills: Skill[] = [
    { name: "Git", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "UI/UX", level: 70 },
    { name: "Testing", level: 65 },
  ]
}
