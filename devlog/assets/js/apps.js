/* ─────────────────────────────────────────────
   골목에 들어갈 앱 목록
   새 앱이 나오면 APP_LIST_START 바로 아래(맨 앞)에 객체를 추가하면
   메인 골목, 가게 안내, 상세 페이지의 이웃 가게가 함께 바뀝니다.
   (JS가 꺼진 경우용으로 index.html의 <noscript> 목록에도 한 줄 추가)
   paused: true 이면 가게 불이 꺼지고 "잠시 휴업" 종이가 붙습니다.
   ───────────────────────────────────────────── */
window.APPS = [
  // APP_LIST_START
  {
    id: 'toreachu', name: '토리츄', en: 'toReachu',
    desc: '모르는 누군가에게 종이배·유리병·소원을 띄워 보내는 수채화 바다예요. 설치 없이 링크로 열려요.',
    date: '2026-11-13', page: 'toreachu.html', icon: 'assets/icons/toreachu-icon.png',
    color: '#8fd8e0', brick: '#3f4a6b'
  },
  {
    id: 'temily', name: '테밀리', en: 'Temily',
    desc: '테니스 클럽 운영을 앱 하나로 해결해요. 일정, 참석 투표, 대진표, 전적을 한곳에서 관리할 수 있어요.',
    date: '2026-06-20', page: 'temily.html', icon: 'assets/icons/temily-icon.png',
    color: '#cfe355', brick: '#6b3f4a'
  },
  {
    id: 'foundi', name: '파운디', en: 'Found-i',
    desc: '동네에서 잃어버린 물건과 주운 물건을 서로 이어 주는 분실물 서비스예요.',
    date: '2026-06-08', page: 'foundi.html', icon: 'assets/icons/foundi-icon.png',
    color: '#ffad4d', brick: '#4f4374', paused: true
  },
  {
    id: 'hangong', name: '한손공부', en: 'HanGong',
    desc: '자투리 시간에 한 손으로 넘기며 외우는 플래시카드 학습 앱이에요.',
    date: '2026-06-02', page: 'hangong.html', icon: 'assets/icons/hangong-icon.png',
    color: '#7db4ff', brick: '#6a4a36'
  }
  // APP_LIST_END
];
