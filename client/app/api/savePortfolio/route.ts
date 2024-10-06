import { NextResponse } from 'next/server'
import { dbConnect } from '../../../lib/mongoose'
import Portfolio from '../../../lib/models/Portfolio'

export async function POST(request: Request) {
  try {
    await dbConnect();

    const formData = await request.formData()
    const serviceCards = JSON.parse(formData.get('serviceCards') as string)
    const achievementCards = JSON.parse(formData.get('achievementCards') as string)
    console.log('serviceCards:', serviceCards)
    console.log('achievementCards:', achievementCards)

    const portfolioData = {
      story: {
        name: formData.get('name'),
        content: {
          Hero: [{
            title: formData.get('heroTitle'),
            picture: { filename: formData.get('heroPictureFilename') },
            description: formData.get('heroDescription'),
            cta_button_link: formData.get('heroCTALink'),
            cta_button_text: formData.get('heroCTAText'),
          }],
          Contact: [{
            email: formData.get('contactEmail'),
            title: formData.get('contactTitle'),
            githubProfile: formData.get('contactGithub'),
            linkedinProfile: formData.get('contactLinkedin'),
          }],
          Services: [{
            title: formData.get('servicesTitle'),
            service_cards: serviceCards.map((card: any) => ({
              title: card.title,
              subtitle: card.subtitle,
              framework: card.framework,
              projectLink: card.projectLink,
              description: card.description,
              image: card.image,
            })),
          }],
          Nav_Section: [{
            title: formData.get('navTitle'),
            cta_button_text: formData.get('navCTAText'),
          }],
          Achievements: [{
            title: formData.get('achievementsTitle'),
            Achievement_cards: achievementCards.map((card: any) => ({
              name: card.name,
              comment: card.comment,
              picture: { filename: card.pictureFilename },
            })),
          }],
        },
      },
    }

    const portfolio = await Portfolio.create(portfolioData)
    
    console.log('Saved portfolio:', JSON.stringify(portfolio, null, 2))

    return NextResponse.json({ message: 'Portfolio saved successfully', portfolio }, { status: 200 })
  } catch (error) {
    console.error('Failed to save portfolio:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to save portfolio', details: errorMessage }, { status: 500 })
  }
}
