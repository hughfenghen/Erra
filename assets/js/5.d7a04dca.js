(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{215:function(t,r,e){t.exports=e.p+"assets/img/switchomega.9cb58f6b.png"},216:function(t,r,e){t.exports=e.p+"assets/img/switchomega-setting.c49d2cd1.png"},225:function(t,r,e){"use strict";e.r(r);var a=e(0),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速启动"}},[t._v("#")]),t._v(" 快速启动")]),t._v(" "),a("h2",{attrs:{id:"安装erra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装erra"}},[t._v("#")]),t._v(" 安装Erra")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装"),a("br"),t._v(" "),a("code",[t._v("yarn global add erra")]),t._v(" 或 "),a("code",[t._v("npm i -g erra")])])]),t._v(" "),a("li",[a("p",[t._v("启动")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("erra start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件路径： /Users/<home dir>/.erra/erra.config.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# > erra@0.1.3 server:bin /Users/fenghen/.config/yarn/global/node_modules/erra")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > node ./dist/server/server/index.js -c "/Users/fenghen/.erra/erra.config.yaml"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地代理服务已启动，http_proxy=http://192.168.1.4:3344")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# erra管理界面地址，https://192.168.1.4:4455/erra")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("自定义配置文件[可选步骤]")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd <your project directory>")]),t._v("\nerra create\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件创建成功：<your project directory>/erra.config.yaml")]),t._v("\n")])])]),a("p",[a("em",[t._v("这是一个可选步骤，在项目目录下执行该命令，将自定义配置提交到git，可以将增强的能力共享给团队其他同学。")]),a("br"),t._v("\n配置文件内容说明请参阅"),a("router-link",{attrs:{to:"/config-desc.html"}},[t._v("配置文件说明")])],1),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("访问"),a("a",{attrs:{href:"https://localhost:4455/erra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Erra管理页面"),a("OutboundLink")],1),t._v("，此时浏览器会提示“您的连接不是私密连接”，可以暂时点击“高级”跳过。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("若要消除浏览器的“不安全”警告、代理https请求，建议阅读并执行"),a("a",{attrs:{href:"./trust-ca"}},[t._v("信任证书")])])]),t._v(" "),a("h2",{attrs:{id:"代理配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理配置"}},[t._v("#")]),t._v(" 代理配置")]),t._v(" "),a("p",[t._v("Erra的核心是一个http(s)代理服务器，请求数据经过代理服务器，我们才能够随意编辑它。")]),t._v(" "),a("ol",[a("li",[t._v("安装chrome代理设置插件 "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en-US",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwitchyOmega"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("进入SwitchyOmega的配置页，新建情景模式")]),t._v(" "),a("li",[t._v("设置情景模式的代理协议为HTTP，代理服务器为"),a("code",[t._v("localhost")]),t._v("，端口默认为"),a("code",[t._v("3344")]),t._v("(若需修改参考"),a("a",{attrs:{href:"./config-desc"}},[t._v("配置文件说明")]),t._v(")"),a("br"),t._v(" "),a("img",{attrs:{src:e(215),alt:"switchomega"}})]),t._v(" "),a("li",[t._v("设置Erra为Chrome全局代理或指定某个域名"),a("br"),t._v(" "),a("img",{attrs:{src:e(216),width:"200"}})])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参阅"),a("router-link",{attrs:{to:"/guide.html"}},[t._v("使用指南")]),t._v("了解更多Erra功能。")],1)])}),[],!1,null,null,null);r.default=s.exports}}]);