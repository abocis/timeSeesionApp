
interface identity{
    name: string;
    age: number;
    isMarried: boolean;
    Child: number;
}

const Person = (person :identity) =>{

    return (
        <div>
            <p>Name: {person.name}</p>
            <p> Age: {person.age}</p>
            <p>This person is {person.isMarried ? "is married" : "is single"}</p>
            <p>This person has {person.Child === 0 ? "he has no chilld" : "he has " + person.Child + " children "}</p>
        </div>
    );
};
export default Person;