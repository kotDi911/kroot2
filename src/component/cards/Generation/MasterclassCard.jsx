import BaseOptionsCard from "./BaseOptionsCard";

const MasterclassCard = ({props}) => {
  return(
      <div className="masterclass__card flex base">
          <h1 className="h1 symbol">{props.symbol}</h1>
          <BaseOptionsCard props={props}/>
      </div>
  )
}
export default MasterclassCard