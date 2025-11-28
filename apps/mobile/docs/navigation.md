# 🧭 **로보펫 앱 최종 구조 추천표 (RN vs WebView)**

**— WebView 중심 전략 (요청 반영)**

| 대분류            | 구분                   | 페이지(스크린) 이름          | 설명                                                                              | 구현 방식   |
| ----------------- | ---------------------- | ---------------------------- | --------------------------------------------------------------------------------- | ----------- |
| **Auth**          | **Auth**               | 로그인                       | 이메일/소셜 로그인, 세션 관리                                                     | **RN**      |
|                   |                        | 회원가입                     | 약관 동의 + 계정 생성                                                             | **RN**      |
|                   |                        | 비밀번호 찾기                | 인증번호/재설정                                                                   | **RN**      |
| **Device(Home)**  | **기기 등록**          | 기기 추가 시작 화면          | BLE 권한 요청 / 기기 탐색 시작 / 주변 기기 리스트 표시                            | **RN**      |
|                   |                        | Wi-Fi 입력 화면(SoftAP 포함) | SSID 선택 + 비밀번호 입력                                                         | **RN**      |
|                   |                        | 기기 연결 중 화면            | 초기 페어링 UI                                                                    | **RN**      |
|                   |                        | 기기 등록 완료               | 완료 안내                                                                         | **RN**      |
|                   | **홈/기기 제어**       | 홈 대시보드                  | 현재 기기 요약 상태(세척 버튼, 야간모드, 경고 등), 작동 상세 섹션, 예약 설정 섹션 | **RN**      |
|                   |                        | 기기 추가 진입 화면          | 기기 이미지, 기기 추가 버튼                                                       | **RN**      |
|                   |                        | 예약 설정                    | 자동 세척 스케줄 설정                                                             | **RN**      |
|                   |                        | 작동 상세                    | 1080p 실시간 스트리밍                                                             | **Webview** |
| **Notifications** | **알림/푸시**          | 알림 종류 목록               | 배변 일지(아래 기록/배변 이력으로 연결), 건강 분석, 기기 알림                     | **RN**      |
|                   |                        | 건강 분석                    | 건강 정보, 이상 배변 활동 기록                                                    | **Webview** |
|                   |                        | 기기 알림 목록               | 기기 알림 목록, 날짜 선택                                                         | **Webview** |
|                   |                        | 기기 알림 상세               | 기기 알림 상세 내용                                                               | **Webview** |
|                   | **기록/배변 이력**     | 배변 기록 리스트             | 날짜별 이벤트 요약 리스트                                                         | **WebView** |
|                   |                        | 배변 이벤트 상세             | 이벤트 이미지, 스탬프, 메모                                                       | **WebView** |
|                   |                        | 이벤트 영상 재생             | HTML5 video/hls.js 기반 재생                                                      | **WebView** |
| **Profile**       | **프로필/설정**        | 내 정보                      | 계정 정보, 로그아웃                                                               | **RN**      |
|                   |                        | 알림 설정                    | 푸시 알림 On/Off, 토픽 선택                                                       | **RN**      |
|                   |                        | 앱 설정                      | 캐시 삭제/앱 버전                                                                 | **RN**      |
|                   | **통계/분석**          | 주간/월간 통계               | 그래프 기반 패턴 차트                                                             | **WebView** |
|                   |                        | 패턴 상세 분석               | 배변 주기/시간대 분석                                                             | **WebView** |
|                   | **기기 관리(Admin)**   | 기기 상세 정보               | 모델명, 펌웨어 버전, 연결 상태                                                    | **RN**      |
|                   |                        | 상세 로그/에러 로그          | 텍스트 기반 긴 로그                                                               | **WebView** |
|                   |                        | 기기 설정(고급)              | 개발자/AS용 설정 페이지                                                           | **WebView** |
|                   | **도움말/운영 콘텐츠** | 공지사항                     | CMS 기반                                                                          | **WebView** |
|                   |                        | 가이드/튜토리얼              | 이미지·텍스트 문서                                                                | **WebView** |
|                   |                        | FAQ                          | CMS                                                                               | **WebView** |
|                   |                        | 약관/개인정보 처리방침       | 웹 문서                                                                           | **WebView** |

---

# Expo-router 설계

핵심만 정리하면: **Expo Router 기준으로 `(auth)` + `(tabs)` 두 개의 큰 그룹을 두고, 탭 안에서 다시 `home / notifications / profile` 3스택으로 쪼개는 구조**. WebView 화면은 “파일명만 다를 뿐, 전부 같은 Stack 안의 라우트”로 본다.

아래 구조는 **SDK 53 / Router 5 기준 규칙**(route group, root `_layout`, `index.tsx` 초기 진입 등)을 따른다.([Expo Documentation](https://docs.expo.dev/router/basics/layout/?utm_source=chatgpt.com))

---

## 1. 최상위 구조 (app 디렉터리)

```
app/
  _layout.tsx           // 루트 레이아웃: 공통 Provider, 테마, 세션 로딩 등
  index.tsx             // 최초 진입: 세션 보고 로그인/탭으로 redirect

  (auth)/               // 로그인 상태 필요 없는 그룹
    _layout.tsx         // Auth 전용 Stack
    login.tsx           // 로그인
    signup.tsx          // 회원가입
    forgot-password.tsx // 비밀번호 찾기

  (tabs)/               // 로그인 이후 메인 탭 그룹
    _layout.tsx         // Tabs 레이아웃 (Home / Notifications / Profile 탭)
    home/               // 기기 홈/제어 탭
      _layout.tsx
      index.tsx         // 기기 추가 진입/기본 홈(단일 기기면 바로 대시보드 진입 가능)
      dashboard.tsx     // 홈 대시보드 (RN)
      schedule.tsx      // 예약 설정 (RN)
      live.tsx          // 작동 상세(실시간 스트리밍 WebView 래핑)

      device-register/  // 기기 등록 플로우 전용 Stack 세그먼트
        _layout.tsx     // (선택) 등록 플로우 안에서만 헤더/제스처 제어
        index.tsx       // 기기 추가 시작 화면 (BLE 권한 요청, 탐색)
        wifi.tsx        // Wi-Fi 입력 화면 (SoftAP 포함)
        connecting.tsx  // 기기 연결 중 화면
        complete.tsx    // 기기 등록 완료

    notifications/      // 알림/기록 탭
      _layout.tsx
      index.tsx         // 알림 종류 목록 (RN)

      health.tsx        // 건강 분석(WebView)
      device-alerts/    // 기기 알림 관련
        index.tsx       // 기기 알림 목록(WebView)
        [alertId].tsx   // 기기 알림 상세(WebView)

      records/          // 기록/배변 이력
        index.tsx       // 배변 기록 리스트(WebView)
        [eventId].tsx   // 배변 이벤트 상세(WebView)
        [eventId]-video.tsx  // 이벤트 영상 재생(WebView) – 혹은 modal 형태

    profile/            // 프로필/설정 탭
      _layout.tsx
      index.tsx         // 내 정보 (RN)
      notification-settings.tsx // 알림 설정 (RN)
      app-settings.tsx  // 앱 설정 (RN)

      stats/            // 통계/분석
        index.tsx       // 주간/월간 통계(WebView)
        [period].tsx    // 패턴 상세 분석(WebView) (예: week, month)

      device/           // 기기 관리(Admin)
        index.tsx       // 기기 상세 정보 (RN)
        logs.tsx        // 상세 로그/에러 로그(WebView)
        advanced.tsx    // 기기 설정(고급)(WebView)

      help/             // 도움말/운영 콘텐츠
        notice.tsx      // 공지사항(WebView)
        guide.tsx       // 가이드/튜토리얼(WebView)
        faq.tsx         // FAQ(WebView)
        policy.tsx      // 약관/개인정보 처리방침(WebView)

```

> 비-스크린 컴포넌트(components/, hooks/ 등)는 app 바깥에 두는 게 규칙이다.(Expo Documentation)

예:

`src/components`, `src/features`, `src/webviews` 같은 식으로.

---

## 2. 스크린 목록 ↔ 파일 매핑 정리

### Auth

| 페이지        | 파일 경로                        | 구현 |
| ------------- | -------------------------------- | ---- |
| 로그인        | `app/(auth)/login.tsx`           | RN   |
| 회원가입      | `app/(auth)/signup.tsx`          | RN   |
| 비밀번호 찾기 | `app/(auth)/forgot-password.tsx` | RN   |

### Device(Home) 탭

| 구분         | 페이지              | 파일 경로                                          | 구현         |
| ------------ | ------------------- | -------------------------------------------------- | ------------ |
| 기기 등록    | 기기 추가 시작      | `app/(tabs)/home/device-register/index.tsx`        | RN           |
|              | Wi-Fi 입력          | `app/(tabs)/home/device-register/wifi.tsx`         | RN           |
|              | 기기 연결 중        | `app/(tabs)/home/device-register/connecting.tsx`   | RN           |
|              | 기기 등록 완료      | `app/(tabs)/home/device-register/complete.tsx`     | RN           |
| 홈/기기 제어 | 홈 대시보드         | `app/(tabs)/home/dashboard.tsx` (또는 `index.tsx`) | RN           |
|              | 기기 추가 진입 화면 | `app/(tabs)/home/index.tsx`                        | RN           |
|              | 예약 설정           | `app/(tabs)/home/schedule.tsx`                     | RN           |
|              | 작동 상세(실시간)   | `app/(tabs)/home/live.tsx`                         | WebView 래핑 |

### Notifications 탭

| 구분           | 페이지           | 파일 경로                                              | 구현    |
| -------------- | ---------------- | ------------------------------------------------------ | ------- |
| 알림/푸시      | 알림 종류 목록   | `app/(tabs)/notifications/index.tsx`                   | RN      |
|                | 건강 분석        | `app/(tabs)/notifications/health.tsx`                  | WebView |
|                | 기기 알림 목록   | `app/(tabs)/notifications/device-alerts/index.tsx`     | WebView |
|                | 기기 알림 상세   | `app/(tabs)/notifications/device-alerts/[alertId].tsx` | WebView |
| 기록/배변 이력 | 배변 기록 리스트 | `app/(tabs)/notifications/records/index.tsx`           | WebView |
|                | 배변 이벤트 상세 | `app/(tabs)/notifications/records/[eventId].tsx`       | WebView |
|                | 이벤트 영상 재생 | `app/(tabs)/notifications/records/[eventId]-video.tsx` | WebView |

### Profile 탭

| 구분          | 페이지                 | 파일 경로                                      | 구현    |
| ------------- | ---------------------- | ---------------------------------------------- | ------- |
| 프로필/설정   | 내 정보                | `app/(tabs)/profile/index.tsx`                 | RN      |
|               | 알림 설정              | `app/(tabs)/profile/notification-settings.tsx` | RN      |
|               | 앱 설정                | `app/(tabs)/profile/app-settings.tsx`          | RN      |
| 통계/분석     | 주간/월간 통계         | `app/(tabs)/profile/stats/index.tsx`           | WebView |
|               | 패턴 상세 분석         | `app/(tabs)/profile/stats/[period].tsx`        | WebView |
| 기기 관리     | 기기 상세 정보         | `app/(tabs)/profile/device/index.tsx`          | RN      |
|               | 상세 로그/에러 로그    | `app/(tabs)/profile/device/logs.tsx`           | WebView |
|               | 기기 설정(고급)        | `app/(tabs)/profile/device/advanced.tsx`       | WebView |
| 도움말/콘텐츠 | 공지사항               | `app/(tabs)/profile/help/notice.tsx`           | WebView |
|               | 가이드/튜토리얼        | `app/(tabs)/profile/help/guide.tsx`            | WebView |
|               | FAQ                    | `app/(tabs)/profile/help/faq.tsx`              | WebView |
|               | 약관/개인정보 처리방침 | `app/(tabs)/profile/help/policy.tsx`           | WebView |

---

## 3. 라우팅/가드 관점에서 한 줄 요약

- `app/_layout.tsx` : 전역 Stack + 세션 초기화.
- `app/index.tsx` : 세션 보고 `/(tabs)/home` 또는 `/(auth)/login` 으로 redirect.
- `(auth)` 그룹: 로그인 불필요, 로그인 후엔 접근 막을 수 있음.
- `(tabs)` 그룹: **Guarded Group**으로 로그인 필요하게 걸 수 있음 (Router 5 기능).([Expo](https://expo.dev/changelog/sdk-53?utm_source=chatgpt.com))
- 각 탭(`home`, `notifications`, `profile`)은 자체 `_layout.tsx`에서 `Stack` 으로 관리.([Expo Documentation](https://docs.expo.dev/router/basics/layout/?utm_source=chatgpt.com))
