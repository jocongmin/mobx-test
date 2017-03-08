import { observer } from "mobx-react";
import { observable, action, computed, autorun } from "mobx";
export default class FormStore {
    @observable title;
    @observable time;
    @observable contact;
    @observable room;
    @observable file;
    @observable imgSrc;
    constructor() {
        this.title = '';
        this.time = '';
        this.contact = '';
        this.room = '';
        this.file = 'img';
        this.imgSrc='';
    }
    @action getValue(s, e) {
        var that=this;
        let val = e.currentTarget.value;
        let name = e.currentTarget.name;
        if (name == 'title') this.title = val;
        if (name == 'time') this.time = val;
        if (name == 'contact') this.contact = val;
        if (name == 'room') this.room = val;
        if (name == 'file') {
            var imgFile=e.currentTarget.files[0];
            var reader = new FileReader();// 通过这个可以把路径图片转为base64 ，然后在img中预览
            reader.readAsDataURL(imgFile);
            reader.onload = function(evt) {
                that.file= evt.target.result;
            }
        }
        console.log(val);
    }
}
