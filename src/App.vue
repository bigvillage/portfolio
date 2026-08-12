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
                REST API를 설계하고 서버의 비즈니스 로직과 인증 구조를
                구현합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> JavaScript </span>

                <span style="font-size: 13px"> TypeScript </span>

                <span style="font-size: 13px"> SQL </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="02">
              <h3>Backend</h3>

              <p>
                서비스 특성에 맞는 데이터 구조를 설계하고 검색과 조회 성능을
                고려합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> Node.js </span>
                <span style="font-size: 13px"> Express </span>
                <span style="font-size: 13px"> NestJS </span>
                <span style="font-size: 13px"> REST API </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="03">
              <h3>FRONTEND</h3>

              <p>
                API와 연결되는 화면을 구성하고 사용자가 이해하기 쉬운 UI를
                구현합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> Vue.js </span>
                <span style="font-size: 13px"> Pinia </span>
                <span style="font-size: 13px"> HTML </span>
                <span style="font-size: 13px"> CSS </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="04">
              <h3>Data</h3>

              <p>
                Linux 환경에서 서비스를 운영하고 프로세스와 웹 서버를
                관리합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> MongoDB </span>
                <span style="font-size: 13px"> MySQL </span>
                <span style="font-size: 13px"> Elasticsearch </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="05">
              <h3>Auth & Integration</h3>

              <p>
                JWT와 Cookie를 활용한 인증 구조를 구현하고 API 접근을
                관리합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> JWT </span>
                <span style="font-size: 13px"> Passport </span>
                <span style="font-size: 13px"> Cookie </span>
                <span style="font-size: 13px"> AWS S3 </span>
                <span style="font-size: 13px"> bcrypt </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="06">
              <h3>Infrastructure</h3>

              <p>
                로그와 검색 시스템을 활용해 문제를 추적하고 안정적인 개발 환경을
                구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> Linux </span>
                <span style="font-size: 13px"> Nginx </span>
                <span style="font-size: 13px"> PM2 </span>
                <span style="font-size: 13px"> AWS </span>
                <span style="font-size: 13px"> Cloudflare R2 </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="07">
              <h3>Search & Monitoring</h3>

              <p>
                로그와 검색 시스템을 활용해 문제를 추적하고 안정적인 개발 환경을
                구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> Elasticsearch </span>
                <span style="font-size: 13px"> Kibana </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="08">
              <h3>Architecture & Development</h3>

              <p>
                로그와 검색 시스템을 활용해 문제를 추적하고 안정적인 개발 환경을
                구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> TypeScript 기반 리빌딩 </span>
                <span style="font-size: 13px"> REST API 설계 </span>
                <span style="font-size: 13px"> 인증/인가 </span>
                <span style="font-size: 13px"> 파일 업로드/다운로드 </span>
                <span style="font-size: 13px"> 데이터 마이그레이션 </span>
              </div>
            </article>

            <article class="skill-card reveal" data-number="09">
              <h3>Tooling</h3>

              <p>
                로그와 검색 시스템을 활용해 문제를 추적하고 안정적인 개발 환경을
                구성합니다.
              </p>

              <div class="technology-list">
                <span style="font-size: 13px"> Git </span>
                <span style="font-size: 13px"> npm </span>
                <span style="font-size: 13px"> Swagger </span>
                <span style="font-size: 13px"> Postman </span>
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
                  <li>자사 그룹웨어 시스템, PMS 시스템 개발 및 운영</li>
                  <li>대한적십자사 그룹웨어 개발</li>
                  <li>SK엔펄스 / SK마이크로웍스 데이터 마이그레이션</li>
                  <li>고객사 요구사항 분석 및 기능 개발</li>
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
                  <li>
                    20여 개 고객사 그룹웨어 시스템 유지보수 (고객사 : 넥센,
                    귀뚜라미, 세방, 후성, 대법원(연구관리), 흥국생명, 코젠,
                    대한해운, 팬오션, 하림, NS홈쇼핑, 에쓰오일, 적십자, 팬택,
                    tlb, 에스트라, 이래AMS, 한세모빌리티, 동진쎄미캠, DSM,
                    티움바이오, 피유코어, 에이스테크 등)
                  </li>
                  <li>사용자 요구사항 분석 및 기능 개선</li>
                  <li>Vue.js 기반 화면 개발</li>
                  <li>Node.js / Express 기반 API 개발</li>
                  <li>MongoDB / Elasticsearch 검색 시스템 운영</li>
                  <li>Linux / Nginx / PM2 기반 서비스 운영</li>
                  <li>시스템 장애 대응 및 원인 분석</li>
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
                  FULL-STACK / PERSONAL PROJECT
                </span>

                <h3>DOC DRIVE</h3>

                <p class="project-subtitle">DOCUMENT MANAGEMENT SYSTEM</p>

                <div class="project-image">
                  <img
                    src="./assets/login.png"
                    alt="DOC DRIVE 문서관리시스템"
                  />
                </div>

                <p class="project-description">
                  Node.js와 Express 기반으로 직접 설계하고 개발한
                  문서관리시스템입니다. 문서 업로드·관리, 검색, 인증 및 사용자
                  관리 기능을 구현했으며, MongoDB와 Elasticsearch를 연동해 문서
                  데이터 관리와 검색 기능을 구성했습니다. 파일 저장소는
                  Cloudflare R2를 활용하고 S3 호환 API를 통해 파일 업로드 및
                  다운로드를 처리하여 애플리케이션 서버와 파일 저장 영역을
                  분리했습니다.
                </p>

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
                  FULL-STACK / REBUILDING PROJECT
                </span>

                <h3>DOC DRIVE</h3>

                <p class="project-subtitle">DOCUMENT MANAGEMENT SYSTEM</p>

                <p class="project-description">
                  기존 Express 기반으로 개발한 문서관리시스템을 NestJS와
                  TypeScript 기반으로 리빌딩한 프로젝트입니다. 기존 기능을
                  유지하면서 모듈화된 구조와 타입 안정성을 확보하고, 인증, 문서
                  관리, 파일 업로드 및 검색 기능을 개선했습니다.
                </p>

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
                    >AWS S3</span
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
</style>
