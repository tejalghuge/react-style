import './greting.css'
 
 const MorningCSS={
    backgroundColor:"pink",
    color:"black",
    margin:"10px 0px",
 }


function greting(props){
     return(
        <div className='first-container'>
            Hello {props.name}
        </div>
     )
}
export default greting


function GoodMoring(props){
    return(
        <div style={MorningCSS}>
            Good Moring {props.name}
        </div>
    )
}
function GoodEvening(props){
    return(
        <div style={{
            backgroundColor:"black",
            color:"white",
        }}>
            Good Evening {props.name}
        </div>
    )
}
export {GoodEvening,GoodMoring}