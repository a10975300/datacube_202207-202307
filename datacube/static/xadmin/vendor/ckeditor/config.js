/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'align', 'blocks', 'bidi', 'paragraph' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Subscript,Superscript,Scayt,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,CopyFormatting,RemoveFormat,Language,BidiRtl,BidiLtr,Blockquote,CreateDiv,About,Templates,Save,NewPage,ExportPdf,Preview,Print,Source,ShowBlocks,Unlink,Anchor,HorizontalRule,PageBreak,Iframe,SpecialChar,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Styles,Font';
};
