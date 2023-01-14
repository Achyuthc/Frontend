import DOMPurify from "dompurify";





const SanitiseHTML = ({myHTML}) =>{
    
    const mySafeHTML=DOMPurify.sanitize(myHTML);
    console.log(myHTML);
    return(
        
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML.replace(/\n/g, "<br />")}} />
    )
    
}

export default SanitiseHTML;