export default function Country({ country, toglecoutry }) {
    const data = country; // Since `country` is already passed correctly
    console.log(data);

    function togleclick() {
        toglecoutry(country);
    }

    return (
        <div className="country">
            <img className="flag" src={data.flags.png} alt="" />
            <img className="coatOfArms" src={data.coatOfArms.png} />
            <h4> name: {data.name.common}</h4>
            <h4> short: {data.cca3}</h4>
            <p>area: {data.area}</p>
            <button onClick={togleclick}>favorit</button>
        </div>
    );
}
