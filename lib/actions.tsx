"use server";

import { revalidatePath } from "next/cache";
import Portfolio from "./models/Portfolio";
import { dbConnect } from "@/lib/mongoose";

export async function savePortfolio(formData: FormData) {
  try {
    await dbConnect();

    const portfolioData = {
      story: {
        name: formData.get("name"),
        content: {
          Hero: [
            {
              title: formData.get("heroTitle"),
              picture: { filename: formData.get("heroPictureFilename") },
              description: formData.get("heroDescription"),
              cta_button_link: formData.get("heroCTALink"),
              cta_button_text: formData.get("heroCTAText"),
            },
          ],
          Contact: [
            {
              email: formData.get("contactEmail"),
              title: formData.get("contactTitle"),
              githubProfile: formData.get("contactGithub"),
              linkedinProfile: formData.get("contactLinkedin"),
            },
          ],
          Services: [
            {
              title: formData.get("servicesTitle"),
              service_cards: [
                {
                  title: formData.get("serviceCardTitle"),
                  subtitle: formData.get("serviceCardSubtitle"),
                  FrameWork: formData.get("serviceCardFramework"),
                  ProjectLink: formData.get("serviceCardProjectLink"),
                  description: formData.get("serviceCardDescription"),
                  image: formData.get("serviceCardImage"),
                },
              ],
            },
          ],
          Nav_Section: [
            {
              title: formData.get("navTitle"),
              cta_button_text: formData.get("navCTAText"),
            },
          ],
          Achievements: [
            {
              title: formData.get("achievementsTitle"),
              Achievement_cards: [
                {
                  Name: formData.get("achievementCardName"),
                  comment: formData.get("achievementCardComment"),
                  picture: {
                    filename: formData.get("achievementCardPictureFilename"),
                  },
                },
              ],
            },
          ],
        },
      },
    };

    const portfolio = new Portfolio(portfolioData);
    await portfolio.save();

    revalidatePath("/portfolio");
    return { message: "Portfolio saved successfully" };
  } catch (error) {
    console.error("Failed to save portfolio:", error);
    return { error: "Failed to save portfolio" };
  }
}
export async function getPortfolio() {
  try {
    await dbConnect();

    const portfolio = await Portfolio.findOne().lean();

    if (!portfolio) {
      throw new Error("No portfolio found");
    }
    if (Array.isArray(portfolio)) {
      throw new Error("Unexpected array response");
    }

    const { story } = portfolio;
    return JSON.parse(JSON.stringify({ story }));
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
    throw new Error("Failed to fetch portfolio");
  }
}
