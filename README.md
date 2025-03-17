# Hydro Reset Password

## 简介

输入 uid 重置用户密码，方便重置学生密码。

## 使用说明

在`控制面板`-`脚本管理`中，找到此脚本（`resetPassword`），输入uid，将该用户的密码重置为: `abcdef`

## 安装方式

将插件放到目录`/root/.hydro/addons/resetPwd`，然后执行以下命令：


```
hydrooj addon add '/root/.hydro/addons/resetPwd'
pm2 restart hydrooj
```

注意，`yarn global` 只能在`v1.x`版本使用，`v2.x`删除了`global`的用法。
