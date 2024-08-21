const scriptId = 'AKfycbyErrgmGR9Dh_vZG6dEBOnZVAckokzGW7i1coxhCDkEnmKT-pgLzZ8-dVGmKJuiITTs'; // Google Apps Script 웹앱 URL로 교체

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
    renderTable(data); // 데이터를 테이블에 표시
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function renderTable(data) {
  const table = document.getElementById('data-table');
  
  // 기존 테이블 내용을 초기화
  table.innerHTML = '';

  // tableData 배열을 순회하며 테이블에 데이터 추가
  data.tableData.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');
    
    row.forEach((cell, colIndex) => {
      const td = document.createElement('td');
      
      // 셀 데이터 추가
      td.textContent = cell;

      // 배경색 적용
      td.style.backgroundColor = data.backgrounds[rowIndex][colIndex];

      // 폰트 색상 적용
      td.style.color = data.fontColors[rowIndex][colIndex];

      // 가로 정렬 적용
      td.style.textAlign = data.horizontalAlignments[rowIndex][colIndex];

      // 세로 정렬 적용
      td.style.verticalAlign = data.verticalAlignments[rowIndex][colIndex];

      // 추가 스타일링 (예: 폰트 크기, 굵기 등)
      td.style.fontSize = data.fontSizes[rowIndex][colIndex] + 'px';
      td.style.fontWeight = data.fontWeights[rowIndex][colIndex];
      td.style.fontStyle = data.fontStyles[rowIndex][colIndex];

      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  // 로딩 메시지를 숨기고 테이블을 표시
  document.getElementById('loading-indicator').style.display = 'none';
  table.style.display = '';
}
