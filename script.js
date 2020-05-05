var place_data=[
{
  tag: "taipei_city",
  num: "???????",
  place: "臺北市",
  explain: "???????"
},
{
  tag: "new_taipei_city",
  num: "5萬8千多頭",
  place: "新北市",
  explain: "???????"
},
{
  tag: "taichung_city",
  num: "???????",
  place: "台中市",
  explain: "???????"
},
{
  tag: "tainan_city",
  num: "56萬多頭",
  place: "臺南市",
  explain: "???????"
},
{
  tag: "kaohsiung_city",
  num: "30萬多頭",
  place: "高雄市",
  explain: "???????"
},
{
  tag: "keelung_city",
  num: "?????",
  place: "基隆市",
  explain: "???????"
},
{
  tag: "taoyuan_country",
  num: "15萬多頭",
  place: "桃園市",
  explain: "???????"
},
{
  tag: "hsinchu_city",
  num: "?????????",
  place: "新竹市",
  explain: "???????"
},
{
  tag: "hsinchu_country",
  num: "6萬5千多頭",
  place: "新竹縣",
  explain: "???????"
},
{
  tag: "miaoli_country",
  num: "6萬1千多頭",
  place: "苗栗縣",
  explain: "???????"
},
{
  tag: "changhua_country",
  num: "74萬多頭",
  place: "彰化縣",
  explain: "???????"
},
{
  tag: "nantou_country",
  num: "?????",
  place: "南投縣",
  explain: "???????"
},
{
  tag: "yunlin_country",
  num: "146萬多頭",
  place: "雲林縣",
  explain: "???????"
},
{
  tag: "chiayi_city",
  num: "??????",
  place: "嘉義市",
  explain: "???????"
},
{
  tag: "chiayi_country",
  num: "38萬多頭",
  place: "嘉義縣",
  explain: "???????"
},
{
  tag: "pingtung_country",
  num: "125萬多頭",
  place: "屏東縣",
  explain: "???????"
},
{
  tag: "yilan_country",
  num: "5萬多頭",
  place: "宜蘭縣",
  explain: "???????"
},
{
  tag: "hualien_country",
  num: "7萬多頭",
  place: "花蓮縣",
  explain: "???????"
},
{
  tag: "taitung_country",
  num: "8萬多頭",
  place: "台東縣",
  explain: "???????"
},
{
  tag: "penghu_country",
  num: "??????",
  place: "澎湖縣",
  explain: "???????"
},
{
  tag: "kinmen_country",
  num: "1萬多頭",
  place: "金門縣",
  explain: "???????"
},
{
  tag: "lienchiang_country",
  num: "??????",
  place: "連江縣",
  explain: "???????"
}
];

var vm = new Vue({
  el: "#app",
  data: {
    filter: "",
    place_data: place_data
  },computed: {
    now_area: function(){
      var vobj=this;
      var result=this.place_data.filter(function(obj){
        return obj.tag==vobj.filter;
      });
      if(result.length==0){
        return null;
      }
      return result[0];
    }
  }
});

$("path").mouseenter(function(e){
  var tagname=$(this).attr("data-name");
  vm.filter=tagname;

});