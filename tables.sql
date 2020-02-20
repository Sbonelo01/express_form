--new visitor table
CREATE TABLE newVisitor (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    assistant varchar(255),
    age int,
    dateOfVisit date,
    timeOfVisit time,
    comments text
);
