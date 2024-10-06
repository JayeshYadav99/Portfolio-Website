'use client'

import React, { useState, useEffect } from 'react'
import { useForm, SubmitHandler, FormProvider, useFieldArray } from 'react-hook-form'
import { User, Mail, Github, Linkedin, Briefcase, Award, Image, Link, Type, FileText, Layout, ChevronLeft, ChevronRight, Plus, Minus, BookOpen, Code } from 'lucide-react'
import { getPortfolio } from '@/lib/actions';

interface ProjectCard {
  title: string;
  subtitle: string;
  technologies: string;
  projectLink: string;
  description: string;
  image: string;
}

interface AchievementCard {
  name: string;
  comment: string;
  pictureFilename: string;
}

interface FormInputs {
  name: string;
  currentStatus: string;
  heroTitle: string;
  heroPictureFilename: string;
  heroDescription: string;
  heroCTALink: string;
  heroCTAText: string;
  contactEmail: string;
  contactTitle: string;
  contactGithub: string;
  contactLinkedin: string;
  projectsTitle: string;
  projectCards: ProjectCard[];
  navTitle: string;
  navCTAText: string;
  achievementsTitle: string;
  achievementCards: AchievementCard[];
}

const steps = ['Basic Info', 'Hero', 'Contact', 'Projects', 'Navigation', 'Achievements']
interface PortfolioFormProps {
  initialData: any;
}

export default function MultiStepPortfolioForm({ initialData }: PortfolioFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const methods = useForm<FormInputs>({
    defaultValues: {
      name: initialData.name,
      currentStatus: initialData.currentStatus || '',
      heroTitle: initialData.content.Hero[0].title,
      heroPictureFilename: initialData.content.Hero[0].picture.filename,
      heroDescription: initialData.content.Hero[0].description,
      heroCTALink: initialData.content.Hero[0].cta_button_link,
      heroCTAText: initialData.content.Hero[0].cta_button_text,
      contactEmail: initialData.content.Contact[0].email,
      contactTitle: initialData.content.Contact[0].title,
      contactGithub: initialData.content.Contact[0].githubProfile,
      contactLinkedin: initialData.content.Contact[0].linkedinProfile,
      projectsTitle: initialData.content.Projects[0].title,
      projectCards: initialData.content.Projects[0].service_cards,
      navTitle: initialData.content.Nav_Section[0].title,
      navCTAText: initialData.content.Nav_Section[0].cta_button_text,
      achievementsTitle: initialData.content.Achievements[0].title,
      achievementCards: initialData.content.Achievements[0].Achievement_cards.map((card: any) => ({
        name: card.name,
        comment: card.comment,
        pictureFilename: card.picture.filename
      }))
    }
  })
  const { handleSubmit, formState: { errors }, control, reset } = methods
  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: "projectCards"
  });
  const { fields: achievementFields, append: appendAchievement, remove: removeAchievement } = useFieldArray({
    control,
    name: "achievementCards"
  });

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const {story} = await getPortfolio()
        console.log("story")
        if (story) {
            console.log("story", story);
            reset(
                {
                name: story.name,
                currentStatus: story.currentStatus || '',
                heroTitle: story.content.Hero[0].title,
                heroPictureFilename: story.content.Hero[0].picture.filename,
                heroDescription: story.content.Hero[0].description,
                heroCTALink: story.content.Hero[0].cta_button_link,
                heroCTAText: story.content.Hero[0].cta_button_text,
                contactEmail: story.content.Contact[0].email,
                contactTitle: story.content.Contact[0].title,
                contactGithub: story.content.Contact[0].githubProfile,
                contactLinkedin: story.content.Contact[0].linkedinProfile,
                projectsTitle: story.content.Projects[0].title,
                projectCards: story.content.Projects[0].project_cards,
                navTitle: story.content.Nav_Section[0].title,
                navCTAText: story.content.Nav_Section[0].cta_button_text,
                achievementsTitle: story.content.Achievements[0].title,
                achievementCards: story.content.Achievements[0].Achievement_cards.map((card: any) => ({
                  name: card.name,
                  comment: card.comment,
                  pictureFilename: card.picture.filename
                }))
            })
          
        } else {
          console.error('Failed to fetch portfolio data')
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      }
    }

    fetchPortfolioData()
  }, [reset])

  const onSubmit: SubmitHandler<FormInputs> = async (data,event) => {
    console.log(event)
    event?.preventDefault();
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value))
      } else {
        formData.append(key, value as string)
      }
    })

    try {
        alert("Form is submitted");
        console.log(formData.get("achievementCards"));
      const response = await fetch('/api/savePortfolio', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (response.ok) {
        console.log('Success:', result)
        // Handle success (e.g., show a success message)
      } else {
        console.error('Error:', result)
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error)
      // Handle error (e.g., show an error message)
    }
  }

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent form submission
    console.log("Next clicked", event.type);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const InputWithIcon = ({ icon: Icon, label, name, type = "text", required = false }: { icon: React.ElementType, label: string, name: keyof FormInputs, type?: string, required?: boolean }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          {...methods.register(name, { required: required ? `${label} is required` : false })}
          type={type}
          id={name}
          className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>}
    </div>
  )

  const TextAreaWithIcon = ({ icon: Icon, label, name, required = false }: { icon: React.ElementType, label: string, name: keyof FormInputs, required?: boolean }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute top-3 left-3 pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <textarea
          {...methods.register(name, { required: required ? `${label} is required` : false })}
          id={name}
          rows={3}
          className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>}
    </div>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Basic Information</h3>
            <InputWithIcon icon={User} label="Name" name="name" required={true} />
            <InputWithIcon icon={BookOpen} label="Current Status" name="currentStatus" required={true} />
          </div>
        )
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Hero Section</h3>
            <InputWithIcon icon={Type} label="Title" name="heroTitle" />
            <InputWithIcon icon={Image} label="Picture filename" name="heroPictureFilename" />
            <TextAreaWithIcon icon={FileText} label="Description" name="heroDescription" />
            <InputWithIcon icon={Link} label="CTA Button Link" name="heroCTALink" />
            <InputWithIcon icon={Type} label="CTA Button Text" name="heroCTAText" />
          </div>
        )
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">Contact Section</h3>
            <InputWithIcon icon={Mail} label="Email" name="contactEmail" type="email" />
            <InputWithIcon icon={Type} label="Title" name="contactTitle" />
            <InputWithIcon icon={Github} label="GitHub Profile" name="contactGithub" />
            <InputWithIcon icon={Linkedin} label="LinkedIn Profile" name="contactLinkedin" />
          </div>
        )
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Projects Section</h3>
            <InputWithIcon icon={Type} label="Projects Title" name="projectsTitle" />
            {projectFields.map((field, index) => (
              <div key={field.id} className="mt-4 p-4 border border-gray-200 rounded-md">
                <h4 className="text-lg font-bold mb-2 text-blue-600">Project Card {index + 1}</h4>
                <InputWithIcon icon={Type} label="Project Title" name={`projectCards.${index}.title` as keyof FormInputs} />
                <InputWithIcon icon={Type} label="Subtitle" name={`projectCards.${index}.subtitle` as keyof FormInputs} />
                <InputWithIcon icon={Code} label="Technologies" name={`projectCards.${index}.technologies` as keyof FormInputs} />
                <InputWithIcon icon={Link} label="Project Link" name={`projectCards.${index}.projectLink` as keyof FormInputs} />
                <TextAreaWithIcon icon={FileText} label="Description" name={`projectCards.${index}.description` as keyof FormInputs} />
                <InputWithIcon icon={Image} label="Image URL" name={`projectCards.${index}.image` as keyof FormInputs} />
                {projectFields.length > 1 && (
                  <button type="button" onClick={() => removeProject(index)} className="mt-2 text-red-600 hover:text-red-800">
                    <Minus className="inline-block mr-1" /> Remove this project
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendProject({ title: '', subtitle: '', technologies: '', projectLink: '', description: '', image: '' })}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              <Plus className="inline-block mr-1" /> Add another project
            </button>
          </div>
        )
      case 4:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-700">Navigation Section</h3>
            <InputWithIcon icon={Layout} label="Title" name="navTitle" />
            <InputWithIcon icon={Type} label="CTA Button Text" name="navCTAText" />
          </div>
        )
      case 5:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-700">Achievements Section</h3>
            <InputWithIcon icon={Type} label="Achievements Title" name="achievementsTitle" />
            {achievementFields.map((field, index) => (
              <div key={field.id} className="mt-4 p-4 border border-gray-200 rounded-md">
                <h4 className="text-lg font-bold mb-2 text-red-600">Achievement Card {index + 1}</h4>
                <InputWithIcon icon={Award} label="Achievement Name" name={`achievementCards.${index}.name`as keyof FormInputs} />
                <TextAreaWithIcon icon={FileText} label="Comment" name={`achievementCards.${index}.comment` as keyof FormInputs} />
                <InputWithIcon icon={Image} label="Picture filename" name={`achievementCards.${index}.pictureFilename` as keyof FormInputs} />
                {achievementFields.length > 1 && (
                  <button type="button" onClick={() => removeAchievement(index)} className="mt-2 text-red-600 hover:text-red-800">
                    <Minus className="inline-block mr-1" /> Remove this achievement
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendAchievement({ name: '', comment: '', pictureFilename: '' })}
              className="mt-4 text-red-600 hover:text-red-800"
            >
              <Plus className="inline-block mr-1" /> Add another achievement
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Portfolio Information</h2>
          
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <span key={step} className={`text-xs font-medium ${index <= currentStep ? 'text-blue-700' : 'text-gray-500'}`}>
                  {step}
                </span>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
            </div>
          </div>

          {renderStep()}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className={`bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${currentStep === 0 ? 'invisible' : 'hover:bg-gray-400'}`}
          >
            <ChevronLeft className="inline-block mr-1" /> Previous
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Next <ChevronRight className="inline-block ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  )
}