// Presentation Component will not be dependent on a state mgmt lib
export const UserComponent = (props) => {
    return (
        <li onClick={(id) => props.onDelete(props.id)}>{props.name}, {props.location}</li>
    );
}

