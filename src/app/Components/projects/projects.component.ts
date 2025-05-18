import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "E-commerce App",
      description:
        "Una aplicación de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      image: "/e-ccomerce.jpg",  // Ruta corregida
      technologies: ["Angular", "Node.js", "Express", "MongoDB"],
      codeUrl: "https://github.com/TebanV07/catalogoprod",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Panel de control para visualizar datos analíticos con gráficos interactivos y reportes personalizables.",
      image: "/Imagen2.png",
      technologies: ["Angular", "TypeScript", "Chart.js", "Firebase"],
      codeUrl: "https://github.com/tunombre/dashboard",
    },
    {
      title: "Blog Personal",
      description: "Plataforma de blog con sistema de gestión de contenidos y comentarios.",
      image: "/Imagen3.png",  // Ruta corregida
      technologies: ["Angular", "Node.js", "MySQL"],
      codeUrl: "https://github.com/tunombre/blog",
    },
  ]
}
