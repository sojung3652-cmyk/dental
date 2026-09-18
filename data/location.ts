export const TRANSIT = {
  subway: {
    lines: [
      { line: "2호선 산뜻역", detail: "1, 2번 출구 (도보 5분)" },
      { line: "4호선 편안역", detail: "3번 출구 (도보 8분)" },
    ],
  },
  bus: {
    stops: [
      {
        name: "산뜻시청 정류장",
        routes: [
          { type: "마을", numbers: "5-1, 8" },
          { type: "간선", numbers: "100, 200, 301" },
          { type: "지선", numbers: "5001, 5002, 5502" },
        ],
      },
      {
        name: "편안구청 정류장",
        routes: [
          { type: "마을", numbers: "3, 12" },
          { type: "간선", numbers: "150" },
        ],
      },
    ],
  },
  parking: {
    title: "산뜻빌딩 지하 주차장",
    subtitle: "지하 1층~4층",
    lines: [
      "방문 확인 시 2시간 무료",
      "초과 시 30분당 1,000원",
      "진입로: 산뜻대로 정면",
      "대체: 편안구 공영주차장 (도보 3분)",
    ],
  },
} as const;
