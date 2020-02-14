
# PrestaShop 自动化安装与部署

本项目是由 [Websoft9](https://www.websoft9.com) 研发的 [PrestaShop](https://prestashop.com/) 自动化安装程序，开发语言是 Ansible。使用本项目，只需要用户在 Linux 上运行一条命令，即可自动化安装 PrestaShop，让原本复杂的安装过程变得没有任何技术门槛。  

本项目是开源项目，采用 LGPL3.0 开源协议。

## 配置要求

安装本项目，确保符合如下的条件：

| 条件       | 详情       | 备注  |
| ------------ | ------------ | ----- |
| 操作系统       | CentOS7.x       |   |
| 公有云| AWS, Azure, 阿里云, 华为云, 腾讯云 | 可选 |
| 私有云|  KVM, VMware, VirtualBox, OpenStack | 可选 |
| 服务器配置 | 最低1核1G，安装时所需的带宽不低于10M |  建议采用按量100M带宽 |

## 组件

包含的核心组件为：PrestaShop + Apache/Nginx + MySQL + PHP

更多请见：[参数表](/docs/zh/stack-components.md)

## 本项目安装的是 PrestaShop 最新版吗？

本项目通过下载[prestashop源码](https://github.com/PrestaShop/PrestaShop)进行安装，其中版本号存储在：[role/prestashop/default/main.yml](/roles/prestashop/defaults/main.yml)

```
#prestashop版本，需定期维护
prestashop_version: 1.7.6.3
```

如果你想修改版本号，请先查看 prestashop 仓库 [tags](https://github.com/PrestaShop/PrestaShop/tags) 标签值，再修改上面的 `prestashop_version` 变量值。

我们会定期检查版本，并测试官方版本的可用性，以保证用户可以顺利安装最新版。

## 安装指南

以 root 用户登录 Linux，运行下面的**一键自动化安装命令**即可启动自动化部署。若没有 root 用户，请以其他用户登录 Linux 后运行 `sudo su -` 命令提升为 root 权限，然后再运行下面的脚本。

```
wget -N https://raw.githubusercontent.com/Websoft9/linux/master/ansible_script/install.sh ; bash install.sh repository=prestashop
```

脚本后启动，就开始了自动化安装，必要时需要用户做出交互式选择，然后耐心等待直至安装成功。

**安装中的注意事项：**  

1. 操作不慎或网络发生变化，可能会导致SSH连接被中断，安装就会失败，此时请重新安装
2. 安装缓慢、停滞不前或无故中断，主要是网络不通（或网速太慢）导致的下载问题，此时请重新安装

多种原因导致无法顺利安装，请使用我们在公有云上发布的 [PrestaShop镜像](https://apps.websoft9.com/prestashop) 的部署方式


## 文档

文档链接：https://support.websoft9.com/docs/prestashop/zh

## FAQ

- 命令脚本部署与镜像部署有什么区别？请参考：[镜像部署-vs-脚本部署](https://support.websoft9.com/docs/faq/zh/bz-product.html#镜像部署-vs-脚本部署)
- 本项目支持在 Ansible Tower 上运行吗？支持

## To do

* 添加 Nginx 支持
* 添加 Ubuntu18.04, Amazon Linux2 支持
