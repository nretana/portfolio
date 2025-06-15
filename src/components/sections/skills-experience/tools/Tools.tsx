import reactIcon from '@assets/imgs/tool-box/react_box.svg'
import reduxIcon from '@assets/imgs/tool-box/redux_box.svg'
import javascriptIcon from '@assets/imgs/tool-box/javascript_box.svg'
import typescriptIcon from '@assets/imgs/tool-box/typescript_box.svg'
import csharpIcon from '@assets/imgs/tool-box/csharp_box.svg'
import html5Icon from '@assets/imgs/tool-box/html5_box.svg'
import css3Icon from '@assets/imgs/tool-box/css3_box.svg'
import sassIcon from '@assets/imgs/tool-box/sass_box.svg'
import bootstrapIcon from '@assets/imgs/tool-box/bootstrap_box.svg'
import tailwindCssIcon from '@assets/imgs/tool-box/tailwindcss_box.svg'
import viteIcon from '@assets/imgs/tool-box/vite_box.svg'
import webpackIcon from '@assets/imgs/tool-box/webpack_box.svg'
import githubIcon from '@assets/imgs/tool-box/github_box.svg'
import azureIcon from '@assets/imgs/tool-box/azure_box.svg'
import { ToolBoxList } from './ToolBoxList'

import classes from './Tools.module.css'
import { ToolBox } from '@/@types/toolbox'


const toolItems = [
                  { label: 'HTML5', imgUrl: html5Icon },
                  { label: 'CSS3', imgUrl: css3Icon },
                  { label: 'React JS', imgUrl: reactIcon },
                  { label: 'Redux', imgUrl: reduxIcon },
                  { label: 'JavaScript', imgUrl: javascriptIcon },
                  { label: 'Typescript', imgUrl: typescriptIcon },
                  { label: 'C Sharp', imgUrl: csharpIcon },
                  { label: 'Sass', imgUrl: sassIcon },
                  { label: 'Bootstrap', imgUrl: bootstrapIcon },
                  { label: 'Tailwind CSS', imgUrl: tailwindCssIcon },
                  { label: 'Vite', imgUrl: viteIcon },
                  { label: 'Webpack', imgUrl: webpackIcon },
                  { label: 'Github', imgUrl: githubIcon },
                  { label: 'Azure', imgUrl: azureIcon } ] as ToolBox[];

export const Tools = () => {

  return (
    <div className={classes['grid-tools']}>
      <ToolBoxList items={toolItems} />
    </div>
  );
};
