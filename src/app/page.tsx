export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Prozyme
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            中国首个 AI 蛋白设计 Agent 平台
          </p>
          <p className="text-2xl font-medium text-gray-800 mb-12">
            让酶设计像对话一样简单
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              开始使用
            </a>
            <a
              href="/register"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              免费注册
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-2">对话式设计</h3>
            <p className="text-gray-600">
              自然语言描述您的需求，AI 自动完成蛋白设计
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-semibold mb-2">多工具协同</h3>
            <p className="text-gray-600">
              MCP 协议统一调度 OpenFold、ProteinMPNN、GROMACS
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">3D 可视化</h3>
            <p className="text-gray-600">
              实时查看蛋白结构，支持旋转、缩放、标注
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">适用场景</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">工业酶改造</h4>
              <p className="text-sm text-gray-600">耐高温、耐酸碱、有机溶剂耐性</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">医疗酶设计</h4>
              <p className="text-sm text-gray-600">酶替代疗法、代谢疾病</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">融合蛋白</h4>
              <p className="text-sm text-gray-600">双特异性抗体、ADC</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}