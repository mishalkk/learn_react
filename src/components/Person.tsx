interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    // ? used to define 'not required
    country?: Country;
}

export enum Country {
    Brazil = "Brazil",
    India = "India",
    France = "France"
 }

export const Person = (props: Props) => {

    // const name: string = "Morty";
    
    return (
        <div>
            <h1>Name: {[props.name]}</h1>
            <h1>Email: {[props.email]}</h1>
            <h1>Age: {[props.email]}</h1>
            <h1>The person {[props.isMarried ? "is":"is not"]} married.</h1>
            {props.friends.map((friend: string) => (
                <h1>{friend}</h1>
            ))}
            <h1>Country: {props.country}</h1>
        </div>
    );
};  