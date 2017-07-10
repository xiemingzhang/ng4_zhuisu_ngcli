import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UEditorComponent } from 'ngx-ueditor';
import { flyIn } from '../../../animations/fly-in';

@Component({
  moduleId: module.id,
  selector: 'enterprise',
  templateUrl: 'enterprise.component.html',
  styleUrls: [ 'enterprise.component.scss' ],
  animations:[flyIn]
})
export class EnterpriseComponent implements OnInit {
   @ViewChild('full') full: UEditorComponent;
    full_source: string;

    constructor(private el: ElementRef) {}

    setLanguage(lang: 'zh-cn' | 'en') {
        this.full.setLanguage(lang);
    }

    getAllHtml() {
        alert(this.full.Instance.getAllHtml())
    }

    getContent() {
        let arr = [];
        arr.push("使用editor.getContent()方法可以获得编辑器的内容");
        arr.push("内容为：");
        arr.push(this.full.Instance.getContent());
        alert(arr.join("\n"));
    }

    getContentTxt() {
        let arr = [];
        arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
        arr.push("编辑器的纯文本内容为：");
        arr.push(this.full.Instance.getContentTxt());
        alert(arr.join("\n"));
    }

    setContent(isAppendTo: boolean) {
        let arr = [];
        arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
        this.full.Instance.setContent('欢迎使用ueditor', isAppendTo);
        alert(arr.join("\n"));
    }

    getPlainTxt() {
        let arr = [];
        arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
        arr.push("内容为：");
        arr.push(this.full.Instance.getPlainTxt());
        alert(arr.join('\n'))
    }

    hasContent() {
        let arr = [];
        arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
        arr.push("判断结果为：");
        arr.push(this.full.Instance.hasContents());
        alert(arr.join("\n"));
    }

    insertHtml() {
        let value = prompt('插入html代码', '');
        this.full.Instance.execCommand('insertHtml', value)
    }

    getText() {
        //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
        let range = this.full.Instance.selection.getRange();
        range.select();
        let txt = this.full.Instance.selection.getText();
        alert(txt)
    }

    focus: boolean | string;
    addListenerFocus() {
        this.full.addListener('focus', () => {
            this.focus = `fire focus in ${new Date().getTime()}`;
        });
        this.focus = '监听中，尝试在编辑中输入几个字！';
    }
    removeListenerFocus() {
        this.full.removeListener('focus');
        this.focus = '已移除监听';
    }

    config_source: string;
    config: any = {
        toolbars: [
             [
                 'fullscreen'//全屏
                 , 'undo'//撤销
                 , 'redo'//重做
                 , '|'
                 , 'bold'//加粗
                 , 'italic'//斜体
                 , 'underline'//下划线
                 , 'fontborder'//字符边框
                 , 'strikethrough'//删除线
                 , 'superscript'//上标
                 , 'subscript'//下标
                 , 'removeformat'//清楚格式
                 , 'formatmatch'//格式刷
                 , 'autotypeset'//自动排版
                 , 'blockquote'//引用
                 , 'pasteplain'//纯文本粘贴模式
                 , '|'
                 , 'forecolor'//字体颜色
                 , 'backcolor'//背景色
                 , 'insertorderedlist'//有序列表
                 , 'insertunorderedlist'//无序列表
                 , 'selectall'//全选
                 , 'cleardoc'//清空文档
                 , '|'
                 , 'rowspacingtop'//段前距
                 , 'rowspacingbottom'//段后距
                 , 'lineheight'//行间距
                 , '|'
                 , 'customstyle'//自定义标题
                 , 'paragraph'//段落
                 , 'fontfamily'//字体
                 , 'fontsize'//字号
                 , '|'
                 , 'directionalityltr'//从左向右输入
                 , 'directionalityrtl'//从右向左输入
                 , 'indent'//首行缩进
                 , '|'
                 , 'justifyleft'//居左对齐
                 , 'justifycenter'//居中对齐
                 , 'justifyright'//居右对齐
                 , 'justifyjustify'//两端对齐
                 , '|'
                 , 'touppercase'//字母大写
                 , 'tolowercase'//字母小写
                 , '|'
                 , 'link'//超链接
                 , 'unlink'//取消链接
                 , 'anchor'//锚点
                 , '|'
                 , 'imagenone'//默认
                 , 'imageleft'//左浮动
                 , 'imageright'//右浮动
                 , 'imagecenter'//居中
                 , '|'
                 , 'insertimage'//图片
                 , 'attachment'//附件
                 , 'pagebreak'//分页
                 , 'template'//模版
                 , 'background'//背景
                 , '|'
                 , 'horizontal'//分割线
                 , 'date'//日期
                 , 'time'//时间
                 , '|'
                 , 'inserttable'//插入表格
                 , 'deletetable'//删除表格
                 , 'insertparagraphbeforetable'//表格前插入行
                 , 'insertrow'//前插入行
                 , 'deleterow'//删除行
                 , 'insertcol'//前插入列
                 , 'deletecol'//删除列
                 , 'mergecells'//合并多个单元格
                 , 'mergeright'//右合并单元格
                 , 'mergedown'//下合并单元格
                 , 'splittocells'//完全拆分单元格
                 , 'splittorows'//拆分成行
                 , 'splittocols'//拆分成列
                 , '|'
                 , 'print'//打印
                 , 'preview'//预览
                 , 'searchreplace'//查找与替换
                 , 'help'//帮助
                 , 'drafts'//草稿箱
             ]
         ],
         /*[[
              
             'undo', 'redo',  'bold', 'italic', 'underline', 'strikethrough',  'superscript', 'subscript',  'forecolor', 'backcolor',  'removeformat',
            'insertorderedlist', 'insertunorderedlist',  'selectall', 'cleardoc', 'paragraph',  'fontfamily', 'fontsize' ,
             'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify' ,
            'link', 'unlink',  'emotion','date', 'time', 'image', 'video', 'simpleupload', 'insertimage',  'map',
             'horizontal',  'preview', 'fullscreen', 'drafts', 'formula','searchreplace','print','inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts'
        
            ]]*/
            /*'fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
            'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
            'print', 'preview', 'searchreplace', 'drafts', 'help'*/
        autoClearinitialContent: true,
        wordCount: false
    };

    form_source: string;

    custom_source: string;
    custom: any = {
        toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'button']]
    };
  ngOnInit() {
    
  }

}