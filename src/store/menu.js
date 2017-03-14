import {observer} from "mobx-react";
import {observable, action, computed, autorun} from "mobx";
export default class MenuStore {
    @observable whichMenu;
    @observable itemsData;
    @observable menuItem;
    @observable specialTc;
    @observable cartTc;
    @observable proTc;
    constructor() {
        this.whichMenu = 0;
        this.itemsData = [];
        this.fetchItemData();
        this.menuItem=[];
        this.fetchMenuItem();
        this.specialTc=false;
        this.cartTc=false;
        this.proTc=false;
    }
    @action showSpecialTc(){
      this.specialTc=!this.specialTc;
    }
    @action showCartTc(){
      this.cartTc=!this.cartTc;
    }
    @action showProTc(){
      this.proTc=!this.proTc;
    }
    @action changeProItems(s, e) {
        let tar = e.currentTarget;
        let which = tar.dataset.which;
        this.menuItem.map((item)=>{
          item.on=false;
          if(item.id==which){
            item.on=true;
          }
        })
        this.whichMenu = which;
        this.fetchItemData();
    }
    @action fetchMenuItem(){
      this.menuItem=[
        {
          "id":0,
          "name":"推荐",
          "on":true
        },
        {
          "id":1,
          "name":"零食",
          "on":false
        },
        {
          "id":2,
          "name":"啤酒",
          "on":false
        },
        {
          "id":3,
          "name":"蔬菜",
          "on":false
        }
      ]
    }
    @action fetchItemData() {
        var reset=parseInt(Math.random()*100)
        var pri=(Math.random()*1000).toFixed(2)
        this.itemsData = [
            {
                "img_src": "img/pro-img-demo.png",
                "deposit": true,
                "title": "香蕉香蕉看风景时刻打飞机的看法就开始觉得是开发技术",
                "reset": reset,
                "pri": pri+1,
                "have": true,
                "special":false
            }, {
                "img_src": "img/pro-img-demo.png",
                "deposit": true,
                "title": "香蕉香蕉看风景时刻打飞机的看法就开始觉得是开发技术",
                "reset": reset+3,
                "pri": pri,
                "have": true,
                "special":false
            }, {
                "img_src": "img/pro-img-demo.png",
                "deposit": false,
                "title": "香蕉香蕉看风景时刻打飞机的看法就开始觉得是开发技术",
                "reset": reset,
                "pri": pri+2,
                "have": false,
                "special":false
            }, {
                "img_src": "img/pro-img-demo.png",
                "deposit": false,
                "title": "香蕉香蕉看风景时刻打飞机的看法就开始觉得是开发技术",
                "reset": reset,
                "pri": pri+2,
                "have": true,
                "special":true
            }
        ]
    }
}
