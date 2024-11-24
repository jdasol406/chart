import { useState, useEffect } from "react";

const DataList = () => {
  const [data, setData] = useState(null); // 데이터를 저장할 state
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 관리

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // 데이터를 state에 저장
        setLoading(false); // 로딩 상태 종료
      })
      .catch((error) => {
        setError(error); // 에러 발생 시 에러 상태 저장
        setLoading(false);
      });
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행

  if (loading) return <div>Loading...</div>; // 로딩 중일 때
  if (error) return <div>Error: {error.message}</div>; // 에러 발생 시

  return (
    <>
      <div id="dataList-body">
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </div>
    </>
  )
}

export default DataList;