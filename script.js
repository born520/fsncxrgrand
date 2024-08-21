const scriptId = 'YOUR_ACTUAL_SCRIPT_ID'; // Google Apps Script 웹앱 URL로 교체

// Google Apps Script에서 데이터를 가져와서 처리
fetch(`https://script.google.com/macros/s/${scriptId}/exec`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // JSON으로 파싱
  })
  .then(data => {
    console.log(data); // JSON 데이터 확인
    renderTable(data, true); // 데이터를 테이블에 표시
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function renderTable(data, isUpdate) {
  const table = document.getElementById('data-table');
  
  // 기존 테이블 내용을 초기화
  table.innerHTML = '';

  data.tableData.forEach((row) => {
    const tr = document.createElement('tr');
    row.forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  document.getElementById('loading-indicator').style.display = 'none';
  table.style.display = '';
}
