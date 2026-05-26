# Prozyme Frontend

AI 蛋白设计 Agent Web 界面。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript 5+
- **UI**: Tailwind CSS
- **状态**: Zustand
- **HTTP**: Axios

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 页面

- `/` - 首页
- `/login` - 登录
- `/register` - 注册
- `/projects` - 项目列表

## 开发命令

```bash
npm run dev      # 开发服务器
npm run build    # 构建
npm run lint     # 代码检查
npm run type-check  # 类型检查
```

## 环境变量

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```