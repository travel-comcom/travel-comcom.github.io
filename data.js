/* =========================================================
   travel.comcom 小官網：所有內容都在這個檔案
   ---------------------------------------------------------
   之後要加連結：找到對應卡片，把 url 從 "" 改成網址即可。
   - url 留空 ("") 會自動顯示「連結待審核後放入」的佔位標示
   - type: "ig" = IG 貼文、"klook" / "kkday" = 票券分潤、"shopee" = 蝦皮分潤
   - 蝦皮連結只放在 goods（好物推薦）分頁，不要放到其他分類
   - featured：還沒對上主題分類的近期貼文，顯示在首頁
   ========================================================= */
window.SITE = {
  ig: "https://www.instagram.com/travel.comcom/",
  featured: [
    { title: "中部賞楓時間軸", tag: "IG 貼文", img: "img/maple.jpg",
      text: "武陵、福壽山、奧萬大、杉林溪、大雪山各自何時最美。", links: [
        { label: "看 IG 貼文", type: "ig", url: "https://www.instagram.com/p/DftFnQdin2a/" } ] }
  ],
  categories: [
    {
      id: "flights", icon: "✈️", title: "機票・旅展優惠",
      desc: "航點、旅展與促銷整理。",
      cards: [
        { title: "星宇台中直飛航點＋線上旅展", tag: "IG 貼文", img: "img/starlux.jpg",
          text: "從台中出發、有旅展票價的航線一次看。", links: [
            { label: "看 IG 貼文", type: "ig", url: "https://www.instagram.com/p/DfyPSdcir_K/" },
            { label: "目的地票券・eSIM（Klook / KKday）", type: "klook", url: "" } ] }
      ]
    },
    {
      id: "rain", icon: "☔", title: "雨天備案行程",
      desc: "看展、室內活動這類雨天備案。",
      cards: [
        { title: "台中週末看展逛活動", tag: "IG 貼文", img: "img/weekend.jpg",
          text: "市區免費大展、新展與季節活動整理。", links: [
            { label: "看 IG 貼文", type: "ig", url: "https://www.instagram.com/p/Dft808fiLND/" },
            { label: "展覽・體驗票券（Klook / KKday）", type: "kkday", url: "" } ] }
      ]
    },
    {
      id: "onsen", icon: "♨️", title: "溫泉・住宿推薦比較",
      desc: "溫泉和住宿怎麼選：氛圍、交通、特色一次比較。",
      cards: [
        { title: "中部溫泉怎麼選", tag: "IG 貼文", img: "img/onsen.jpg",
          text: "谷關、泰安、北港溪、東埔四區比較。", links: [
            { label: "看 IG 貼文", type: "ig", url: "https://www.instagram.com/p/DfvqdCEiMhj/" },
            { label: "溫泉・住宿票券（Klook / KKday）", type: "klook", url: "" } ] }
      ]
    },
    {
      id: "abroad", icon: "🧳", title: "出國實用攻略",
      desc: "打包清單、eSIM 比較、交通券、退稅與機場注意事項。",
      cards: [
        { title: "3 天 2 夜打包清單", tag: "即將發布", img: "img/packing.jpg",
          text: "國內外短旅行的必帶清單。", links: [
            { label: "IG 貼文（發布後放入）", type: "ig", url: "" },
            { label: "eSIM・機場交通（Klook / KKday）", type: "kkday", url: "" } ] }
      ]
    },
    {
      id: "food", icon: "🍜", title: "美食地圖清單",
      desc: "咖啡廳、小吃、熱湯整理成地圖清單。目前先從台中、彰化開始。",
      cards: [
        { title: "台中咖啡廳 5 選", tag: "IG 貼文", img: "img/cafe.jpg",
          text: "成真咖啡、BUBU ART CAFE、kafeD、COFFEE STOPOVER、米賀咖啡。", links: [
            { label: "看 IG 貼文", type: "ig", url: "https://www.instagram.com/p/DfwhmuBiKgr/" },
            { label: "Google 地圖清單", type: "map", url: "" } ] },
        { title: "台中暖胃熱湯 4 間", tag: "即將發布", img: "img/soup.jpg",
          text: "蒜味肉羹、牛肉麵、羊肉爐、煲湯。", links: [
            { label: "IG 貼文（發布後放入）", type: "ig", url: "" },
            { label: "Google 地圖清單", type: "map", url: "" } ] }
      ]
    }
  ],
  /* 好物推薦：只放蝦皮分潤連結。審核通過後把 url 填上、name 改成實際商品名 */
  goods: {
    title: "好物推薦", icon: "🛍️",
    desc: "行李、收納、旅行小物。只放我們覺得實用的東西，連結皆為蝦皮分潤連結。",
    groups: [
      { name: "行李・收納", items: [ { name: "商品待選", note: "", url: "" }, { name: "商品待選", note: "", url: "" } ] },
      { name: "旅行小物", items: [ { name: "商品待選", note: "", url: "" }, { name: "商品待選", note: "", url: "" } ] },
      { name: "3C・充電", items: [ { name: "商品待選", note: "", url: "" } ] }
    ]
  }
};
