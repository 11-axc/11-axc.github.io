const researchAreas = [
  {
    number: "01",
    title: "低空经济与先进空中交通",
    en: "Low-Altitude Economy & AAM",
    text: "聚焦低空交通系统的社会接受度、需求建模、安全风险与全过程治理，探索低空技术融入城市公共服务的可持续路径。",
    tags: ["公众接受度", "系统安全", "AAM", "风险治理"],
  },
  {
    number: "02",
    title: "空地协同应急救援",
    en: "Air–Ground Emergency Response",
    text: "面向心脏骤停与灾后救援场景，研究固定设施、地面移动载体与无人机的协同配置、调度与可靠性提升。",
    tags: ["AED配置", "公交协同", "无人机投送", "应急物流"],
  },
  {
    number: "03",
    title: "智能优化与数据驱动决策",
    en: "Intelligent Optimization",
    text: "结合多目标优化、启发式算法、深度强化学习与空间分析，为复杂交通和应急系统提供可解释、可实施的决策支持。",
    tags: ["多目标优化", "MO-ALNS-VNS", "强化学习", "GIS"],
  },
];

const publications = [
  {
    year: "2026",
    status: "研究论文",
    title: "固定—移动—低空协同的城市AED公共服务资源配置",
    en: "Collaborative Configuration of Fixed, Mobile and Low-Altitude AED Resources",
    detail: "构建固定AED、公交移动AED与无人机投送AED的协同覆盖模型，分析预算约束下的资源配置结构与服务可靠性。",
    methods: "Maximum coverage · Reliability · Hierarchical search",
  },
  {
    year: "2026",
    status: "综述论文",
    title: "低空经济中的系统性安全风险与全过程治理",
    en: "Systemic Safety Risks and Life-Cycle Governance in the Low-Altitude Economy",
    detail: "从设备、运行、空域、环境、组织与社会六个层面识别风险，并提出覆盖设计至恢复阶段的全过程治理框架。",
    methods: "Systematic review · Risk taxonomy · Resilience governance",
  },
  {
    year: "2026",
    status: "研究论文",
    title: "灾后紧急物资的卡车—无人机协同配送优化",
    en: "Truck–Drone Collaborative Distribution for Post-Disaster Emergency Supplies",
    detail: "以救援完成时间和综合运行成本为双目标，设计MO-ALNS-VNS算法求解复杂灾后路网中的空地协同路径问题。",
    methods: "Bi-objective optimization · MO-ALNS-VNS · Emergency logistics",
  },
  {
    year: "2025",
    status: "博士研究",
    title: "基于公众感知的低空飞行器社会接受度研究",
    en: "Public Acceptance of Low-Altitude Aircraft: A Perception-Based Study",
    detail: "基于问卷调查与多元统计分析，解释风险感知、知识水平、政策条件和人口特征对公众接受意愿的作用机制。",
    methods: "Survey · SEM · Regression · Cluster analysis",
  },
];

const projects = [
  { title: "城市AED协同供给", code: "HEALTH × MOBILITY", text: "需求感知—资源配置—协同调度—公众响应—绩效反馈" },
  { title: "低空安全治理", code: "SAFETY × RESILIENCE", text: "六层风险识别与五阶段全过程治理框架" },
  { title: "灾后空地配送", code: "LOGISTICS × OPTIMIZATION", text: "卡车—无人机协同路径与多目标智能优化" },
];

function Icon({ children }: { children: ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function App() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="返回首页">
          <span className="brand-mark">AX</span>
          <span><strong>Academic Profile</strong><small>LOW-ALTITUDE × RESCUE</small></span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#research">研究</a>
          <a href="#publications">成果</a>
          <a href="#projects">项目</a>
          <a className="nav-cta" href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="flight-path path-one" aria-hidden="true"><i /></div>
        <div className="flight-path path-two" aria-hidden="true"><i /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> TRANSPORTATION · EMERGENCY · INTELLIGENCE</p>
          <h1>让城市低空，<br /><em>更安全、更高效、</em><br />更具公共价值。</h1>
          <p className="hero-en">Making urban low-altitude mobility safer, smarter<br className="desktop" /> and more valuable to society.</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">探索研究方向 <span>↘</span></a>
            <a className="button secondary" href="#publications">查看研究成果</a>
          </div>
        </div>
        <div className="airspace-visual" aria-label="低空交通与地面应急系统抽象示意图">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="radar"><span /><span /><span /><b /></div>
          <div className="drone drone-one"><span>◆</span><small>UAV–01</small></div>
          <div className="drone drone-two"><span>◆</span><small>UAV–02</small></div>
          <div className="city-line"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="system-label"><span>URBAN AIR–GROUND SYSTEM</span><b>ACTIVE</b></div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <div className="page-shell">
        <aside className="profile-card" id="about">
          <div className="portrait-placeholder"><span>11</span><small>PHOTO</small></div>
          <p className="profile-kicker">RESEARCHER PROFILE</p>
          <h2>你的姓名</h2>
          <p className="profile-title">交通运输与应急管理研究者</p>
          <p className="profile-en">Researcher in Transportation & Emergency Management</p>
          <div className="profile-links">
            <a href="https://github.com/11-axc" target="_blank" rel="noreferrer"><Icon>⌘</Icon> github.com/11-axc</a>
            <a href="mailto:your-email@example.com"><Icon>✉</Icon> your-email@example.com</a>
            <a href="#publications"><Icon>◎</Icon> Google Scholar</a>
            <a href="#publications"><Icon>◉</Icon> ORCID</a>
          </div>
          <p className="edit-note">第一版占位信息：可替换姓名、照片、单位、邮箱与学术链接。</p>
        </aside>

        <div className="content">
          <section className="intro section" aria-labelledby="about-title">
            <p className="section-index">01 / ABOUT</p>
            <h2 id="about-title">关于我 <span>About Me</span></h2>
            <p className="lead">我的研究位于<strong>低空经济、智能交通与城市应急管理</strong>的交叉地带。</p>
            <div className="intro-columns">
              <p>关注低空飞行器从技术系统走向城市公共服务过程中面临的安全、效率、公平与社会接受问题，尝试通过严谨的建模、数据分析和算法设计，连接前沿技术与真实城市需求。</p>
              <p>当前研究重点包括低空交通公众接受度与系统安全、城市AED固定—移动—低空协同配置，以及灾后场景下卡车—无人机协同配送与多目标优化。</p>
            </div>
            <div className="focus-strip">
              <span>RESEARCH FOCUS</span><b>低空经济</b><i>×</i><b>应急救援</b><i>×</i><b>智能优化</b>
            </div>
          </section>

          <section className="section" id="research" aria-labelledby="research-title">
            <p className="section-index">02 / RESEARCH</p>
            <div className="section-heading"><h2 id="research-title">研究方向 <span>Research Interests</span></h2><p>以问题为导向，面向安全、可靠且可持续的未来城市交通系统。</p></div>
            <div className="research-list">
              {researchAreas.map((item) => (
                <article className="research-item" key={item.number}>
                  <span className="research-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p className="item-en">{item.en}</p><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                  <span className="arrow">↗</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section publications" id="publications" aria-labelledby="pub-title">
            <p className="section-index">03 / PUBLICATIONS</p>
            <div className="section-heading"><h2 id="pub-title">研究成果 <span>Selected Work</span></h2><p>以下为第一版研究组合，正式发表信息与链接可在下一版补充。</p></div>
            <div className="pub-list">
              {publications.map((pub) => (
                <article className="pub-item" key={pub.title}>
                  <div className="pub-meta"><strong>{pub.year}</strong><span>{pub.status}</span></div>
                  <div className="pub-body"><h3>{pub.title}</h3><p className="item-en">{pub.en}</p><p>{pub.detail}</p><small>{pub.methods}</small></div>
                  <span className="pub-arrow">↗</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects" aria-labelledby="project-title">
            <p className="section-index">04 / PROJECTS</p>
            <div className="section-heading"><h2 id="project-title">研究项目 <span>Research Projects</span></h2><p>将理论、模型与算法落到可解释的城市应用场景。</p></div>
            <div className="project-grid">
              {projects.map((project, index) => <article className="project" key={project.title}><span>0{index + 1}</span><small>{project.code}</small><h3>{project.title}</h3><p>{project.text}</p><div className="project-line" /></article>)}
            </div>
          </section>
        </div>
      </div>

      <footer id="contact">
        <div><p className="eyebrow"><span /> OPEN TO ACADEMIC EXCHANGE</p><h2>期待与你交流。</h2><p>低空经济 · 智能交通 · 应急物流 · 优化算法</p></div>
        <div className="footer-action"><a href="mailto:your-email@example.com">your-email@example.com <span>↗</span></a><p>© 2026 11-axc · Academic Profile</p></div>
      </footer>
    </main>
  );
}
import type { ReactNode } from "react";
import "./style.css";
