import { NavLink } from "react-router-dom"
import LayOut from "./layOut"
import styled from "styled-components"

const Wrapper=styled.div`
width:100%
display: flex;
  align-items: center;
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 30px;
  .Card{
  width:400px;

  border-radius: 10px 10px 0 0; /* 添加顶部圆角 */
     overflow: hidden; /* 确保圆角效果不被子元素破坏 */
  & img {
      width: 100%; 
      height: auto; 
      display: block; /* 消除图片底部间隙 */
      object-fit: cover; /* 保持图片比例填充容器 */
      max-height: 200px; 
    }
  & > div { /* 为文本容器添加圆角 */
      border-radius: 0 0 10px 10px;
      overflow: hidden;
      padding: 10px;
      background-color: #f5f5f5; /* 添加浅灰色背景 */
    }
  & p {
  white-space: normal; /* 确保内容可以换行 */
  word-wrap: break-word; /* 如果是英文或长单词可强制换行 */
}
  }
`;

const IntroductionDiv=styled.div`
  & h1{
  margin-left:10px;
  }
  .Introductioncontent{
   display: flex;
   align-items: center;
  }
  & p{
  width:35%;
  padding:10px 60px;
  }
  & img{
  width:40%}
  & hr{
    width:92%
  }
`
const Introduction =()=>{
 const userNamen="某同学"
  return (
    <IntroductionDiv>
    <h1>欢迎使用{userNamen}AI数据使用平台</h1>
      <div className="Introductioncontent">
        <p>在当今 AI 蓬勃发展的时代，各类 AI 工具如繁星般涌现，让人应接不暇。但你是否渴望拥有一个便捷的中枢，将众多优质 AI 插件汇聚一堂，让你的创意与工作能高效施展？[平台名称]—— 专业的 AI 插件管理平台，正是为解决这一痛点而来，为你开启 AI 应用的便捷大门。一、丰富插件，多元覆盖​
[平台名称] 汇聚了海量不同类型的 AI 插件，涵盖了自然语言处理、图像识别、数据分析、智能设计等多个热门领域。无论你是文案撰写者，需要借助自然语言处理插件快速生成创意文案、润色文章；还是设计师，想要通过图像识别与智能设计插件实现灵感激发、素材智能生成与筛选；亦或是数据分析师，利用数据分析插件对复杂数据进行高效洞察，在这里，都能找到契合需求的得力工具。例如，平台上的 [某自然语言处理插件名称]，能精准理解你的语言意图，无论是撰写商业报告、创作故事脚本，都能迅速给出高质量文本建议，极大提升创作效率；[某图像识别插件名称] 则可快速识别图片内容，用于图像分类管理、智能搜索等场景，为图像处理工作带来极大便利。​
二、便捷管理，一键掌控​
在插件管理方面，[平台名称] 提供了极为便捷的操作体验。通过简洁直观的界面，你可以轻松完成插件的搜索、安装、启用与停用。无需在繁琐的网页中四处寻找插件下载链接，也不必担心插件之间的冲突问题。平台会智能检测插件兼容性，确保各个插件在你的工作环境中和谐共处。当你需要使用某个插件时，只需一键点击，即可快速启用；若暂时不用，也能轻松停用，让你的工作界面始终保持简洁有序，专注于核心工作。</p>
        <img src='./content-log.jpeg' />
      </div>
      <hr></hr>
    </IntroductionDiv>

  )
}
const  EfficiencyPlugins=()=>{
  const data = [
    {
      listname: '某个数据1',
      imgsrc: './bg1.jpeg',
      listcontent: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
       NavLink:"7"
    },
    {
      listname: '某个数据2',
      imgsrc: './bg1.jpeg',
      listcontent: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
       NavLink:"4"
    },
    {
      listname: '某个数据3',
      imgsrc: './bg1.jpeg',
      listcontent: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      NavLink:"1"
    },
    {
      listname: '某个数据4',
      imgsrc: './bg1.jpeg',
      listcontent: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
       NavLink:"2"
    },
  ];

  return(
    <>
    <Wrapper2>
      {data.map((i, index) => (
        <div key={index}>
          <div className='Card'>
            <img src={i.imgsrc} alt={i.listname} />
            <div>
              <span>{i.listname}功能</span>
              <p>{i.listcontent}</p>
            </div>
          </div>
        </div>
      ))}
    </Wrapper2>
    </>
  )
}
const PageDetail = () => {

  return(
  <LayOut>
   <Wrapper>
   <Introduction />
   </Wrapper>
      <EfficiencyPlugins />
  </LayOut>
  )
}
export default PageDetail