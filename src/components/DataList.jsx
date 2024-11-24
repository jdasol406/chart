import './DataList.css'

const DataList = ({ data }) => {

  return (
    <>
      <div id="dataList-body">
        <h3>데이터 목록</h3>
        <table id="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>UV</th>
              <th>PV</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.uv}</td>
                <td>{item.pv}</td>
                <td>{item.amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DataList;