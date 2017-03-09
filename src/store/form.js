import { observer } from "mobx-react";
import { observable, action, computed, autorun } from "mobx";
export default class FormStore {
    @observable title;
    @observable time;
    @observable contact;
    @observable room;
    @observable file;
    @observable explain;
    @observable tip;
    constructor() {
        this.formData = {};
        this.tip = {
            state: false,
            content: ''
        };
        this.title = '';
        this.time = '';
        this.contact = '';
        this.room = '';
        this.file = '';
        this.explain = '';
    }
    @action getValue(s, e) {
        var that = this;
        let val = e.currentTarget.value;
        let name = e.currentTarget.name;
        if (name == 'title') this.title = val;
        if (name == 'time') this.time = val;
        if (name == 'contact') this.contact = val;
        if (name == 'room') this.room = val;
        if (name == 'file') {
            var imgFile = e.currentTarget.files[0];
            var reader = new FileReader(); // 通过这个可以把路径图片转为base64 ，然后在img中预览
            reader.readAsDataURL(imgFile);
            reader.onload = function(evt) {
                that.file = evt.target.result;
            }
        }
        if (name == 'explain') this.explain = val;
        console.log(this.room, this.time, this.contact)
    }
    @action subForm() {
        this.formDataFn();
    }

    @action formDataFn() {
        this.formData['title'] = this.title;
        this.formData['time'] = this.time;
        this.formData['contact'] = this.contact;
        this.formData['room'] = this.room;
        this.formData['file'] = this.file;
        this.formData['explain'] = this.explain;
        var formData = this.formData;
        this.valid(formData);
    }
    valid(formData) {
        var that = this;
        for (var item in formData) {
            if (formData[item] == '') {
                this.tip.state = true;
                switch (item) {
                    case 'title':
                        this.tip.content = '题目不能为空，请输入题目';
                        break;
                    case 'time':
                        this.tip.content = '时间不能为空，请输入时间';
                        break;
                    case 'contact':
                        this.tip.content = '联系方式不能为空，请输入联系方式';
                        break;
                    case 'room':
                        this.tip.content = '房间号不能为空，请选择房间号';
                        break;
                    case 'file':
                        this.tip.content = '头像图片不能为空，请选择头像图片';
                        break;
                    case 'explain':
                        this.tip.content = '活动说明不能为空，请选择活动说明';
                        break;
                };
                that.hideTip();
                return false;
            } else {
                this.tip={
                    state:true,
                    content:'发起活动成功'
                }
                that.hideTip();
            }
        }
    }
    @action hideTip() {
        setTimeout(() => {
            this.tip = {
                state: false,
                content: ''
            }
        }, 1500);

    }
}
