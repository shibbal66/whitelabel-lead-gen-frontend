export const brandingConfig = {
  brand: {
    appName: "MyReelDream AI",
    wordmarkFirst: "MyReelDream",
    wordmarkSecond: "AI",
    companyName: "MyReelDream.ai",
    address: "United States",
    supportEmail: "support@myreeldream.ai",
    logoSrc: "/rapidai.png",
    faviconSrc: "/favicon.ico",
  },

  seo: {
    title: "MyReelDream AI — Cinematic Storytelling Powered by AI",
    description:
      "Create cinematic invitations, celebrations, promotional films, and short stories using AI-powered storytelling automation.",
    author: "MyReelDream.ai",
    ogImage: "/og-image.png",
  },

  features: {
    enableBilling: true,
    enableAnalytics: true,
    enableMeetings: true,
    enableCampaigns: true,
  },

  theme: {
    light: {
      primary: "220 85% 48%",          // #1247D8
      primaryForeground: "0 0% 100%",
      primaryHover: "221 78% 42%",
      primaryGlow: "215 100% 70%",

      brandDeep: "225 95% 18%",        // Deep navy
      brandText: "217 100% 52%",       // Electric blue

      secondary: "215 60% 96%",
      secondaryForeground: "225 95% 18%",

      muted: "215 40% 96%",
      mutedForeground: "220 20% 40%",

      border: "215 35% 88%",
      input: "215 35% 88%",
      ring: "220 85% 48%",

      sidebarBackground: "220 50% 98%",
      sidebarForeground: "225 95% 18%",

      sidebarPrimary: "220 85% 48%",
      sidebarPrimaryForeground: "0 0% 100%",

      sidebarAccent: "210 100% 92%",
      sidebarAccentForeground: "225 95% 18%",

      sidebarBorder: "215 35% 88%",
      sidebarRing: "220 85% 48%",

      dotColor: "215 45% 82%",
    },

    dark: {
      primary: "217 100% 55%",         // Bright blue
      primaryForeground: "0 0% 100%",
      primaryHover: "220 100% 62%",
      primaryGlow: "210 100% 65%",

      brandDeep: "225 95% 10%",        // Near-black navy
      brandText: "210 100% 72%",       // Cyan-blue

      secondary: "223 40% 15%",
      secondaryForeground: "210 40% 96%",

      muted: "223 35% 14%",
      mutedForeground: "210 25% 70%",

      border: "223 35% 20%",
      input: "223 35% 20%",
      ring: "217 100% 55%",

      sidebarBackground: "228 70% 8%",
      sidebarForeground: "210 40% 96%",

      sidebarPrimary: "217 100% 55%",
      sidebarPrimaryForeground: "0 0% 100%",

      sidebarAccent: "223 35% 16%",
      sidebarAccentForeground: "210 40% 96%",

      sidebarBorder: "223 35% 20%",
      sidebarRing: "217 100% 55%",

      dotColor: "223 30% 28%",
    },
  },

  sidebar: {
    items: [
      { to: "/dashboard", label: "Dashboard", icon: "LayoutGrid" },
      { to: "/leads", label: "Leads", icon: "Users", featureFlag: "enableCampaigns" },
      { to: "/campaigns", label: "Campaigns", icon: "Megaphone", featureFlag: "enableCampaigns" },
      { to: "/meetings", label: "Meetings", icon: "Calendar", featureFlag: "enableMeetings" },
      { to: "/analytics", label: "Analytics", icon: "BarChart3", featureFlag: "enableAnalytics" },
      { to: "/notifications", label: "Notifications", icon: "Bell" },
      { to: "/settings", label: "Settings", icon: "Settings" },
    ]
  },

  homePage: {
    hero: {
      badge: "AI-Powered Cinematic Storytelling",
      title: "Don't Just Say It",
      highlightedText: "Show It",
      description:
        "Create cinematic invitations, celebrations, promotional films, and short stories using AI. Turn ideas into unforgettable visual experiences in minutes.",
      ctaPrimary: "Create Your Story Today",
      ctaSecondary: "Watch Demo",
    },

    stats: [
      { value: "10x", label: "Faster video creation" },
      { value: "AI", label: "Powered storytelling" },
      { value: "24/7", label: "Content generation" },
    ],

    features: [
      {
        icon: "Users", // Use available lucide icons (Users, Mail, MessageSquare, CalendarDays, BarChart3, Zap)
        title: "AI Story Creation",
        description:
          "Generate cinematic stories, scenes, and narratives from simple prompts.",
      },
      {
        icon: "Mail",
        title: "Cinematic Invitations",
        description:
          "Create unforgettable invitations for weddings, birthdays, and special events.",
      },
      {
        icon: "MessageSquare",
        title: "Promotional Films",
        description:
          "Produce engaging marketing videos and brand stories with AI.",
      },
      {
        icon: "CalendarDays",
        title: "Creative Automation",
        description:
          "Automate script writing, visual concepts, and storytelling workflows.",
      },
      {
        icon: "BarChart3",
        title: "Performance Analytics",
        description:
          "Track engagement and campaign performance across content assets.",
      },
      {
        icon: "Zap",
        title: "AI Marketing Agents",
        description:
          "Lead discovery, qualification, outreach, content creation, and reporting agents.",
      },
    ],

    steps: [
      {
        step: "01",
        title: "Share your idea",
        description: "Describe your story concept, theme, or event details."
      },
      {
        step: "02",
        title: "AI Story Drafting",
        description: "Our system generates scripts, scene breakdowns, and templates."
      },
      {
        step: "03",
        title: "Cinematic Generation",
        description: "Watch your concepts transform into stunning video sequences."
      },
      {
        step: "04",
        title: "Publish & Share",
        description: "Share invitation links, celebration streams, or marketing campaigns."
      }
    ],

    benefits: [
      "Stunning cinematic output in minutes",
      "Personalized scripts matching your event theme",
      "Flexible aspect ratios (16:9, 9:16)",
      "AI narrator voices and background scores",
      "Ultra-fast rendering on high-tier GPUs"
    ],

    testimonial: {
      quote: "MyReelDream turned our wedding invite into a Hollywood-style trailer. Everyone was blown away!",
      author: "Hosts & content creators using MyReelDream AI for events and stories",
    }
  },
};