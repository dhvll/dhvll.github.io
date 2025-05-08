import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router"
import { RootLayout } from "../layouts/root"
import { HomePage } from "../pages/home"
import { AboutPage } from "../pages/about"
import { ProjectsPage } from "../pages/projects"
import { ContactPage } from "../pages/contact"
import { BlogPage } from "../pages/blog"

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
})

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  blogRoute,
  contactRoute,
])

export const router = createRouter({ routeTree })
