import { Profile, Skill, Project, QAItem, TimelineItem } from './types';

export const profileData: Profile = {
  name: "이도윤",
  englishName: "Doyun Lee",
  role: "Creative Frontend Engineer",
  tagline: "시각적 우아함과 코드의 완결성을 추구하는 엔지니어입니다.",
  description: "안녕하세요! 사용자의 시선이 머무는 화면을 설계하고, 그 이면에 탄탄하게 동작하는 인프라를 구축하는 개발자 이도윤입니다. 컴포넌트 기반 디스펜싱, 렌더링 최적화, 그리고 일관성 있는 디자인 시스템에 관심이 많습니다. 고립된 개발이 아닌 제품팀 전체의 싱크를 맞추는 유연한 소통 문화를 선호합니다.",
  email: "doyun.lee.dev@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Seoul, South Korea",
  avatarUrl: "/src/assets/images/profile_avatar_1780991319221.png",
  stats: [
    { label: "실무 경력", value: "3년+" },
    { label: "보유 프로젝트", value: "12개" },
    { label: "성능/최적화 지표", value: "98점" },
    { label: "협업 지수", value: "100%" }
  ]
};

export const skillsData: Skill[] = [
  {
    name: "React / Next.js",
    level: 95,
    category: "Frontend",
    description: "SSR/SSG 및 렌더링 전략을 최적화하고, 복잡한 전역 상태 관리를 예측 가능하게 구조화합니다."
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Frontend",
    description: "엄격한 타입 안전성을 통해 런타임 오류가 없는 견고하고 자가 설명적인 코드를 작성합니다."
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frontend",
    description: "커스텀 컴포넌트 프레임워크 설계와 반응형 레이아웃 구축, CSS-in-JS 대비 빠른 페인팅 속도를 보장합니다."
  },
  {
    name: "Node.js (Express / NestJS)",
    level: 80,
    category: "Backend",
    description: "Representational API 서버 개발 및 인증 모델(JWT/OAuth), 미들웨어 가드 연동을 설계할 수 있습니다."
  },
  {
    name: "Firebase / Supabase",
    level: 85,
    category: "Backend",
    description: "Serverless 환경에서 빠른 데이터 동기화와 NoSQL 실시간 트리거링, 보안 규칙 수립을 지원합니다."
  },
  {
    name: "Figma & UI Design",
    level: 85,
    category: "Design/Tools",
    description: "디자인 매너를 이해하고 오토레이아웃, 컴포넌트 배리언트 시스템을 활용해 코드 변환을 수월하게 설계합니다."
  },
  {
    name: "Git / CI/CD Actions",
    level: 80,
    category: "Design/Tools",
    description: "워크플로우 표준화, 릴리즈 태그 자동화, 정적 리소스 CDN 배포 파이프라인 관리를 체계화합니다."
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "EcoSphere: 친환경 에코 트래커 대시보드",
    summary: "개인의 탄소 배출량 감소 목표 달성 상태를 시각화하고 커뮤니티 미션을 연동하는 친환경 라이프스타일 코칭 대시보드 애플리케이션",
    description: "사용자가 소비 영수증, 대중교통 이용, 디지털 탄소 발자국 데이터를 기반으로 친환경 점수를 모니터링할 수 있는 대규모 SPA입니다. 핵심 비즈니스 로직에 대해 실시간 데이터 바인딩을 적용하고 UI 모션 렌더링을 60fps로 실현하였습니다.",
    category: "Web App",
    tags: ["React", "TypeScript", "TailwindCSS", "Recharts", "Framer Motion"],
    role: "Lead Frontend Developer",
    period: "2025.08 - 2025.12 (5개월)",
    keyFeature: [
      "Recharts를 활용한 개인별 일일 탄소 소비량의 점진적 시각화 차트 구축",
      "복잡한 필터와 기간 조건 조회 시, 메모이제이션(useMemo) 및 쓰로틀링 기법 적용으로 렌더링 부하 45% 단축",
      "motion/react를 이용한 자연스러운 카드 레이아웃 전환 및 전이 효과 연출"
    ],
    imageUrl: "https://picsum.photos/seed/ecology/600/400"
  },
  {
    id: "proj-2",
    title: "FlowBase: 컴포넌트 기반 노코드 디자인 빌더",
    summary: "드래그 앤 드롭 방식으로 웹 컴포넌트 그리드를 실시간으로 재구성하여 즉각적으로 홍보 배너를 생성하는 SaaS 라이트급 빌더",
    description: "노코드 디자인 도구로, 사용자가 컴포넌트를 그리드 캔버스 위에 자유롭게 배치하고 Tailwind 스타일을 실시간 주입할 수 있습니다. 런타임 상에서 완성된 마크업 결과물을 원클릭 복사하고 JSON 구조로 다운로드하는 혁신적 컴포넌트 프리뷰 환경입니다.",
    category: "SaaS Product",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Dnd-Kit", "Zustand"],
    role: "Frontend Engineer (Solo)",
    period: "2024.11 - 2025.04 (5개월)",
    keyFeature: [
      "Dnd-Kit을 활용하여 가볍고 반응이 빠른 드래그앤드롭 격자 컨테이너 엔진 설계",
      "Zustand 스토어를 계층적으로 세분화하여 불필요한 전체 렌더링을 억제하고 독립 컴포넌트 스테이트만 동기화",
      "반응형 뷰포트(데스크톱, 태블릿, 모바일) 테스터 모드를 구축하여 일치도 100% 반영"
    ],
    imageUrl: "https://picsum.photos/seed/builder/600/400"
  },
  {
    id: "proj-3",
    title: "SyncRoom: 원격 협업 스페이스 & 태스크 캘린더",
    summary: "분산 근무 환경에서 팀원들의 현재 협업 상태를 타임라인으로 확인하고 프로젝트 스프린트를 관리할 수 있는 멀티 협업 도구",
    description: "실시간 동기화 기능을 탑재하여 팀원들의 상태, 현재 활성화중인 이슈, 그리고 간트차트 형태의 일정을 한눈에 볼 수 있도록 설계된 인터랙티브 협업 플랫폼입니다.",
    category: "Collaboration Tool",
    tags: ["React", "CSS Grid", "Lucide React", "Local Storage Core"],
    role: "Frontend & Interaction Designer",
    period: "2024.03 - 2024.08 (5개월)",
    keyFeature: [
      "CSS Grid와 Flexbox 조합의 무한 타임라인 가상 스크롤 뷰 설계",
      "실시간 상태 변경 시 유체 역학(Fluid physics)적 모션 피드백 UI 구현",
      "로컬 캐싱 최적화로 일시적 통신 유실 상태에서도 데이터 정밀도 유지"
    ],
    imageUrl: "https://picsum.photos/seed/collaboration/600/400"
  }
];

export const qaData: QAItem[] = [
  {
    id: "qa-1",
    question: "가장 보람을 느끼는 순간은 언제인가요?",
    answer: "훌륭한 시각 인터랙션과 부드러운 전환 인터랙션이 실현되었을 때, 그리고 그것을 사용하는 유저가 '정말 만족스럽게 작동한다'며 가치를 알아주는 피드백을 전달해 줄 때 가장 보람을 느낍니다. 시각을 바꾸는 크리에이티브한 힘이 개발자의 최대 지위라고 생각합니다.",
    iconName: "Heart"
  },
  {
    id: "qa-2",
    question: "가장 선호하는 프론트엔드 작업 방식은?",
    answer: "처음부터 완벽한 프레임워크를 올리는 것보다, '디자인 시스템'의 약속을 정의하며 단원별로 견고하게 레고 블럭 같은 원자(Atomic) 컴포넌트를 다지는 방식을 선호합니다. 재사용성이 높아지고 협업 과정에서의 일관성을 선물하기 때문입니다.",
    iconName: "Code"
  },
  {
    id: "qa-3",
    question: "동료들은 도윤님과 협업할 때 어떤 수식어를 사용하나요?",
    answer: "'설명하기 편하고 솔루션을 함께 고민하는 개발 지지자'입니다. 디자인 부서나 기획 직무 동료들의 요구 사항에 대해 무조건 안 된다고 선을 긋지 않고, 기술적 대안을 친절하게 연구해서 120%의 결과로 제안하는 든든한 커뮤니케이터 역할을 해냅니다.",
    iconName: "Users"
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "time-1",
    period: "2024.01 - Currently",
    title: "Senior UX Frontend Developer",
    institution: "넥스트코드 테크놀로지 (NextCode Technologies)",
    description: "디자인 시스템 리뉴얼, 핵심 대시보드 렌더링 최적화(LCP 지표 1.2s 단축) 주도 및 프론트엔드 유닛 빌드업"
  },
  {
    id: "time-2",
    period: "2022.03 - 2023.12",
    title: "Junior Software Engineer",
    institution: "블루리본 랩스 (Blue Ribbon Labs)",
    description: "하이브리드 모바일 앱 웹뷰 코어 개발, 에코시스템 컴포넌트 마이그레이션 주도 및 사내 웹 접근성 표준화"
  },
  {
    id: "time-3",
    period: "2018.03 - 2022.02",
    title: "컴퓨터공학 학사 (B.S. in Computer Science)",
    institution: "한국정보기술대학교 (Korea Institute of Information Tech)",
    description: "소프트웨어 공학 전공 우수 트랙 수료, 융합 웹 디자인 및 인터랙션 디자인 학술 전람회 금상 수상"
  }
];
