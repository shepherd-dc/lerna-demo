# Lerna 多模块(包)管理

## 什么是 lerna？

lerna 官网上是这样描述的：

> A tool for managing JavaScript projects with multiple packages.
> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

lerna 是一个用来优化托管在 git/npm 上的多模块(package)代码库的工作流的管理工具。可以让你在主项目下管理多个子项目，从而解决了多个包互相依赖，且发布时需要手动维护多个包的问题。

lerna 是 Babel 团队针对 babel 子包多的情况，以 monorepo 的理念开源出的一个多包管理工具。lerna 现在已经被很多著名的项目组织使用，如：Babel, React, Vue, Angular, Ember, Meteor, Jest。

lerna 官网: [https://lerna.js.org](https://lerna.js.org/)
lerna 仓库: [https://github.com/lerna/lerna](https://github.com/lerna/lerna/)

## 什么是 monorepo？

monorepo 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。

monorepo 是相较于 multirepo 的。

- monorepo：建立一个仓库，多个包都在这个仓库中管理。
- multirepo：建立多个仓库，每个包建立一个仓库。

lerna 是一种 monorepo 的解决方案。

## 优缺点

### 优点

1. 节约了大量存储空间

   多个项目都依赖相同的依赖包时，在多个仓库的项目下，node_modules 会出现大量的冗余。

2. 调试方便

   在多个仓库的项目下，调试依赖包需要逐个 npm link，使用 lerna 后，在 `lerna bootstrap`时就处理好了多包之间的交叉依赖关系。

   还可以针对所有子包设置一些共用的配置，比如 eslint, babel, npm scripts 等，可以统一管理这些开发配置。

3. 资源包升级方便

   如果采用 multirepo 的方式，系统内其中一个包修改，需要单独发版，而且引用这个包的其他包都需要发版。

   lerna 可以通过配置插件的方式，实现自动更新版本号和 changlog，乃至自动管理这些包的发版。

### 缺点

由于源码在一起，仓库变更会非常频繁，存储空间也变得很大，CI 测试运行时间也会变长。
