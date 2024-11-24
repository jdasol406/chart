import './RegionList.css'

const RegionList = () => {

  return (
    <>
      <div id="regionList-body">
        <div id="region">
          <div>
            <input placeholder='지역'/>
          </div>
          <div id='region-list'>
            <div id='daejeonDonggu'>대전동구</div>
            <div id='daejeonJunggu'>대전중구</div>
            <div id='daejeonSeoggu'>대전서구</div>
            <div id='daejeonYuseong'>대전유성</div>
            <div id='daejeonDaedeok'>대전대덕</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegionList;