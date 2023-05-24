//////////////////wageditor富文本////////////////
const { createEditor, createToolbar } = window.wangEditor
//1
const editorConfig = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      document.getElementById("issue_decription_textarea").value = html;
    }
}
const editor = createEditor({
    selector: '#editor-container',
    html: '<p><br></p>',
    config: editorConfig,
    mode: 'simple',
})

const toolbarConfig = {}
const toolbar = createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'simple',
})

//2
const editorConfig2 = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      document.getElementById("issue_analysis_textarea").value = html;
    }
}
const editor2 = createEditor({
    selector: '#editor-container2',
    html: '<p><br></p>',
    config: editorConfig2,
    mode: 'simple',
})

const toolbarConfig2 = {}
const toolbar2 = createToolbar({
    editor:editor2,
    selector: '#toolbar-container2',
    config: toolbarConfig2,
    mode: 'simple',
})

//3
const editorConfig3 = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      document.getElementById("root_cause_textarea").value = html;
    }
}
const editor3 = createEditor({
    selector: '#editor-container3',
    html: '<p><br></p>',
    config: editorConfig3,
    mode: 'simple',
})

const toolbarConfig3 = {}
const toolbar3 = createToolbar({
    editor:editor3,
    selector: '#toolbar-container3',
    config: toolbarConfig3,
    mode: 'simple',
})

//4
const editorConfig4 = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      document.getElementById("short_term_textarea").value = html;
    }
}
const editor4 = createEditor({
    selector: '#editor-container4',
    html: '<p><br></p>',
    config: editorConfig4,
    mode: 'simple',
})

const toolbarConfig4 = {}
const toolbar4 = createToolbar({
    editor:editor4,
    selector: '#toolbar-container4',
    config: toolbarConfig4,
    mode: 'simple',
})

//5
const editorConfig5 = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      document.getElementById("long_term_textarea").value = html;
    }
}
const editor5 = createEditor({
    selector: '#editor-container5',
    html: '<p><br></p>',
    config: editorConfig5,
    mode: 'simple',
})

const toolbarConfig5 = {}
const toolbar5 = createToolbar({
    editor:editor5,
    selector: '#toolbar-container5',
    config: toolbarConfig5,
    mode: 'simple',
})
//////////////////wageditor富文本////////////////

//sumbit 檢查機制
function formsumbitcheck() {
     var form = document.getElementById('rampsustainform');

    // 檢查 required 屬性
    if (form.checkValidity()) {//全部欄位都有填寫
      // 提交表單
      form.submit();
    } else {
      alert('Please fill in all required fields');
    }
}

//back按鈕 和 next按鈕 切tab
function btnnextback(nowtab,nowli,gotab,goli) {
   var element = document.getElementById(nowtab);
   element.classList.remove("active");
   var element = document.getElementById(nowli);
   element.classList.remove("active");
   var element = document.getElementById(gotab);
   element.classList.add("active");
   var element = document.getElementById(goli);
   element.classList.add("active");
}
