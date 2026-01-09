const Part = ({ part, exercises }) => {
    return (
        <p>
            {part} {exercises}
        </p>
    );
}

export const Content = (props) => {
    console.log({ props })
    return (
        <>
            <Part
                part={props.parts[0].name}
                exercises={props.parts[0].exercises} />
            <Part
                part={props.parts[1].name}
                exercises={props.parts[1].exercises} />
            <Part
                part={props.parts[1].name}
                exercises={props.parts[1].exercises} />
            {/* <Part
                part={props.part2.name}
                exercises={props.part2.exercises} />
            <Part
                part={props.part3.name}
                exercises={props.part3.exercises} /> */}
        </>
    );
}