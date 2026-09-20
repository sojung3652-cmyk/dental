export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href: string; dropdown?: NavLink[] };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "병원소개",
    href: "#philosophy",
    dropdown: [
      { label: "인사말", href: "#philosophy" },
      { label: "의료진 소개", href: "#doctors" },
      { label: "병원 둘러보기", href: "/#gallery" },
      { label: "오시는 길", href: "#location" },
    ],
  },
  {
    label: "진료안내",
    href: "#services",
    dropdown: [
      { label: "일반 진료", href: "/reservation?service=general" },
      { label: "임플란트", href: "/reservation?service=implant" },
      { label: "사랑니 발치", href: "/reservation?service=wisdom" },
      { label: "스케일링", href: "/reservation?service=scaling" },
      { label: "교정", href: "/reservation?service=ortho" },
    ],
  },
  {
    label: "진료시간표",
    href: "#schedule",
  },
  {
    label: "커뮤니티",
    href: "#",
    dropdown: [
      { label: "공지사항", href: "#" },
      { label: "비급여수가표", href: "/pricing" },
    ],
  },
];
