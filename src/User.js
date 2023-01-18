export const User = (props) => {
    return (
      <div>
        {props.name} {props.age}
      </div>
    )
};


export const Planet = (props) => {
    if (props.isGasPlanet) return (
        <div>{props.name}</div>
    )
}

