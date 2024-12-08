import PortfolioContent from "../components/PortfolioContent";
import { headers } from "next/headers";

function getDomain(headersList: Headers) {
  return headersList.get("host") || "localhost:3000";
}

export default async function Home() {
  const headersList = headers();
  const domain = getDomain(headersList);
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const apiUrl = `${protocol}://${domain}`;
  const response = await fetch(`${apiUrl}/api/getPortfolio`, {
    cache: "force-cache",
  });
  const { story } = await response.json();
  const { name, currentStatus } = story;

  return (
    <>
      {story && (
        <PortfolioContent
          portfolioData={story.content}
          name={name}
          currentStatus={currentStatus}
        />
      )}
    </>
  );
}
