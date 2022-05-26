

function Section({ title, description, bgColour, colour }) {

    const myStyles = {
        backgroundColor: bgColour,
        color: colour,
        padding: '20px 0'
    }

    return (
        <section className="intro-section" style={myStyles}>
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
}

export default Section;