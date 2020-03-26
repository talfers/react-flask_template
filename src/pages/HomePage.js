import React from 'react';
// import XLSX from 'xlsx';
const ExcelJS = require('exceljs');


function HomePage() {
  // const xlsx_file = XLSX.readFile('../../public/uploads/npm_xlsx.xlsx');
  // console.log(xlsx_file);
  var workbook = new ExcelJS.Workbook();
  workbook.xlsx.readFile('../../public/uploads/npm_xlsx.xlsx')
    .then(function() {
      console.log('done!');
    });
  return (
    <div>Home Page!!!</div>
  )
};

export default HomePage;
