import * as React from "react";

interface Info {
    title: string;
    content: string;
}

export const ListInfo: React.FC<Info> = (info: Info) => {
    return (
        <div className="list-Info">
            <h1 className="list-Title">{info.title}</h1>
            <input type="text" className="list-Content"></input>
        </div>
    );
}
