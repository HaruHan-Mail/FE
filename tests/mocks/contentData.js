export const mockContents = [
  {
    id: '1',
    title: '햄버거의 정의, 법으로 정해져 있다고?',
    summary:
      '미국에서는 소고기 패티가 들어가야만 ‘햄버거(Burger)’라고 부를 수 있다. 닭고기, 돼지고기, 식물성 패티로 만든 것은 법적으로 햄버거가 아니다.',
    background: [
      '미국 식품의약국(FDA)과 농무부(USDA)는 식품 명칭을 규정하는 법을 운영하고 있으며, ‘햄버거’는 반드시 소고기(100% Beef) 패티를 사용해야 한다.',
      '닭고기 패티를 사용하면 ‘치킨 샌드위치(Chicken Sandwich)’, 돼지고기 패티는 ‘포크 샌드위치(Pork Sandwich)’처럼 표기해야 한다.',
      '식물성 대체육(비욘드 미트, 임파서블 푸드 등)도 법적으로는 햄버거가 아니며, ‘Plant-Based Burger’ 또는 ‘Meatless Burger’ 등의 명칭을 사용한다.',
    ],
    importance: [
      '햄버거라는 단어의 법적 정의는 소비자가 식품을 오인하지 않도록 하기 위한 규정이다.',
      '패스트푸드 브랜드들은 이 규정을 따르기 위해 메뉴 이름을 신중하게 정해야 하며, 미국 시장에서 제품을 출시할 때 법적 검토가 필요하다.',
      '환경과 건강을 고려한 식물성 대체육 버거가 인기를 끌면서, 식품 규제의 변화 가능성도 논의되고 있다.',
    ],
    tip: [
      '미국 여행 중 패스트푸드점을 방문하면, 치킨 패티가 들어간 버거는 ‘햄버거’가 아니라 ‘샌드위치(Sandwich)’로 표기되는 것을 확인할 수 있다!',
      '식물성 패티가 들어간 제품이 ‘Plant-Based Burger’라고 적혀 있다면, 이는 소고기가 들어가지 않은 제품이라는 뜻이다.',
    ],
    resource: [
      'https://www.usda.gov/',
      'https://impossiblefoods.com/',
      'https://www.beyondmeat.com/',
    ],
  },
  {
    id: '2',
    title: 'Vue의 모든 것',
    summary: 'Vue는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.',
    background: [
      '가상 DOM(Virtual DOM)을 사용하여 UI 업데이트를 효율적으로 처리합니다.',
      '컴포넌트 기반 아키텍처를 통해 코드의 재사용성을 높입니다.',
    ],
    importance: [
      '선언적 뷰는 코드를 예측 가능하게 만들고 디버깅을 쉽게 합니다.',
      'Vue CLI와 Vite로 손쉽게 개발 환경을 구성할 수 있습니다.',
    ],
    tip: [
      'Vuex 또는 Pinia를 사용해 상태 관리를 단순화하세요.',
      'Composition API를 활용해 코드의 가독성과 재사용성을 높이세요.',
    ],
    additionalResources: ['https://vuejs.org', 'https://vue-ko.org/'],
  },
  {
    id: '3',
    title: 'React의 모든 것',
    summary: 'React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.',
    background: [
      '가상 DOM(Virtual DOM)을 사용하여 UI 업데이트를 효율적으로 처리합니다.',
      '컴포넌트 기반 아키텍처를 통해 재사용성과 유지보수성을 향상시킵니다.',
    ],
    importance: [
      'Hooks를 통해 상태와 라이프사이클 로직을 단순화합니다.',
      'JSX 문법으로 UI를 직관적이고 선언적으로 표현할 수 있습니다.',
    ],
    tip: [
      'React.memo와 useCallback으로 불필요한 렌더링을 최소화하세요.',
      'Context API로 전역 상태를 쉽게 공유하세요.',
    ],
    additionalResources: ['https://react.dev', 'https://react-ko.dev/'],
  },
];
