export interface Project {
    title: string
    description: string
    url: string
    imageUrl?: string
    platform: ProjectPlatforms,
    tags: string[]
}

enum ProjectPlatforms {
    TelegramBot = "Telegram Bot",
    WebApp = "Web App",
}
export const projects: Project[] = [
    {
        title: "Khatam Planner",
        description: "Generate a khatam plan around prayer timings.",
        url: "https://khatam-planner.jariyah.app",
        imageUrl: "https://media.publit.io/file/projectassets/khatam-planner.jpg",
        platform: ProjectPlatforms.WebApp,
        tags: ["Islamic"]
    },
    {
        title: "Khatam Challenge Bot",
        description: "Khatam with your loved ones on Telegram",
        url: "https://t.me/khatam_challenge_bot",
        imageUrl: "https://media.publit.io/file/projectassets/kcb-logo.webp",
        platform: ProjectPlatforms.TelegramBot,
        tags: ["Islamic"]
    },
    {
        title: "Basic Budget Bot",
        description: "Track your family budget on Telegram",
        url: "https://t.me/basic_budget_bot",
        imageUrl: "https://media.publit.io/file/projectassets/bbb-logo.webp",
        platform: ProjectPlatforms.TelegramBot,
        tags: ["Finance"]
    },
    {
        title: "Impactbit",
        description: "Grow your impact by contributing monthly",
        url: "https://impactbit.waktanjong.org/?ref=2802210542canva",
        imageUrl: "https://media.publit.io/file/projectassets/impactbit-logo.webp",
        platform: ProjectPlatforms.WebApp,
        tags: ["Islamic", "Donation"]
    },
    {
        title: "Websheets",
        description: "Build websites with just Google Sheets",
        url: "https://websheets.co",
        imageUrl: "https://media.publit.io/file/projectassets/websheets-logo.webp",
        platform: ProjectPlatforms.WebApp,
        tags: ["Web Builder"]
    },
    {
        title: "Additive Halal Checker",
        description: "Check if an e-code additive is halal",
        url: "https://ecodehalalcheck.com/",
        imageUrl: "https://media.publit.io/file/projectassets/ehc-logo.webp",
        platform: ProjectPlatforms.WebApp,
        tags: ["Islamic"]
    },
    {
        title: "Mahram Checker",
        description: "Check if a relative is your mahram",
        url: "https:///mahramcheck.com",
        platform: ProjectPlatforms.WebApp,
        tags: ["Islamic"]
    }
]