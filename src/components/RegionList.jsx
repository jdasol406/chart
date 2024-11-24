import { useState } from 'react';
import './RegionList.css';

const RegionList = () => {
  // 지역 목록 및 검색 키워드 상태 관리
  const [regions] = useState([
    '대전동구',
    '대전중구',
    '대전서구',
    '대전유성',
    '대전대덕',
    '서울강서',
    '서울송파',
    '서울서초',
    '서울강동',
  ]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredRegions, setFilteredRegions] = useState(regions);

  // 검색 함수
  const regionSearch = () => {
    const filtered = regions.filter((region) =>
      region.includes(searchKeyword)
    );
    setFilteredRegions(filtered);
  };

  return (
    <>
      <div id="regionList-body">
        <div id="region">
          <div id="search">
            <input
              id="search-input"
              placeholder="지역"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button id="search-btn" onClick={regionSearch}>검색</button>
          </div>
          <div id="region-list">
            {filteredRegions.map((region, index) => (
              <div key={index}>{region}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionList;
