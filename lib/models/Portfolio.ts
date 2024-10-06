import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema({
  story: {
    name: { type: String, required: true },
    currentStatus: { type: String, required: true },
    content: {
      Hero: [{
        title: { type: String, required: true },
        picture: { 
          filename: { type: String, required: true }
        },
        description: { type: String, required: true },
        cta_button_link: { type: String, required: true },
        cta_button_text: { type: String, required: true },
      }],
      Contact: [{
        email: { type: String, required: true },
        title: { type: String, required: true },
        githubProfile: { type: String, required: true },
        linkedinProfile: { type: String, required: true },
      }],
      Projects: [{
        title: { type: String, required: true },
        project_cards: [{
          title: { type: String, required: true },
          subtitle: { type: String, required: true },
          technologies: { type: String, required: true },
          projectLink: { type: String, required: true },
          description: { type: String, required: true },
          image: { type: String, required: true },
        }],
      }],
      Nav_Section: [{
        title: { type: String, required: true },
        cta_button_text: { type: String, required: true },
      }],
      Achievements: [{
        title: { type: String, required: true },
        Achievement_cards: [{
          name: { type: String, required: true },
          comment: { type: String, required: true },
          picture: { 
            filename: { type: String, required: true }
          },
        }],
      }],
    },
  },
},{
  timestamps: true
})

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema)

export default Portfolio