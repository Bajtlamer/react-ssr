import  React from 'react';

function App(props) {
    const frameworks = props.frameworks.map((framework, i) => {
        return <li key={i}>{framework.name} : <a href="{framework.url}">{framework.descriptions}</a></li>
    });

    return (
        <div>
        <h1>Frameworks list</h1>
            <ul>
                {frameworks}
            </ul>
        </div>
    )
}

export default App;