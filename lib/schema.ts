import { z } from 'zod'

export const ProjectCardSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  technologies: z.string().min(1, "Technologies are required"),
  projectLink: z.string().url("Invalid URL"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Image URL is required"),
})

export const AchievementCardSchema = z.object({
  name: z.string().min(1, "Name is required"),
  comment: z.string().min(1, "Comment is required"),
  pictureFilename: z.string().min(1, "Picture filename is required"),
})

export const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  currentStatus: z.string().min(1, "Current status is required"),
  heroTitle: z.string().min(1, "Hero title is required"),
  heroPictureFilename: z.string().min(1, "Hero picture filename is required"),
  heroDescription: z.string().min(1, "Hero description is required"),
  heroCTALink: z.string().url("Invalid URL"),
  heroCTAText: z.string().min(1, "CTA text is required"),
  contactEmail: z.string().email("Invalid email"),
  contactTitle: z.string().min(1, "Contact title is required"),
  contactGithub: z.string().min(2,"Github username is required"),
  contactLinkedin: z.string().min(2,"linkedIn username is required"),
  projectsTitle: z.string().min(1, "Projects title is required"),
  projectCards: z.array(ProjectCardSchema),
  navTitle: z.string().min(1, "Navigation title is required"),
  navCTAText: z.string().min(1, "Navigation CTA text is required"),
  achievementsTitle: z.string().min(1, "Achievements title is required"),
  achievementCards: z.array(AchievementCardSchema),
})

export type FormInputs = z.infer<typeof FormSchema>