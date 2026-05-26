# Prozyme Frontend

AI 蛋白设计 Agent Web 界面。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript 5+
- **UI**: Tailwind CSS, shadcn/ui
- **状态**: Zustand
- **3D 可视化**: Mol* (molstar.org)
- **HTTP**: Axios

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 代码检查
npm run lint
```

## 项目结构

```
prozyme-frontend/
├── src/
│   ├── app/          # Next.js App Router
│   │   ├── (auth)/   # 认证页面
│   │   └── (dashboard)/  # 仪表盘
│   ├── components/   # React 组件
│   │   ├── chat/     # 对话组件
│   │   ├── project/  # 项目组件
│   │   └── structure/ # 结构可视化
│   ├── stores/       # Zustand 状态
│   └── hooks/        # 自定义 Hooks
└── tests/            # 测试
```

## 核心功能

- 💬 **对话式设计**: 自然语言描述蛋白设计需求
- 🧬 **序列管理**: 可视化查看和编辑蛋白序列
- 📊 **3D 结构**: Mol* 交互式结构可视化
- 📁 **项目管理**: 项目创建、编辑、版本管理

## 环境变量

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

---

**使命**: "让酶设计像对话一样简单"