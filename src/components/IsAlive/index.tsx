import './styles.css'

interface IsAliveProps {
  status: string;
  species: string;
  gender: string;
}

export function IsAlive(props: IsAliveProps){

  function VerifyStatus(){
    if(props.status === "Alive"){
      return <div><div className="circle"></div>{props.status} - {props.species} - {props.gender}</div>
    }else if(props.status === "Dead"){
      return <div><div className="circle-red"></div>{props.status} - {props.species} - {props.gender}</div>
    }else{
      return <div><div className="circle-unk"></div>{props.status} - {props.species} - {props.gender}</div>
    }
  }

  return(
    <VerifyStatus />
  )
}