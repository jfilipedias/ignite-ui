var p=Object.defineProperty;var t=(o,n)=>p(o,"name",{value:n,configurable:!0});import{d as a,a as i,e as d}from"./index-1d2d616b.js";import{a as l,F as c,j as e}from"./jsx-runtime-1becbe17.js";import{l as m}from"./iframe-d814124f.js";import"./es.object.get-own-property-descriptor-037fa860.js";import"./index-43ec82a8.js";import"./index-648f2948.js";import"./web.url.constructor-5026fdf2.js";import"./es.number.is-integer-0592d222.js";const u=new Intl.DateTimeFormat("en-US",{dateStyle:"full",timeStyle:"short"}).format(new Date),D={parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api'
import type { Meta } from '@storybook/react'

import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from '@ignite-ui-filipe/react'

const formattedDate = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format(new Date())

export default {
  title: 'Surfaces/Toast ',
  component: Toast,
  args: {
    open: false,
    title: 'Scheduled: Catch up',
    description: formattedDate,
  },
  decorators: [],
} as Meta<ToastProps>

export const Primary = ({ onOpenChange, ...args }: ToastProps) => {
  const [{ open }, updateArgs] = useArgs()

  const handleOpenChange = () => updateArgs({ open: !open })

  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>
        Add to calendar
      </Button>
      <ToastProvider>
        <Toast onOpenChange={handleOpenChange} {...args} />
      </ToastProvider>
    </>
  )
}
`,locationsMap:{primary:{startLoc:{col:23,line:27},endLoc:{col:1,line:42},startBody:{col:23,line:27},endBody:{col:1,line:42}}}}},title:"Surfaces/Toast ",component:a,args:{open:!1,title:"Scheduled: Catch up",description:u},decorators:[]},x=t(({onOpenChange:o,...n})=>{const[{open:s},r]=m();return l(c,{children:[e(i,{onClick:()=>r({open:!0}),children:"Add to calendar"}),e(d,{children:e(a,{onOpenChange:t(()=>r({open:!s}),"handleOpenChange"),...n})})]})},"Primary"),B=["Primary"];export{x as Primary,B as __namedExportsOrder,D as default};
//# sourceMappingURL=Toast.stories-20c597f3.js.map
