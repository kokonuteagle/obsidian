import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const githubRepo = process.env.GITHUB_REPOSITORY ?? ""
const [owner, repo] = githubRepo.split("/")
const isUserPage = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`

const inferredBaseUrl = process.env.QUARTZ_BASE_URL
  ? process.env.QUARTZ_BASE_URL
  : owner && repo
    ? isUserPage
      ? `${owner}.github.io`
      : `${owner}.github.io/${repo}`
    : "example.github.io/knowledge-constellation-quartz"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "사유의 항성도",
    pageTitleSuffix: " · Knowledge Constellation",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: inferredBaseUrl,
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Noto Serif KR",
        header: "Noto Serif KR",
        body: "Noto Sans KR",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f5ef",
          lightgray: "#dfddd6",
          gray: "#9a968d",
          darkgray: "#4f4a43",
          dark: "#1f2328",
          secondary: "#1f4b67",
          tertiary: "#846a42",
          highlight: "rgba(31, 75, 103, 0.12)",
          textHighlight: "#f4d96b88",
        },
        darkMode: {
          light: "#101317",
          lightgray: "#2b3037",
          gray: "#7b818a",
          darkgray: "#d7dce2",
          dark: "#f4f5f7",
          secondary: "#7cb5d6",
          tertiary: "#c9ac77",
          highlight: "rgba(124, 181, 214, 0.15)",
          textHighlight: "#a9891188",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
