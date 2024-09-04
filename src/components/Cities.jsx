import islamabad from './assets/islamabad.png'
import karachi from './assets/karachi.png'
import lahore from './assets/lahore.png'
import faisalabad from './assets/faisalabad.png'
import rawalpindi from './assets/rawalpindi.png'
import abbottabad from './assets/Abottabad.png'
import bahawalpur from './assets/bahawalpur.png'
import deraghazikhan from './assets/DeraGhaziKhan.png'
import gujranwala from './assets/gujranwala.png'
import gujrat from './assets/Gujrat.jpg.png'
import hyderabad from './assets/Hyderabad.png'
import jhelum from './assets/Jhelum.png'
import kamoke from './assets/kamoke.png'
import larkana from './assets/larkana.png'
import mangla from './assets/mangla.png'
import mardan from './assets/mardan.png'
import multan from './assets/multan.png'
import murree from './assets/Murree.png'
import okara from './assets/okara.png'
import panoaqil from './assets/PanoAqil.png'
import peshawar from './assets/Peshawar.png'
import quetta from './assets/quetta.png'
import rahimyarkhan from './assets/RahimYarKhan.png'
import sadiqabad from './assets/sadiqabad.png'
import sahiwal from './assets/sahiwal.png'
import sarghoda from './assets/sargodha.png'
import sheikhupura from './assets/Sheikhupura.png'
import sialkot from './assets/Sialkot.png'
import sukkur from './assets/sukkur.png'
import wahcant from './assets/WahhCannt.png'

const Cities = () => {

    const cities = {
        "islamabad": {
            name: "Islamabad",
            img: islamabad,
        },
        "karachi": {
            name: "Karachi",
            img: karachi,
        },
        "lahore": {
            name: "Lahore",
            img: lahore,
        },
        "faisalabad": {
            name: "Faisalabad",
            img: faisalabad,
        },
        "rawalpindi": {
            name: "Rawalpindi",
            img: rawalpindi,
        },
        "abbottabad": {
            name: "Abbottabad",
            img: abbottabad,
        },
        "bahawalpur": {
            name: "Bahawalpur",
            img: bahawalpur,
        },
        "dera-ghazi-khan": {
            name: "Dera Ghazi Khan",
            img: deraghazikhan,
        },
        "gujranwala": {
            name: "Gujranwala",
            img: gujranwala,
        },
        "gujrat": {
            name: "Gujrat",
            img: gujrat,
        },
        "hyderabad": {
            name: "Hyderabad",
            img: hyderabad,
        },
        "jhelum": {
            name: "Jhelum",
            img: jhelum,
        },
        "kamoke": {
            name: "Kamoke",
            img: kamoke,
        },
        "larkana": {
            name: "Larkana",
            img: larkana,
        },
        "mangla": {
            name: "Malnga",
            img: mangla,
        },
        "mardan": {
            name: "Mardan",
            img: mardan,
        },
        "multan": {
            name: "Multan",
            img: multan,
        },
        "murree": {
            name: "Murree",
            img: murree,
        },
        "okara": {
            name: "Okara",
            img: okara,
        },
        "pano-aqil": {
            name: "Pano Aqil",
            img: panoaqil,
        },
        "peshawar": {
            name: "Peshawar",
            img: peshawar,
        },
        "quetta": {
            name: "Quetta",
            img: quetta,
        },
        "rahim-yar-khan": {
            name: "Rahim Yar Khan",
            img: rahimyarkhan,
        },
        "sadiqabad": {
            name: "Sadiqabad",
            img: sadiqabad,
        },
        "sahiwal": {
            name: "Sahiwal",
            img: sahiwal,
        },
        "sarghoda": {
            name: "Sarghoda",
            img: sarghoda,
        },
        "sheikhupura": {
            name: "Sheikhupura",
            img: sheikhupura,
        },
        "sialkot": {
            name: "Sialkot",
            img: sialkot,
        },
        "sukkur": {
            name: "Sukkur",
            img: sukkur,
        },
        "wah-cant": {
            name: "Wah Cantt",
            img: wahcant,
        },
    }


    return (
        <div>
            <h1 className="cities-heading">Find us in these cities and many more!</h1>
            <div className="cities">
                <div className="cities-grid">
                    {Object.entries(cities).map(([ID, { name, img }]) => (
                        <div className="city" key={ID}>
                            <img className='city-img' src={img} alt={name} />
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cities