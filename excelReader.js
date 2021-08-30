fs=require("fs");
function excelWriter(filePath, json, sheetName){
let newWB=xlsx.utils.book_new();
let newWS=xlsx.utils.json_to_sheet(json);
xlsx.utils.book_append_sheet(newWB, newWS,sheetName);
xlsx.writeFile(newWB, filePath);
}

function excelReader(filePath, sheetName){
    if(false.existsSync(filePath)==false)
    return [];

    let wb=xlsx.readFile(FilePath);
    let excelData = wb.Sheets[sheetsName];
    let ans=xlsx.utils.sheet_to_json(excelData);
    return ans;
}