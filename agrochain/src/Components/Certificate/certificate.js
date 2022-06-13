import React from 'react'
import jsPDF from 'jspdf';
import  './certificate.css';
export const Certificate = () => {
  const downloadPdf=()=>{
   var doc=new jsPDF('l','pt','a4');
   doc.html(document.querySelector("#container"),{
  callback:function(pdf){
    pdf.save('certificate.pdf');
  }
});
  };
return (
<>
<button onClick={downloadPdf} type="button" class="btn btn-success btn-lg" style={{"textAlign":"center"}}>Get Certificate</button>
<div className='pm-certificate-container'id='container' >
    <div className='outer-border'></div>
    <div className='inner-border'></div>
    <div className='pm-certificate-border col-xs-12'>
        <div className='row pm-ceritifcate-header'>
          <div className='pm-certificate-title  col-xs-12 text-center'>
            <h2>Certification of Minting NFT #12345</h2>
          </div>
        </div>
        <div className='row pm-ceritifcate-body'>
          <div className='pm-certificate-block'>
             <div className='col-xs-12'>
                 <div className='row'>
                    <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                      <span className='pm-name-text-bold'>This certificate is to acknowledege that </span>
                      <br/><br/>
                      <h3 >Shubhi Singhal</h3>  <br/>    
                      <span className="block">has purchased "NFT Name" </span><br/>
                      <span className="pm-earned-text block">succcessfully on ethreum value of $0.002</span><br/><br/>
                      <span className="pm-credits-text bold block">The above NFT is purchased via Agrochain , a global market leader for carbon credits</span><br/><br/><br/>
                      <span style={{"textAlign":"center"}}>Dated</span><br/>
                      <span style={{"textAlign":"center"}}>12/June/2022</span>
                    </div>
                 </div> 
             </div>
          </div>
        </div>
    </div>
</div>
</>
)
}

/*export default Certificate*/