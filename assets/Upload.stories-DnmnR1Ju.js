import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Upload--sSSveD1.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Data Input/Upload`,component:n,parameters:{docs:{description:{component:`The Upload component allows users to upload files. It consists of a file input and a button to trigger the file input.`}}},args:{id:`upload-example`,placeholder:`Upload file`,buttonText:`Browse`,disabled:!1,onUpload:r()},argTypes:{size:{control:`radio`,options:[`normal`,`large`]},disabled:{control:`boolean`},fullWidth:{control:`boolean`},defaultFile:{control:!1}}},a={},o={args:{size:`large`,id:`large-upload-example`,description:`Max. 50mb`},parameters:{docs:{description:{story:`The large size has no button: the whole area opens the file picker.`}}}},s={args:{id:`default-file-upload-example`,defaultFile:new File([`Hello`],`report.pdf`,{type:`application/pdf`})},parameters:{docs:{description:{story:`Use "defaultFile" to show a file that was uploaded before.`},source:{code:`<Upload id='report' placeholder='Upload file' buttonText='Browse' defaultFile={savedFile} onUpload={uploadFile} />`}}}},c={args:{id:`disabled-upload-example`,disabled:!0},parameters:{docs:{description:{story:`A disabled Upload cannot open the file picker.`}}}},l={args:{id:`full-width-upload-example`,fullWidth:!0},parameters:{docs:{description:{story:`The Upload can occupy the full width of the parent container.`}}}},u=[`Normal`,`Large`,`WithDefaultFile`,`Disabled`,`FullWidth`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    id: 'large-upload-example',
    description: 'Max. 50mb'
  },
  parameters: {
    docs: {
      description: {
        story: 'The large size has no button: the whole area opens the file picker.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-file-upload-example',
    defaultFile: new File(['Hello'], 'report.pdf', {
      type: 'application/pdf'
    })
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Disabled,l as FullWidth,o as Large,a as Normal,s as WithDefaultFile,u as __namedExportsOrder,i as default};