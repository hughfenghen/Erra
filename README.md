# Erra

一个本地接口调试工具，支持断点修改Request、Response，快速生成mock数据。

## 目标
- 提高接口开发调试效率
- 解决接口mock数据难以维护的问题

## 功能
- 接口断点，修改Request、Response内容（header、body...）
- 集成mockjs，快速生成mock数据
- 支持Snippet引用，mock数据可封装复用
- 支持切换接口对应的Snippet，快速覆盖业务场景

注：`Snippet`是由用户编写的可以生成mock数据的yaml语法配置，支持互相引用达到封装复用的目的。

## 计划
[-] 编辑器自动补全  
[] UI设计、优化  
[] 配置持久化  
[] 列表页过滤  
[] 列表页性能优化  