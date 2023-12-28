// let data = [
//     {
//       "id": 0,
//       "name": "肥宅心碎賞櫻3日",
//       "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//       "area": "高雄",
//       "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//       "group": 87,
//       "price": 1400,
//       "rate": 10
//     },
//     {
//       "id": 1,
//       "name": "貓空纜車雙程票",
//       "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//       "area": "台北",
//       "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//       "group": 99,
//       "price": 240,
//       "rate": 2
//     },
//     {
//       "id": 2,
//       "name": "台中谷關溫泉會1日",
//       "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//       "area": "台中",
//       "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//       "group": 20,
//       "price": 1765,
//       "rate": 7
//     }
//   ];

// 宣告一個 ticketCardArea 的變數，值為 抓取 document 文件中 class名稱為 ticketCard-area
const ticketCardArea = document.querySelector(".ticketCard-area");
// 宣告一個 searchResult 的變數，值為 抓取 document 文件中 id名稱為 searchResult-text
const searchResult = document.querySelector("#searchResult-text");
// 宣告一個 renderData 的變數，值為 一個箭頭函式，參數為 data
const renderData = (data) => {
    // 宣告一個 cardList 的變數，值為 空字串
    let cardList = "";
        // data 參數，使用 forEach 遍歷資料，使用箭頭函式，參數為 item，將遍歷完成的資料儲存在 item 中，資料型別為一個陣列資料，裡面包含了多個物件的資料
        data.forEach((item) => {
        // cardList 的變數，重新賦予值為 一段 html 結構的程式碼，其中分別帶入 forEach 遍歷完成的資料，imgUrl、area、rate、name、description、group、price
        cardList += `
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                    <img src="${item.imgUrl}" alt="">
                    </a>
                    <div class="ticketCard-region">${item.area}</div>
                    <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h3>
                            <a href="#" class="ticketCard-name">${item.name}</a>
                        </h3>
                        <p class="ticketCard-description">${item.description}</p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span><i class="fas fa-exclamation-circle"></i></span>
                            剩下最後<span id="ticketCard-num">${item.group}</span> 組
                        </p>
                        <p class="ticketCard-price">TWD 
                        <span id="ticketCard-price">${item.price}</span>
                        </p>
                    </div>
                </div>
            </li>`;
        });
        // ticketCardArea 的變數，插入HTML資料，值為 cardList 的資料
        ticketCardArea.innerHTML = cardList;
        // searchResult 的變數，插入 HTML 資料，值為 `本次搜尋共 ${data.length} 筆資料`，其中帶入 data 透過 length 計算 data 陣列資料筆數作用渲染值
        searchResult.innerHTML = `本次搜尋共 ${data.length} 筆資料`;
};
function init(){
  renderData(data);
}
init();
// 新增地區篩選功能
const regionSearch = document.querySelector('.regionSearch');
regionSearch.addEventListener("change",function(e) {
  let filterData;
  if (e.target.value === ""){
    filterData = data;
  }else {
    filterData = data.filter(function (item){
      return e.target.value === item.area;
    })
  }
  renderData(filterData);
});