# Prozyme Frontend 项目配置

## 项目信息

- **项目名**: prozyme-frontend
- **类型**: Next.js 14 前端应用
- **功能**: AI 蛋白设计 Agent Web 界面

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript 5+
- **UI**: Tailwind CSS, shadcn/ui
- **状态**: Zustand
- **3D 可视化**: Mol* (molstar.org)
- **HTTP**: Axios
- **表单**: React Hook Form + Zod

## 项目结构

```
prozyme-frontend/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx        # 根布局
│   │   ├── page.tsx         # 首页
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx   # 仪表盘布局
│   │   │   ├── projects/    # 项目列表
│   │   │   ├── project/[id]/ # 项目详情
│   │   │   ├── chat/        # 对话界面
│   │   │   ├── sequences/   # 序列管理
│   │   │   └── settings/    # 设置
│   │   └── api/             # API 路由
│   ├── components/
│   │   ├── ui/              # shadcn/ui 组件
│   │   ├── chat/            # 对话组件
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── ChatInterface.tsx
│   │   ├── project/          # 项目组件
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectList.tsx
│   │   │   └── ProjectForm.tsx
│   │   ├── sequence/         # 序列组件
│   │   │   └── SequenceViewer.tsx
│   │   └── structure/        # 结构可视化
│   │       └── StructureViewer.tsx  # Mol* 3D 渲染
│   ├── lib/
│   │   ├── api.ts           # API 客户端
│   │   ├── ws.ts            # WebSocket 客户端
│   │   └── utils.ts         # 工具函数
│   ├── stores/
│   │   ├── auth.ts          # 认证状态
│   │   ├── project.ts       # 项目状态
│   │   └── chat.ts         # 对话状态
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useProjects.ts
│   │   └── useChat.ts
│   └── types/
│       ├── api.ts           # API 类型
│       └── models.ts        # 数据模型
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/               # Playwright
├── public/
├── components.json          # shadcn/ui 配置
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

## 核心组件说明

### ChatInterface

```typescript
// 对话界面 - 核心用户交互
interface ChatInterfaceProps {
  projectId: string;
}

// 功能：
// - 消息输入 (支持 Markdown)
// - 流式响应显示
// - 进度追踪
// - 设计结果展示
```

### StructureViewer

```typescript
// Mol* 结构可视化
interface StructureViewerProps {
  pdbUrl?: string;
  pdbId?: string;
  height?: string;
}

// 功能：
// - 3D 结构渲染
// - 交互操作 (旋转、缩放)
// - 标注 (活性位点、结合口袋)
```

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 代码检查
npm run lint

# 测试
npm run test
npm run test:e2e  # E2E 测试

# Storybook
npm run storybook
```

## API 集成

```typescript
// lib/api.ts

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
});

// 请求拦截器 - 添加 Token
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器 - 错误处理
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 处理未授权
      logout();
    }
    return Promise.reject(error);
  }
);
```

## WebSocket 连接

```typescript
// lib/ws.ts

class WSManager {
  private ws: WebSocket | null = null;
  
  connect(jobId: string, onMessage: (data: any) => void) {
    this.ws = new WebSocket(`${WS_URL}/jobs/${jobId}`);
    this.ws.onmessage = (event) => {
      onMessage(JSON.parse(event.data));
    };
  }
  
  disconnect() {
    this.ws?.close();
  }
}
```

## 环境变量

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

## 状态管理 (Zustand)

```typescript
// stores/chat.ts

interface ChatStore {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Message) => void;
  setLoading: (loading: boolean) => void;
  clear: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isLoading: false,
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  setLoading: (loading) => set({ isLoading: loading }),
  clear: () => set({ messages: [], isLoading: false }),
}));
```

## UI 组件 (shadcn/ui)

```bash
# 安装组件
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add card
npx shadcn-ui@latest add tabs
```

## 测试

```typescript
// tests/unit/ChatInterface.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ChatInterface } from '@/components/chat/ChatInterface';

describe('ChatInterface', () => {
  it('should render input', () => {
    render(<ChatInterface projectId="test" />);
    expect(screen.getByPlaceholderText('输入您的需求...')).toBeInTheDocument();
  });
});
```

---

*配置版本: v1.0*
*最后更新: 2026-05-26*