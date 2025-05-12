import LayOut from "./layOut";
import { useLocation } from 'react-router-dom';


const AbilityContent=()=>{
  const location = useLocation();
  const state = location.state;
    return(
        <LayOut>
          <div>this is ability</div>

          <div style={{ display: 'flex', width: '100%' ,height: '100%',gap: '20px',padding: '20px' }}>
            <iframe
              src={state?.link[0]}
              title="PDF 文档"
              width="50%"
              height="100%"
              style={{ border: '1px solid #ccc' }}
            ></iframe>
            <iframe
              src="https://bytedance.larkoffice.com/docx/BdtWdys3ZoLMRcx5w5Tc66CWn9e"
              title="PDF 文档"
              width="50%"
              height="100%"
              style={{ border: '1px solid #ccc' }}
            ></iframe>
          </div>
        </LayOut>
        
    )
}
export default AbilityContent