export const Total = (props) => {
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    const total1 = props.parts.forEach(p => total + p);
    return (
        <>
            <p>Number of exercises {total}</p>
            {/* <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p> */}
        </>
    );
}