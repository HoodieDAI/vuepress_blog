module.exports = {
  port: "3000",
  dest: "dist",
  ga: "UA-xxxxx-1",
  base: "/",
  markdown: {
    lineNumbers: true,
    externalLinks: {
      target: '_blank', rel: 'noopener noreferrer'
    }
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Gavin Home",
      description: "包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL, ElasticSearch, MongoDB, Docker, k8s, CI&CD, Linux, DevOps, 分布式, 中间件, 开发工具, Git, IDE, 源码阅读，读书笔记, 开源项目..."
    }
  },
  head: [
    // ico
    ["link", {rel: "icon", href: `/favicon.ico`}],
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "pdai"}],
    ["meta", {
      name: "keywords",
      content: "Java 全栈知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础"
    }],
    ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
  ],
  plugins: [
    {
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET'
      },
    },
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['vuepress-plugin-code-copy', true]
  ],
  themeConfig: {
    // repo: "realpdai/tech-arch-doc",
    docsRepo: "realpdai/tech-arch-doc",
    // logo: "/logo.png",
    editLinks: true,
    sidebarDepth: 0,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Languages",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [],
        sidebar: {}
      }
    }
  }
};