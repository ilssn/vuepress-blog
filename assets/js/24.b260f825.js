(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{576:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"learn-svn-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-svn-here"}},[s._v("#")]),s._v(" Learn SVN Here!")]),s._v(" "),a("p",[s._v("Simple Subversion")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"svn-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svn-简介"}},[s._v("#")]),s._v(" SVN 简介")]),s._v(" "),a("p",[s._v("Subversion(SVN)是一个开源的版本控制系统，管理者随时间改变的数据。数据放置在一个中央档案库(repository)中。这个档案很像一个普通的文件服务器，但是他会记住每一次文件的改动。")]),s._v(" "),a("ul",[a("li",[s._v("Repository（源代码库）: 源代码统一存放的地方")]),s._v(" "),a("li",[s._v("Checkout（提取）: 从仓库获取源代码")]),s._v(" "),a("li",[s._v("Commit（提交）:上传已经修改的的代码")]),s._v(" "),a("li",[s._v("Update（更新）:同步仓库代码，使得本地代码保持最新")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"svn-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svn-安装"}},[s._v("#")]),s._v(" SVN 安装")]),s._v(" "),a("p",[s._v("执行"),a("code",[s._v("svn --version")]),s._v("查看SVN版本，确认是否已经存在SVN，不存在则进行下载")]),s._v(" "),a("ul",[a("li",[s._v("Windows（下载）: https://sourceforge.net/projects/win32svn/")]),s._v(" "),a("li",[s._v("CentOS（自带）: yum install subversion")]),s._v(" "),a("li",[s._v("Ubuntu（自带）: apt-get install subversion")]),s._v(" "),a("li",[s._v("MacOS（自带）: brew install subversion")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"svn-检出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svn-检出"}},[s._v("#")]),s._v(" SVN 检出")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无密码")]),s._v("\nsvn checkout http://svn.server.com/svn/project_repo--username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user01\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有密码")]),s._v("\nsvn checkout --username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx --password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx svn://domain@xx.xx.xx.1:port/project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定版本")]),s._v("\nsvn checkout -r r21587 --username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx --password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx svn://xxx@11.111.111.1:6000/project\n")])])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"svn-提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svn-提交"}},[s._v("#")]),s._v(" SVN 提交")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在版本库中增加一个readme文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" readme\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Hello\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地文件状态")]),s._v("\nsvn status\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ? readme\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件加入版本控制")]),s._v("\nsvn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" A readme\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文件状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" A readme\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交更改")]),s._v("\nsvn commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"init svn readme"')]),s._v("\n")])])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回退"}},[s._v("#")]),s._v(" 回退")]),s._v(" "),a("p",[s._v("未提交")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文件状态")]),s._v("\nsvn status\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" M readme\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销文件更改")]),s._v("\nsvn revert readme\nReverted "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'readme'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认文件状态")]),s._v("\nsvn status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销文件夹更改")]),s._v("\nsvn revert -R trunk\n")])])]),a("p",[s._v("已提交")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 22是当前版本，21是回退版本，readme是回退的文件路径")]),s._v("\nsvn merge -r "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":21 readme\n")])])]),a("h2",{attrs:{id:"svn-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svn-信息"}},[s._v("#")]),s._v(" SVN 信息")]),s._v(" "),a("p",[s._v("通过svn命令根据时间或者版本号去除过去的版本")]),s._v(" "),a("ul",[a("li",[s._v("svn log： 展示版本、作者、日期、路径")]),s._v(" "),a("li",[s._v("svn diff： 像是修改的行级信息")]),s._v(" "),a("li",[s._v("svn cat： 取得某版本的某文件显示")]),s._v(" "),a("li",[s._v("svn list： 显示一个目录或者某一版本存在的文件")])]),s._v(" "),a("hr")])}),[],!1,null,null,null);t.default=r.exports}}]);