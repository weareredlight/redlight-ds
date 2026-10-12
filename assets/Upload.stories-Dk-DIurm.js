import{U as w}from"./index-4xSQV5PW.js";import"./jsx-runtime-CHn-5JxF.js";import"./iframe-C6Z6JLDr.js";import"./preload-helper-Dp1pzeXC.js";import"./react-icons.esm-EwFTjkwr.js";import"./utils-zpUxZkj0.js";import"./index-Dh6MWD5I.js";import"./colors-k5Y3hgfw.js";import"./index-BF8QffBA.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Data Input/Upload",component:w,parameters:{docs:{description:{component:"The Upload component allows users to upload files. It consists of a file input and a button to trigger the file input."}}},args:{id:"upload-example",placeholder:"Upload file",buttonText:"Browse",disabled:!1,onUpload:x()},argTypes:{size:{control:"radio",options:["normal","large"]},disabled:{control:"boolean"},clearBtn:{control:"boolean"},fullWidth:{control:"boolean"},defaultFile:{control:!1}}},e={args:{clearBtn:!0}},a={args:{size:"large",id:"large-upload-example",description:"Max. 50mb",clearBtn:!1},parameters:{docs:{description:{story:"The large size has no button: the whole area opens the file picker."}}}},o={args:{id:"default-file-upload-example",defaultFile:new File(["Hello"],"report.pdf",{type:"application/pdf"}),clearBtn:!0},parameters:{docs:{description:{story:'Use "defaultFile" to show a file that was uploaded before.'},source:{code:"<Upload id='report' placeholder='Upload file' buttonText='Browse' defaultFile={savedFile} onUpload={uploadFile} />"}}}},r={args:{id:"disabled-upload-example",disabled:!0},parameters:{docs:{description:{story:"A disabled Upload cannot open the file picker."}}}},t={args:{id:"full-width-upload-example",fullWidth:!0},parameters:{docs:{description:{story:"The Upload can occupy the full width of the parent container."}}}},E=["Normal","Large","WithDefaultFile","Disabled","FullWidth"];var l,s,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    clearBtn: true
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,p,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    id: 'large-upload-example',
    description: 'Max. 50mb',
    clearBtn: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The large size has no button: the whole area opens the file picker.'
      }
    }
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'default-file-upload-example',
    defaultFile: new File(['Hello'], 'report.pdf', {
      type: 'application/pdf'
    }),
    clearBtn: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "defaultFile" to show a file that was uploaded before.'
      },
      source: {
        code: "<Upload id='report' placeholder='Upload file' buttonText='Browse' defaultFile={savedFile} onUpload={uploadFile} />"
      }
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,h,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'disabled-upload-example',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled Upload cannot open the file picker.'
      }
    }
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,U,F;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'full-width-upload-example',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The Upload can occupy the full width of the parent container.'
      }
    }
  }
}`,...(F=(U=t.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};export{r as Disabled,t as FullWidth,a as Large,e as Normal,o as WithDefaultFile,E as __namedExportsOrder,k as default};
