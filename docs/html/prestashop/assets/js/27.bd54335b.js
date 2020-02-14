(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{193:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ssl-https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https","aria-hidden":"true"}},[t._v("#")]),t._v(" SSL/HTTPS")]),t._v(" "),r("p",[t._v("网站完成域名绑定且可以通过HTTP访问之后，方可设置HTTPS。")]),t._v(" "),r("p",[t._v("PrestaShop 预装包，已安装Web服务器 SSL 模块和公共免费证书方案 "),r("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),r("OutboundLink")],1),t._v(" ，并完成预配置。")]),t._v(" "),r("blockquote",[r("p",[t._v("除了虚拟主机配置文件之外，HTTPS设置无需修改Nginx任何文件")])]),t._v(" "),r("h2",{attrs:{id:"快速参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速参考")]),t._v(" "),r("p",[t._v("如果你想使用免费证书，只需在服务器中运行一条命令"),r("code",[t._v("certbot")]),t._v("就可以启动证书部署")]),t._v(" "),r("p",[t._v("如果你已经申请了商业证书，只需三个步骤，即可完成HTTPS配置")]),t._v(" "),r("h3",{attrs:{id:"prestashop-lamp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-lamp","aria-hidden":"true"}},[t._v("#")]),t._v(" PrestaShop(LAMP)")]),t._v(" "),r("p",[t._v("PrestaShop(LAMP) 即运行环境采用 "),r("strong",[t._v("Apache")]),t._v(" 作为 Web Server")]),t._v(" "),r("ol",[r("li",[t._v("将申请的证书、 证书链文件和秘钥文件上传到 "),r("em",[t._v("/data/cert")]),t._v(" 目录")]),t._v(" "),r("li",[t._v("打开虚拟主机配置文件： "),r("em",[t._v("/etc/httpd/conf.d/vhost.conf")])]),t._v(" "),r("li",[t._v("将如下的 "),r("strong",[t._v("HTTPS 配置段模板")]),t._v(" "),r("code",[t._v("<VirtualHost *:443>--</VirtualHost>")]),t._v(" 插入到"),r("code",[t._v("vhost.conf")]),t._v(" 文件中"),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('#-----HTTPS template start------------\n<VirtualHost *:443>\n ServerName  prestashop.yourdomain.com\n DocumentRoot "/data/wwwroot/prestashop"\n #ErrorLog "logs/prestashop.yourdomain.com-error_log"\n #CustomLog "logs/prestashop.yourdomain.com-access_log" common\n <Directory "/data/wwwroot/prestashop">\n Options Indexes FollowSymlinks\n AllowOverride All\n Require all granted\n </Directory>\n SSLEngine on\n SSLCertificateFile  /data/cert/prestashop.yourdomain.com.crt\n SSLCertificateKeyFile  /data/cert/prestashop.yourdomain.com.key\n </VirtualHost>\n#-----HTTPS template end------------\n')])])])]),t._v(" "),r("li",[t._v("修改 ServerName, SSLCertificateFile, SSLCertificateKeyFile等参数的值")]),t._v(" "),r("li",[t._v("保存， "),r("router-link",{attrs:{to:"/admin-services.html#apache"}},[t._v("重启 Apache 服务")])],1)]),t._v(" "),r("h3",{attrs:{id:"prestashop-lemp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-lemp","aria-hidden":"true"}},[t._v("#")]),t._v(" PrestaShop(LEMP)")]),t._v(" "),r("p",[t._v("PrestaShop(LEMP) 即运行环境采用 "),r("strong",[t._v("Nginx")]),t._v(" 作为 Web Server")]),t._v(" "),r("ol",[r("li",[t._v("将申请的证书、 证书链文件和秘钥文件上传到 "),r("em",[t._v("/data/cert")]),t._v(" 目录")]),t._v(" "),r("li",[t._v("打开虚拟主机配置文件："),r("em",[t._v("/etc/nginx/conf.d/default.conf")]),t._v(" ，插入"),r("strong",[t._v("HTTPS 配置段")]),t._v(" 到 PrestaShop 的 "),r("em",[t._v("server{ }")]),t._v(" 中")])]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("  #-----HTTPS template start------------\n  listen 443 ssl; \n  ssl_certificate /data/cert/xxx.crt;\n  ssl_certificate_key /data/cert/xxx.key;\n  ssl_session_timeout 5m;\n  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\n  ssl_prefer_server_ciphers on;\n  #-----HTTPS template end------------\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("修改 ssl_certificate, ssl_certificate_key 的值")]),t._v(" "),r("li",[t._v("保存，"),r("router-link",{attrs:{to:"/zh/admin-services.html#nginx"}},[t._v("重启 Nginx 服务")])],1)]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("完成环境的 HTTPS 设置之后，【登录 PrestaShop 后台】>【Shop Parameters】>【General】，对所有页面启用 HTTPS 设置\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-allhttps-websoft9.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"详细指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#详细指南","aria-hidden":"true"}},[t._v("#")]),t._v(" 详细指南")]),t._v(" "),r("p",[t._v("若参考上面的"),r("strong",[t._v("简易步骤")]),t._v("仍无法成功设置 HTTPS 访问，请阅读由 Websoft9 提供的 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-https.html#nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTPS 专题指南》"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("HTTPS专题指南方案包括：HTTPS 前置条件、HTTPS 配置段模板、注意事项、详细步骤以及故障诊断等具体方案。")])])},[],!1,null,null,null);e.default=a.exports}}]);