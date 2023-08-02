import './Card.css';
function Card(props){
    const classes = 'card ' /*here void space is important after class name card*/+ props.className;
    return <div className={classes}>{props.children}</div>
    //childern is reserved keyword if we use that it will act as wrrapper and it will wrap all the contant betn the the componant
}
export default Card;
