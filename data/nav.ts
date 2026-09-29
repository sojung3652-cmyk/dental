export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href: string; dropdown?: NavLink[] };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "병원소개",
    href: "#philosophy",
    dropdown: [
      { label: "인사말", href: "/about/greeting" },
      { label: "의료진 소개", href: "/doctors" },
      { label: "병원 둘러보기", href: "/about/gallery" },
      { label: "오시는 길", href: "/location" },
    ],
  },
  {
    label: "진료안내",
    href: "/services",
    dropdown: [
      { label: "일반 진료", href: "/services/general" },
      { label: "임플란트", href: "/services/implant" },
      { label: "사랑니 발치", href: "/services/wisdom" },
      { label: "스케일링", href: "/services/scaling" },
      { label: "교정", href: "/services/ortho" },
    ],
  },
  {
    label: "진료시간표",
    href: "#schedule",
  },
  {
    label: "커뮤니티",
    href: "/community/notice",
    dropdown: [
      { label: "공지사항", href: "/community/notice" },
      { label: "비급여수가표", href: "/community/prices" },
    ],
  },
];
