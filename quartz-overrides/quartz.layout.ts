import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const githubRepo = process.env.GITHUB_REPOSITORY
const githubUrl = githubRepo ? `https://github.com/${githubRepo}` : "https://github.com/jackyzha0/quartz"

const sidebarControls = Component.Flex({
  components: [
    {
      Component: Component.Search(),
      grow: true,
    },
    { Component: Component.Darkmode() },
    { Component: Component.ReaderMode() },
  ],
})

const leftSidebar = [Component.PageTitle(), sidebarControls, Component.Explorer()]
const rightSidebar = [
  Component.Graph(),
  Component.DesktopOnly(Component.TableOfContents()),
  Component.Backlinks(),
]

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: githubUrl,
      Quartz: "https://quartz.jzhao.xyz/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: leftSidebar,
  right: rightSidebar,
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: leftSidebar,
  right: rightSidebar,
}
