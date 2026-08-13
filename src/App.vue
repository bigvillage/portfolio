<template>
  <div class="portfolio">
    <!-- =====================================================
         HEADER
    ====================================================== -->

    <header class="site-header">
      <div class="header-inner">
        <a href="#top" class="logo"> SHIN. </a>

        <nav class="navigation">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>

    <!-- =====================================================
         HERO
    ====================================================== -->

    <main id="top">
      <section class="hero">
        <div class="container hero-container">
          <div class="hero-top reveal hero-delay-1">
            <span class="hero-status">
              <span class="status-dot"></span>
              AVAILABLE FOR WORK
            </span>
          </div>

          <div class="hero-grid">
            <!-- LEFT -->

            <div class="hero-content">
              <div class="reveal hero-delay-2">
                <p class="hero-name">KIM JAEHWAN</p>

                <p class="hero-position" style="font-size: 20px">
                  BACKEND / FULL-STACK DEVELOPER
                </p>
              </div>

              <div class="hero-title-wrap reveal hero-delay-3">
                <h1>
                  남들과 다른 생각으로
                  <br />

                  <strong style="color: #3b82f6">
                    더 나은 방법을 늘 생각해내는
                  </strong>

                  <br />

                  창의적 인재 김재환입니다.
                </h1>
              </div>

              <div class="hero-release-info reveal hero-delay-4">
                <div class="hero-release-row">
                  <span class="release-date"> 2026.08 </span>

                  <span class="release-title">
                    Backend Developer Portfolio
                  </span>
                </div>

                <div class="hero-release-row">
                  <span class="release-date"> BASED IN </span>

                  <span class="release-title"> SEOUL, KOREA </span>
                </div>
              </div>

              <div class="hero-actions reveal hero-delay-5">
                <a
                  href="#projects"
                  class="hero-action primary"
                  style="font-size: 15px"
                >
                  VIEW PROJECTS

                  <span>↗</span>
                </a>

                <a href="#contact" class="hero-action" style="font-size: 15px">
                  CONTACT ME

                  <span>→</span>
                </a>
              </div>

              <div class="hero-documents reveal hero-delay-6">
                <a
                  href="#experience"
                  class="hero-document"
                  style="font-size: 12px"
                >
                  CAREER
                  <span>↗</span>
                </a>

                <a href="#skills" class="hero-document" style="font-size: 12px">
                  STACK
                  <span>↗</span>
                </a>
              </div>
            </div>

            <!-- RIGHT : CODE WINDOW -->

            <div class="hero-code reveal hero-delay-5">
              <div class="code-window">
                <div class="code-header">
                  <div class="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <small> developer.ts </small>
                </div>

                <div class="code-body">
                  <pre><span class="code-keyword">const</span> developer = {
  name: <span class="code-class">'Kim Jaehwan'</span>,
  role: <span class="code-class">'Backend Developer'</span>,

  stack: [
    <span class="code-class">'Node.js'</span>,
    <span class="code-class">'NestJS'</span>,
    <span class="code-class">'Vue.js'</span>,
    <span class="code-class">'ElasticSearch'</span>
  ],

  mindset:
    <span class="code-class">'Build. Improve. Repeat.'</span>
};</pre>
                </div>

                <p class="code-comment">
                  // turning requirements into // maintainable systems
                </p>
              </div>
            </div>
          </div>

          <!-- HERO BOTTOM -->

          <div class="hero-bottom reveal hero-delay-7">
            <div class="hero-bottom-item">
              <span style="font-size: 20px !important; font-weight: bolder">
                EXPERIENCE
              </span>

              <strong style="font-size: 20px !important; font-weight: bolder">
                3+ YEARS
              </strong>
            </div>

            <div class="hero-bottom-item">
              <span style="font-size: 20px !important; font-weight: bolder">
                DEVELOPMENT
              </span>

              <strong style="font-size: 20px !important; font-weight: bolder">
                WEB / BACKEND
              </strong>
            </div>

            <div class="hero-bottom-item">
              <span style="font-size: 20px !important; font-weight: bolder">
                FOCUS
              </span>

              <strong style="font-size: 20px !important; font-weight: bolder">
                PERFORMANCE / MAINTAINABILITY
              </strong>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================
           ABOUT
      ==================================================== -->

      <section id="about" class="section about-section">
        <div class="container">
          <div class="section-top">
            <span
              class="section-index"
              style="font-size: 20px !important; font-weight: bolder"
            >
              01
            </span>

            <span
              class="section-label"
              style="font-size: 20px !important; font-weight: bolder"
            >
              ABOUT
            </span>
          </div>

          <div class="about-layout">
            <div class="about-left">
              <div class="about-profile">
                <div class="profile-image">
                  <img
                    src="./assets/kimjaehwan.png"
                    alt="김재환 프로필 사진"
                    class="profile-image-inner"
                  />
                </div>

                <div class="profile-meta">
                  <span class="profile-line"></span>

                  <span> BACKEND DEVELOPER </span>
                </div>
              </div>
            </div>

            <div class="about-content">
              <span
                class="about-number"
                style="font-size: 15px !important; font-weight: bolder"
              >
                01 / WHO I AM
              </span>

              <div class="about-title">
                <h2>
                  <span class="highlight-blue">20개 이상의</span> 고객사
                  시스템을 경험하며,
                  <br />

                  <em>개발부터 운영까지 직접 발로 뛴</em>

                  <br />

                  창의적 개발자
                </h2>
              </div>

              <div class="about-copy">
                <p class="about-lead">
                  문제를 단순히 해결하는 것보다
                  <br />
                  왜 문제가 발생했는지 이해하는 개발자입니다.
                </p>

                <p>
                  SI와 SM 업무를 수행하며 20개 이상의 고객사 그룹웨어 및 업무
                  시스템을 개발하고 유지보수해 왔습니다.
                </p>

                <p>
                  각기 다른 업무 환경과 요구사항을 경험하며 단순히 기능을
                  구현하는 것을 넘어, 운영 환경에서 발생하는 문제를 빠르게
                  파악하고 안정적으로 개선하는 개발 역량을 쌓았습니다.
                </p>

                <p>
                  Vue.js, Node.js, Express, MongoDB, Elasticsearch 등을 활용해
                  웹 서비스의 프론트엔드부터 백엔드, 검색 시스템까지 직접
                  개발하고 운영한 경험이 있습니다.
                </p>

                <p>
                  특히 반복적인 유지보수와 장애 대응 과정에서 기존 시스템의
                  구조적 문제를 파악하고 더 나은 방식으로 개선하는 데 집중해
                  왔습니다.
                </p>

                <p>
                  고객의 요구사항을 단순히 기능으로 구현하는 데 그치지 않고,
                  실제 업무 환경과 사용자의 관점에서 문제를 이해하며 더 나은
                  해결 방법을 고민하는 개발자를 지향합니다.
                </p>

                <div class="about-keywords">
                  <span> 문제 해결 능력 </span>

                  <span> 시스템 설계 </span>

                  <span> 유지보수성 </span>

                  <span> 성능 최적화 </span>

                  <span> 지속적인 성장 </span>
                </div>
              </div>

              <div class="about-stats">
                <div class="about-stat">
                  <strong class="stat-number"> 3+ </strong>

                  <span
                    class="stat-label"
                    style="font-size: 15px; font-weight: bolder"
                  >
                    YEARS EXPERIENCE
                  </span>
                </div>

                <div class="about-stat">
                  <strong class="stat-number"> 20+ </strong>

                  <span
                    class="stat-label"
                    style="font-size: 15px; font-weight: bolder"
                  >
                    CUSTOMER SYSTEMS
                  </span>
                </div>

                <div class="about-stat">
                  <strong class="stat-number"> 2 </strong>

                  <span
                    class="stat-label"
                    style="font-size: 15px; font-weight: bolder"
                  >
                    MAIN STACKS
                  </span>
                </div>

                <div class="about-stat">
                  <strong class="stat-number"> ∞ </strong>

                  <span
                    class="stat-label"
                    style="font-size: 15px; font-weight: bolder"
                  >
                    THINGS TO LEARN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================
           SKILLS
      ==================================================== -->

      <section id="skills" class="section skills-section">
        <div class="container">
          <div class="section-top">
            <span
              class="section-index"
              style="font-size: 20px !important; font-weight: bolder"
            >
              02
            </span>

            <span
              class="section-label"
              style="font-size: 20px !important; font-weight: bolder"
            >
              SKILLS
            </span>
          </div>

          <div class="skills-heading">
            <h2>기술 스택</h2>

            <p style="font-size: 12px">
              제가 실제 프로젝트에서 사용하고, 문제를 해결하기 위해 활용해 온
              기술들입니다.
            </p>
          </div>

          <div class="skills-grid">
            <article class="skill-card reveal" data-number="01">
              <h3>Language</h3>

              <p>
                JavaScript와 TypeScript를 기반으로 웹 서비스의 기능을 구현하고,
                SQL을 활용해 데이터 조회와 관리 로직을 구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">JavaScript</span>
                <span style="font-size: 13px">TypeScript</span>
                <span style="font-size: 13px">SQL</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="02">
              <h3>Backend</h3>

              <p>
                Node.js와 Express, NestJS를 활용해 REST API를 설계하고 인증부터
                비즈니스 로직, 파일 처리까지 서버 기능을 구현합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">Node.js</span>
                <span style="font-size: 13px">Express</span>
                <span style="font-size: 13px">NestJS</span>
                <span style="font-size: 13px">REST API</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="03">
              <h3>FRONTEND</h3>

              <p>
                Vue.js와 TypeScript를 활용해 API와 연동되는 화면을 구현하고,
                Pinia를 통해 애플리케이션의 상태와 사용자 데이터를 관리합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">Vue.js</span>
                <span style="font-size: 13px">Pinia</span>
                <span style="font-size: 13px">HTML</span>
                <span style="font-size: 13px">CSS</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="04">
              <h3>Data</h3>

              <p>
                서비스 특성에 맞춰 데이터를 관리하고 MongoDB와 MySQL을 활용해
                애플리케이션 데이터를 저장하며, Elasticsearch를 통해 검색 기능을
                구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">MongoDB</span>
                <span style="font-size: 13px">MySQL</span>
                <span style="font-size: 13px">Elasticsearch</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="05">
              <h3>Auth & Integration</h3>

              <p>
                JWT와 Cookie 기반의 인증 구조를 구현하고 외부 스토리지 및 API와
                연동하여 서비스 간 데이터와 파일을 안정적으로 처리합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">JWT</span>
                <span style="font-size: 13px">Passport</span>
                <span style="font-size: 13px">Cookie</span>
                <span style="font-size: 13px">AWS S3</span>
                <span style="font-size: 13px">bcrypt</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="06">
              <h3>Infrastructure</h3>

              <p>
                Linux 환경에서 Nginx와 PM2를 활용해 웹 서비스와 Node.js
                애플리케이션을 운영하고, AWS와 Cloudflare R2를 활용해 서비스
                환경을 구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">Linux</span>
                <span style="font-size: 13px">Nginx</span>
                <span style="font-size: 13px">PM2</span>
                <span style="font-size: 13px">AWS</span>
                <span style="font-size: 13px">Cloudflare R2</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="07">
              <h3>Search & Monitoring</h3>

              <p>
                Elasticsearch를 활용해 대용량 문서 검색 기능을 구성하고,
                Kibana를 통해 검색 데이터와 시스템 로그를 확인하며 문제를
                추적합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">Elasticsearch</span>
                <span style="font-size: 13px">Kibana</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="08">
              <h3>Architecture & Development</h3>

              <p>
                기존 시스템의 구조와 요구사항을 분석하고, Express 기반 서비스를
                NestJS와 TypeScript로 리빌딩하며 확장성과 유지보수성을 높이는
                구조를 설계합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 8px">TypeScript 기반 리빌딩</span>
                <span style="font-size: 8px">REST API 설계</span>
                <span style="font-size: 8px">인증/인가</span>
                <span style="font-size: 8px">파일 업로드/다운로드</span>
                <span style="font-size: 8px">데이터 마이그레이션</span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="09">
              <h3>Tooling</h3>

              <p>
                Git을 활용해 소스코드를 관리하고 Swagger와 Postman을 통해 API를
                문서화하고 테스트하며 안정적인 개발 과정을 유지합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px">Git</span>
                <span style="font-size: 13px">npm</span>
                <span style="font-size: 13px">Swagger</span>
                <span style="font-size: 13px">Postman</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ===================================================
           EXPERIENCE
      ==================================================== -->

      <section id="experience" class="section experience-section">
        <div class="container">
          <div class="section-top">
            <span
              class="section-index"
              style="font-size: 20px !important; font-weight: bolder"
            >
              03
            </span>

            <span
              class="section-label"
              style="font-size: 20px !important; font-weight: bolder"
            >
              EXPERIENCE
            </span>
          </div>

          <div class="experience-heading">
            <h2>경력</h2>

            <p>
              실제 업무 환경에서 시스템을 개발하고 운영하며 쌓은 경험입니다.
            </p>
          </div>

          <div class="experience-list">
            <!-- SI -->
            <article class="experience-item">
              <div class="experience-company">
                <span style="font-size: 20px">2023.01 — 2024.06</span>

                <h3>새롬정보시스템</h3>

                <p style="font-size: 20px">SI TEAM</p>
              </div>

              <div class="experience-detail">
                <p>
                  다양한 고객사의 업무 환경과 요구사항을 분석하고, 그룹웨어 및
                  업무 시스템의 개발과 데이터 마이그레이션을 수행했습니다.
                </p>

                <ul>
                  <li style="font-size: 14px">
                    자사 그룹웨어 시스템(로그인, 일정, 전자결재, 조직도, WBS,
                    회의관리, 팀공간, Project Manage Service 등) 개발 및 운영
                  </li>
                  <li style="font-size: 14px">대한적십자사 그룹웨어 개발</li>
                  <li style="font-size: 14px">
                    SK엔펄스 / SK마이크로웍스 데이터 마이그레이션
                  </li>
                  <li style="font-size: 14px">
                    고객사 요구사항 분석 및 기능 개발
                  </li>
                </ul>
              </div>
            </article>

            <!-- SM -->
            <article class="experience-item">
              <div class="experience-company">
                <span style="font-size: 20px">2024.06 — 2025.12</span>

                <h3>새롬정보시스템</h3>

                <p style="font-size: 20px">SM TEAM</p>
              </div>

              <div class="experience-detail">
                <p>
                  20여 개 고객사의 그룹웨어 및 업무 시스템을 유지보수하며 사용자
                  요구사항을 분석하고 장애 대응과 기능 개선을 수행했습니다.
                </p>

                <ul>
                  <li style="font-size: 14px">
                    20여 개 고객사 그룹웨어 시스템 유지보수 (고객사 : 넥센,
                    귀뚜라미, 세방, 후성, 대법원(연구관리), 흥국생명, 코젠,
                    대한해운, 팬오션, 하림, NS홈쇼핑, 에쓰오일, 적십자, 팬택,
                    tlb, 에스트라, 이래AMS, 한세모빌리티, 동진쎄미캠, DSM,
                    티움바이오, 피유코어, 에이스테크 등)
                  </li>
                  <li style="font-size: 14px">
                    사용자 요구사항 분석 및 기능 개선
                  </li>
                  <li style="font-size: 14px">Vue.js 기반 화면 개발</li>
                  <li style="font-size: 14px">
                    Node.js / Express 기반 API 개발
                  </li>
                  <li style="font-size: 14px">
                    MongoDB / Elasticsearch 검색 시스템 운영
                  </li>
                  <li style="font-size: 14px">
                    Linux / Nginx / PM2 기반 서비스 운영
                  </li>
                  <li style="font-size: 14px">시스템 장애 대응 및 원인 분석</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ===================================================
           PROJECTS
      ==================================================== -->

      <section id="projects" class="section projects-section">
        <div class="container">
          <div class="section-top">
            <span
              class="section-index"
              style="font-size: 20px !important; font-weight: bolder"
            >
              04
            </span>

            <span
              class="section-label"
              style="font-size: 20px !important; font-weight: bolder"
            >
              PROJECTS
            </span>
          </div>

          <div class="projects-heading">
            <h2>주요 프로젝트</h2>

            <p>문제를 발견하고 직접 해결한 프로젝트들입니다.</p>
          </div>

          <div class="project-list">
            <article class="project-card">
              <div class="project-number">01</div>

              <div class="project-content">
                <span
                  class="project-type"
                  style="font-size: 12px; font-weight: bolder"
                >
                  FULL-STACK / PERSONAL PROJECT / 기간: 2026.04.01 ~ 2026.05.27
                </span>

                <h3>DOC DRIVE</h3>
                <div class="technology-list">
                  <span style="font-size: 13px">
                    <a
                      href="https://github.com/bigvillage/doc-drive-node"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project-github-arrow"
                      aria-label="DOC DRIVE GitHub"
                      style="font-size: 15px; font-weight: bolder"
                    >
                      Node.js
                    </a></span
                  >
                  <span style="font-size: 13px"
                    ><a
                      href="https://github.com/bigvillage/doc-drive-vue"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project-github-arrow"
                      aria-label="DOC DRIVE GitHub"
                      style="font-size: 15px; font-weight: bolder"
                    >
                      Vue.js
                    </a></span
                  >
                </div>
                <div class="project-image">
                  <img
                    src="./assets/login.png"
                    alt="DOC DRIVE 문서관리시스템"
                  />
                </div>
                <br />

                <p class="project-description">
                  그룹웨어 개발 및 유지보수 경험을 바탕으로 직접 설계하고 개발한
                  웹 기반 문서관리시스템입니다.
                  <br /><br />
                  문서와 첨부파일을 등록하고 조회·수정·삭제할 수 있으며,
                  Elasticsearch를 이용한 문서 검색과 즐겨찾기, Object Storage
                  기반 파일 관리 기능을 제공합니다.
                  <br /><br />
                </p>

                <div class="project-info">
                  <div class="project-info-item">
                    <span class="label">주요 기능</span>
                    <span
                      >로그인 · 인증 · 문서 관리 · 파일 관리 · 검색 ·
                      Dashboard</span
                    >
                  </div>

                  <div class="project-info-item">
                    <span class="label">REBUILDING</span>
                    <span>Express → NestJS / JavaScript → TypeScript</span>
                  </div>

                  <div class="project-info-item">
                    <span class="label">STORAGE</span>
                    <span>Cloudflare R2 / Object Storage</span>
                  </div>
                </div>

                <div class="technology-list">
                  <span style="font-size: 12px; font-weight: bolder"
                    >Node.js</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Express</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >JavaScript</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Vue.js</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Pinia</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >MongoDB</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Elasticsearch</span
                  >
                  <span style="font-size: 12px; font-weight: bolder">JWT</span>
                  <span style="font-size: 12px; font-weight: bolder"
                    >Cookie</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >bcrypt</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Multer</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >AWS S3</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Nginx</span
                  >
                  <span style="font-size: 12px; font-weight: bolder">PM2</span>
                  <span style="font-size: 12px; font-weight: bolder"
                    >Kibana</span
                  >
                </div>

                <div class="project-details">
                  <div>
                    <span>BACKEND</span>
                    <p>Node.js / Express / REST API</p>
                  </div>

                  <div>
                    <span>AUTH</span>
                    <p>JWT / Cookie / bcrypt</p>
                  </div>

                  <div>
                    <span>DATABASE</span>
                    <p>MongoDB / Elasticsearch</p>
                  </div>

                  <div>
                    <span>FRONTEND</span>
                    <p>Vue.js / Pinia</p>
                  </div>

                  <div>
                    <span>FILE</span>
                    <p>Multer / S3 Compatible Storage</p>
                  </div>

                  <div>
                    <span>INFRA</span>
                    <p>Linux / Nginx / PM2 / Kibana</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card">
              <div class="project-number">02</div>

              <div class="project-content">
                <span
                  class="project-type"
                  style="font-size: 12px; font-weight: bolder"
                >
                  FULL-STACK / REBUILDING PROJECT / 기간: 2026.07.14 ~
                  2026.08.14
                </span>

                <h3>DOC DRIVE</h3>
                <div class="technology-list">
                  <span style="font-size: 13px">
                    <a
                      href="https://github.com/bigvillage/doc-drive-nest-rebuilding"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project-github-arrow"
                      aria-label="DOC DRIVE GitHub"
                      style="font-size: 15px; font-weight: bolder"
                    >
                      Node.js
                    </a></span
                  >
                  <span style="font-size: 13px"
                    ><a
                      href="https://github.com/bigvillage/doc-drive-vue-rebuilding"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project-github-arrow"
                      aria-label="DOC DRIVE GitHub"
                      style="font-size: 15px; font-weight: bolder"
                    >
                      Vue.js
                    </a></span
                  >
                </div>
                <br />
                <div class="project-image">
                  <img
                    src="./assets/dashboard.png"
                    alt="DOC DRIVE 문서관리시스템"
                  />
                </div>
                <br />

                <p class="project-description">
                  그룹웨어 개발 및 유지보수 경험을 바탕으로 직접 설계하고 개발한
                  웹 기반 문서관리시스템입니다.
                  <br /><br />
                  문서와 첨부파일을 등록하고 조회·수정·삭제할 수 있으며,
                  Elasticsearch를 이용한 문서 검색과 즐겨찾기, Object Storage
                  기반 파일 관리 기능을 제공합니다.
                  <br /><br />
                  기존 Express 프로젝트를
                  <strong>NestJS + TypeScript + Vue 3 + TypeScript</strong>로
                  리빌딩하여 구조와 타입 안정성을 개선했습니다.
                </p>

                <div class="project-info">
                  <div class="project-info-item">
                    <span class="label">주요 기능</span>
                    <span
                      >로그인 · 인증 · 문서 관리 · 파일 관리 · 검색 ·
                      Dashboard</span
                    >
                  </div>

                  <div class="project-info-item">
                    <span class="label">REBUILDING</span>
                    <span>Express → NestJS / JavaScript → TypeScript</span>
                  </div>

                  <div class="project-info-item">
                    <span class="label">STORAGE</span>
                    <span>Cloudflare R2 / Object Storage</span>
                  </div>
                </div>

                <div class="technology-list">
                  <span style="font-size: 12px; font-weight: bolder"
                    >NestJS</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >TypeScript</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Vue.js</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Pinia</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >MongoDB</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Elasticsearch</span
                  >
                  <span style="font-size: 12px; font-weight: bolder">JWT</span>
                  <span style="font-size: 12px; font-weight: bolder"
                    >Passport</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >bcrypt</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Swagger</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Axios</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Cloudflare R2</span
                  >
                  <span style="font-size: 12px; font-weight: bolder"
                    >Nginx</span
                  >
                  <span style="font-size: 12px; font-weight: bolder">PM2</span>
                  <span style="font-size: 12px; font-weight: bolder">Git</span>
                  <span style="font-size: 12px; font-weight: bolder"
                    >Kibana</span
                  >
                </div>

                <div class="project-details">
                  <div>
                    <span>BACKEND</span>
                    <p>NestJS / TypeScript / REST API</p>
                  </div>

                  <div>
                    <span>AUTH</span>
                    <p>JWT / Passport / Cookie / bcrypt</p>
                  </div>

                  <div>
                    <span>DATABASE</span>
                    <p>MongoDB / Elasticsearch</p>
                  </div>

                  <div>
                    <span>FRONTEND</span>
                    <p>Vue.js / TypeScript / Pinia</p>
                  </div>

                  <div>
                    <span>STORAGE</span>
                    <p>AWS S3 Compatible Storage</p>
                  </div>

                  <div>
                    <span>DEPLOYMENT</span>
                    <p>Linux / Nginx / PM2 / Kibana</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ===================================================
           WRITING
      ==================================================== -->

      <section class="section writing-section">
        <div class="container">
          <div class="section-top">
            <span
              class="section-index"
              style="font-size: 20px !important; font-weight: bolder"
            >
              05
            </span>

            <span
              class="section-label"
              style="font-size: 20px !important; font-weight: bolder"
            >
              NOTES
            </span>
          </div>

          <div class="writing-heading">
            <h2>기술 블로그</h2>

            <p>개발하면서 경험하고 배운 것들을 기록합니다.</p>
          </div>

          <div class="writing-list">
            <article class="writing-item">
              <div class="writing-meta">
                <span> BACKEND </span>
              </div>

              <div class="writing-content">
                <h3>[Node.js] Express란? (정의 및 사용법)</h3>
              </div>

              <a
                href="https://j-bbang.tistory.com/26"
                target="_blank"
                rel="noopener noreferrer"
                class="writing-arrow"
                style="text-decoration: none; color: inherit"
              >
                →
              </a>
            </article>

            <article class="writing-item">
              <div class="writing-meta">
                <span> FRONTEND </span>
              </div>

              <div class="writing-content">
                <h3>[Vue.js] Vue3 시작하기</h3>
              </div>

              <a
                href="https://j-bbang.tistory.com/8"
                target="_blank"
                rel="noopener noreferrer"
                class="writing-arrow"
                style="text-decoration: none; color: inherit"
              >
                →
              </a>
            </article>
          </div>
        </div>
      </section>

      <!-- ===================================================
           CONTACT
      ==================================================== -->

      <section id="contact" class="contact-section">
        <div class="container">
          <div class="contact-header">
            <span
              class="section-index"
              style="font-size: 20px !important; font-weight: bolder"
            >
              06
            </span>

            <span
              class="contact-label"
              style="font-size: 20px !important; font-weight: bolder"
            >
              CONTACT
            </span>
          </div>

          <div class="contact-content">
            <span class="contact-eyebrow"> LET'S BUILD SOMETHING </span>

            <h2>함께 일하고 싶으시다면</h2>

            <p class="contact-description">
              새로운 환경에서 문제를 해결하고 더 나은 시스템을 만드는 일에
              관심이 있습니다. 함께 이야기해보고 싶다면 편하게 연락해주세요.
            </p>

            <div class="contact-links">
              <a href="mailto:kwoghks0213@gmail.com" class="contact-link">
                <span
                  class="contact-link-label"
                  style="font-size: 13px; font-weight: bolder"
                >
                  EMAIL
                </span>

                <span class="contact-link-value"> kwoghks0213@gmail.com </span>

                <span class="contact-link-arrow"> ↗ </span>
              </a>

              <a
                href="https://github.com/bigvillage"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link"
              >
                <span
                  class="contact-link-label"
                  style="font-size: 13px; font-weight: bolder"
                >
                  GITHUB
                </span>

                <span class="contact-link-value">
                  https://github.com/bigvillage
                </span>

                <span class="contact-link-arrow"> ↗ </span>
              </a>

              <a
                href="https://j-bbang.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link"
              >
                <span
                  class="contact-link-label"
                  style="font-size: 13px; font-weight: bolder"
                >
                  BLOG
                </span>

                <span class="contact-link-value">
                  https://j-bbang.tistory.com/
                </span>

                <span class="contact-link-arrow"> ↗ </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================
           FOOTER
      ==================================================== -->

      <footer class="footer">
        <div class="container footer-inner">
          <div class="footer-left">
            <span class="footer-logo"> KIM JAEHWAN. </span>

            <span class="footer-copy"> BACKEND DEVELOPER </span>
          </div>

          <div class="footer-center">© 2026 KIM JAEHWAN</div>

          <div class="footer-right">
            <a href="#top"> BACK TO TOP ↑ </a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((element) => {
    observer?.observe(element);
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<style>
/*
  App.vue에서는 별도의 스타일을 사용하지 않습니다.

  전체 포트폴리오 스타일은
  src/style.css에서 관리합니다.
*/
.project-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #888;
}

.project-subtitle {
  margin: 0 0 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #888;
}

.project-title {
  margin: 0 0 15px;
  font-size: 28px;
  font-weight: 800;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
  padding: 15px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.project-info-item {
  display: flex;
  gap: 15px;
  font-size: 13px;
  line-height: 1.5;
}

.project-info-item .label {
  width: 90px;
  flex-shrink: 0;
  font-weight: 700;
  color: #888;
}
</style>
