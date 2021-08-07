"use strict";(self.webpackChunkmdx_mermaid_doc=self.webpackChunkmdx_mermaid_doc||[]).push([[671],{426:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var t=r(7462),i=r(3366),n=(r(7378),r(3905)),d=r(5065),m=["components"],l={sidebar_position:1},u="Tutorial",o={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Tutorial",description:"Setup mdx-mermaid in Docusaurus.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/mdx-mermaid/docs/intro",editUrl:"https://github.com/sjwall/mdx-mermaid/edit/main/doc/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Examples",permalink:"/mdx-mermaid/docs/examples"}},s=[{value:"Installing",id:"installing",children:[]},{value:"Configure in Docusaurus",id:"configure-in-docusaurus",children:[]},{value:"Add a Diagram",id:"add-a-diagram",children:[]},{value:"Admire your diagram",id:"admire-your-diagram",children:[]}],c={toc:s};function p(e){var a=e.components,r=(0,i.Z)(e,m);return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial"},"Tutorial"),(0,n.kt)("p",null,"Setup mdx-mermaid in Docusaurus."),(0,n.kt)("h2",{id:"installing"},"Installing"),(0,n.kt)("p",null,"Use your preffered package manager to install."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=NPM",title:"NPM"},"npm i mdx-mermaid\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=Yarn",title:"Yarn"},"yarn add mdx-mermaid\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=PNPM",title:"PNPM"},"pnpm add mdx-mermaid\n")),(0,n.kt)("h2",{id:"configure-in-docusaurus"},"Configure in Docusaurus"),(0,n.kt)("p",null,"Add"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"require('mdx-mermaid')\n")),(0,n.kt)("p",null,"to ",(0,n.kt)("inlineCode",{parentName:"p"},"remarkPlugins")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=docusaurus.config.js",title:"docusaurus.config.js"},"presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          remarkPlugins: [require('mdx-mermaid')],\n")),(0,n.kt)("h2",{id:"add-a-diagram"},"Add a Diagram"),(0,n.kt)("p",null,"Add a Mermaid diagram to a ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".mdx")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Example Mermaid diagram"',title:'"Example',Mermaid:!0,'diagram"':!0},"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n")),(0,n.kt)("h2",{id:"admire-your-diagram"},"Admire your diagram"),(0,n.kt)("p",null,"Take the time to appreciate your diagram."),(0,n.kt)(d.Mermaid,{chart:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);