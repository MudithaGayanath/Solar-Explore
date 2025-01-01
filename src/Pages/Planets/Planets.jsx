import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Section1 from "./Section1/Section1";
import Footer from "../../Components/Footer/Footer";
import PlanetComponents from "../../Components/Planet Components/PlanetComponents";
import MercuryImage from "./mercury-11591_640.png";
import VenusImage from "./venus.webp";
import EarthImage from "./earth.png";
import MarsImage from "./mars.png";
import JupiterImage from "./Jupiter.png";
import SaturnImage from "./Saturn.png";
import UranusImage from "./Uranus.png";
import NeptuneImage from "./Neptune.png";
import { useInView } from "react-intersection-observer";
function Planets() {
  document.title ="Planets"
  const planets = [
    {
      planet: "Mercury",
      img: MercuryImage,
      para1: (
        <p>
          Mercury is the first planet from the Sun and the smallest in the
          SolarSystem. In English, it is named after the ancient Roman god
          Mercurius(Mercury), god of commerce and communication, and the
          messenger of thegods. Mercury is classified as a terrestrial planet,
          with roughly thesame surface gravity as Mars. The surface of Mercury
          is heavilycratered, as a result of countless impact events that have
          accumulatedover billions of years. Its largest crater, Caloris
          Planitia, has adiameter of 1,550 km (960 mi), which is about one-third
          the diameterof the planet (4,880 km or 3,030 mi). Similarly to the
          Earth's Moon,Mercury's surface displays an expansive rupes system
          generated fromthrust faults and bright ray systems formed by impact
          event remnants.
        </p>
      ),
      para2: (
        <p>
          Mercury's sidereal year (88.0 Earth days) and sidereal day (58.65
          Earth days) are in a 3:2 ratio. This relationship is called spin–orbit
          resonance, and sidereal here means "relative to the stars".
          Consequently, one solar day (sunrise to sunrise) on Mercury lasts for
          around 176 Earth days: twice the planet's sidereal year. This means
          that one side of Mercury will remain in sunlight for one Mercurian
          year of 88 Earth days; while during the next orbit, that side will be
          in darkness all the time until the next sunrise after another 88 Earth
          days. Combined with its high orbital eccentricity, the planet's
          surface has widely varying sunlight intensity and temperature, with
          the equatorial regions ranging from −170 °C (−270 °F) at night to 420
          °C (790 °F) during sunlight. Due to the very small axial tilt, the
          planet's poles are permanently shadowed. This strongly suggests that
          water ice could be present in the craters. Above the planet's surface
          is an extremely tenuous exosphere and a faint magnetic field that is
          strong enough to deflect solar winds. Mercury has no natural
          satellite. As of the early 2020s, many broad details of Mercury's
          geological history are still under investigation or pending data from
          space probes. Like other planets in the Solar System, Mercury was
          formed approximately 4.5 billion years ago. Its mantle is highly
          homogeneous, which suggests that Mercury had a magma ocean early in
          its history, like the Moon. According to current models, Mercury may
          have a solid silicate crust and mantle overlying a solid outer core, a
          deeper liquid core layer, and a solid inner core. There are many
          competing hypotheses about Mercury's origins and development, some of
          which incorporate collision with planetesimals and rock vaporization.
        </p>
      ),
    },
    {
      planet: "Venus",
      img: VenusImage,
      para1: (
        <p>
          Venus is the second planet from the Sun. It is a terrestrial planet
          and is the closest in mass and size to its orbital neighbour Earth.
          Venus has by far the densest atmosphere of the terrestrial planets,
          composed mostly of carbon dioxide with a thick, global sulfuric acid
          cloud cover. At the surface it has a mean temperature of 737 K (464
          °C; 867 °F) and a pressure 92 times that of Earth's at sea level.
          These extreme conditions compress carbon dioxide into a supercritical
          state at Venus's surface. Internally, Venus has a core, mantle, and
          crust. Venus lacks an internal dynamo, and its weakly induced
          magnetosphere is caused by atmospheric interactions with the solar
          wind. Internal heat escapes through active volcanism resulting in
          resurfacing instead of plate tectonics. Venus is one of two planets in
          the Solar System, the other being Mercury, that have no
          moons.Conditions perhaps favourable for life on Venus have been
          identified at its cloud layers. Venus may have had liquid surface
          water early in its history with a habitable environment before a
          runaway greenhouse effect evaporated any water and turned Venus into
          its present state.
        </p>
      ),
      para2: (
        <p>
          The rotation of Venus has been slowed and turned against its orbital
          direction (retrograde) by the currents and drag of its atmosphere. It
          takes 224.7 Earth days for Venus to complete an orbit around the Sun,
          and a Venusian solar year is just under two Venusian days long. The
          orbits of Venus and Earth are the closest between any two Solar System
          planets, approaching each other in synodic periods of 1.6 years. Venus
          and Earth have the lowest difference in gravitational potential of any
          pair of Solar System planets. This allows Venus to be the most
          accessible destination and a useful gravity assist waypoint for
          interplanetary flights from Earth. Venus figures prominently in human
          culture and in the history of astronomy. Orbiting inferiorly (inside
          of Earth's orbit), it always appears close to the Sun in Earth's sky,
          as either a "morning star" or an "evening star". While this is also
          true for Mercury, Venus appears more prominent, since it is the third
          brightest object in Earth's sky after the Moon and the Sun. In 1961,
          Venus became the target of the first interplanetary flight, Venera 1,
          followed by many essential interplanetary firsts, such as the first
          soft landing on another planet by Venera 7 in 1970. These probes
          demonstrated the extreme surface conditions, an insight that has
          informed predictions about global warming on Earth. This finding ended
          the theories and then popular science fiction about Venus being a
          habitable or inhabited planet.
        </p>
      ),
    },
    {
      planet: "Earth",
      img: EarthImage,
      para1: (
        <p>
          Earth is the third planet from the Sun and the only astronomical
          object known to harbor life. This is enabled by Earth being an ocean
          world, the only one in the Solar System sustaining liquid surface
          water. Almost all of Earth's water is contained in its global ocean,
          covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust
          is land, most of which is located in the form of continental
          landmasses within Earth's land hemisphere. Most of Earth's land is at
          least somewhat humid and covered by vegetation, while large sheets of
          ice at Earth's polar deserts retain more water than Earth's
          groundwater, lakes, rivers and atmospheric water combined. Earth's
          crust consists of slowly moving tectonic plates, which interact to
          produce mountain ranges, volcanoes, and earthquakes. Earth has a
          liquid outer core that generates a magnetosphere capable of deflecting
          most of the destructive solar winds and cosmic radiation. Earth has a
          dynamic atmosphere, which sustains Earth's surface conditions and
          protects it from most meteoroids and UV-light at entry. It has a
          composition of primarily nitrogen and oxygen. Water vapor is widely
          present in the atmosphere, forming clouds that cover most of the
          planet.
        </p>
      ),
      para2: (
        <p>
          The water vapor acts as a greenhouse gas and, together with other
          greenhouse gases in the atmosphere, particularly carbon dioxide (CO2),
          creates the conditions for both liquid surface water and water vapor
          to persist via the capturing of energy from the Sun's light. This
          process maintains the current average surface temperature of 14.76 °C
          (58.57 °F), at which water is liquid under normal atmospheric
          pressure. Differences in the amount of captured energy between
          geographic regions (as with the equatorial region receiving more
          sunlight than the polar regions) drive atmospheric and ocean currents,
          producing a global climate system with different climate regions, and
          a range of weather phenomena such as precipitation, allowing
          components such as nitrogen to cycle.Earth is rounded into an
          ellipsoid with a circumference of about 40,000 km. It is the densest
          planet in the Solar System. Of the four rocky planets, it is the
          largest and most massive. Earth is about eight light-minutes away from
          the Sun and orbits it, taking a year (about 365.25 days) to complete
          one revolution. Earth rotates around its own axis in slightly less
          than a day (in about 23 hours and 56 minutes). Earth's axis of
          rotation is tilted with respect to the perpendicular to its orbital
          plane around the Sun, producing seasons. Earth is orbited by one
          permanent natural satellite, the Moon, which orbits Earth at 384,400
          km (1.28 light seconds) and is roughly a quarter as wide as Earth. The
          Moon's gravity helps stabilize Earth's axis, causes tides and
          gradually slows Earth's rotation. Tidal locking has made the Moon
          always face Earth with the same side. Earth, like most other bodies in
          the Solar System, formed 4.5 billion years ago from gas and dust in
          the early Solar System. During the first billion years of Earth's
          history, the ocean formed and then life developed within it. Life
          spread globally and has been altering Earth's atmosphere and surface,
          leading to the Great Oxidation Event two billion years ago. Humans
          emerged 300,000 years ago in Africa and have spread across every
          continent on Earth. Humans depend on Earth's biosphere and natural
          resources for their survival, but have increasingly impacted the
          planet's environment. Humanity's current impact on Earth's climate and
          biosphere is unsustainable, threatening the livelihood of humans and
          many other forms of life, and causing widespread extinctions.
        </p>
      ),
    },
    {
      planet: "Mars",
      img: MarsImage,
      para1: (
        <p>
          Mars is the fourth planet from the Sun. The surface of Mars is
          orange-red because it is covered in iron(III) oxide dust, giving it
          the nickname "the Red Planet".Mars is among the brightest objects in
          Earth's sky, and its high-contrast albedo features have made it a
          common subject for telescope viewing. It is classified as a
          terrestrial planet and is the second smallest of the Solar System's
          planets with a diameter of 6,779 km (4,212 mi). In terms of orbital
          motion, a Martian solar day (sol) is equal to 24.6 hours, and a
          Martian solar year is equal to 1.88 Earth years (687 Earth days). Mars
          has two natural satellites that are small and irregular in shape:
          Phobos and Deimos. The relatively flat plains in northern parts of
          Mars strongly contrast with the cratered terrain in southern highlands
          – this terrain observation is known as the Martian dichotomy. Mars
          hosts many enormous extinct volcanoes (the tallest is Olympus Mons,
          21.9 km or 13.6 mi tall) and one of the largest canyons in the Solar
          System (Valles Marineris, 4,000 km or 2,500 mi long). Geologically,
          the planet is fairly active with marsquakes trembling underneath the
          ground, dust devils sweeping across the landscape, and cirrus clouds.
          Carbon dioxide is substantially present in Mars's polar ice caps and
          thin atmosphere. During a year, there are large surface temperature
          swings on the surface between −78.5 °C (−109.3 °F) to 5.7 °C (42.3
          °F)[c] similar to Earth's seasons, as both planets have significant
          axial tilt.
        </p>
      ),
      para2: (
        <p>
          Mars was formed approximately 4.5 billion years ago. During the
          Noachian period (4.5 to 3.5 billion years ago), Mars's surface was
          marked by meteor impacts, valley formation, erosion, and the possible
          presence of water oceans. The Hesperian period (3.5 to 3.3–2.9 billion
          years ago) was dominated by widespread volcanic activity and flooding
          that carved immense outflow channels. The Amazonian period, which
          continues to the present, has been marked by the wind as a dominant
          influence on geological processes. Due to Mars's geological history,
          the possibility of past or present life on Mars remains of great
          scientific interest. Since the late 20th century, Mars has been
          explored by uncrewed spacecraft and rovers, with the first flyby by
          the Mariner 4 probe in 1965, the first orbit by the Mars 2 probe in
          1971, and the first landing by the Viking 1 probe in 1976. As of 2023,
          there are at least 11 active probes orbiting Mars or on the Martian
          surface. Mars is an attractive target for future human exploration
          missions, though in the 2020s no such mission is planned.
        </p>
      ),
    },
    {
      planet: "Jupiter",
      img: JupiterImage,
      para2: (
        <p>
          Jupiter is the fifth planet from the Sun and the largest in the Solar
          System. It is a gas giant with a mass more than 2.5 times that of all
          the other planets in the Solar System combined and slightly less than
          one-thousandth the mass of the Sun. Its diameter is eleven times that
          of Earth, and a tenth that of the Sun. Jupiter orbits the Sun at a
          distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years.
          It is the third-brightest natural object in the Earth's night sky,
          after the Moon and Venus, and has been observed since prehistoric
          times. Its name derives from that of Jupiter, the chief deity of
          ancient Roman religion.Jupiter was the first of the Sun's planets to
          form, and its inward migration during the primordial phase of the
          Solar System affected much of the formation history of the other
          planets. Jupiter's atmosphere consists of 76% hydrogen and 24% helium
          by mass, with a denser interior. It contains trace elements and
          compounds like carbon, oxygen, sulfur, neon, ammonia, water vapour,
          phosphine, hydrogen sulfide, and hydrocarbons. Jupiter's helium
          abundance is 80% of the Sun's, similar to Saturn's composition. The
          ongoing contraction of Jupiter's interior generates more heat than the
          planet receives from the Sun. Its internal structure is believed to
          consist of an outer mantle of fluid metallic hydrogen and a diffuse
          inner core of denser material. Because of its rapid rate of rotation,
          one turn in ten hours, Jupiter is an oblate spheroid; it has a slight
          but noticeable bulge around the equator.
        </p>
      ),
      para1: (
        <p>
          Jupiter's magnetic field is the strongest and second-largest
          contiguous structure in the Solar System, generated by eddy currents
          within the fluid, metallic hydrogen core. The solar wind interacts
          with the magnetosphere, extending it outward and affecting Jupiter's
          orbit. Jupiter is surrounded by a faint system of planetary rings that
          were discovered in 1979 by Voyager 1 and further investigated by the
          Galileo orbiter in the 1990s. The Jovian ring system consists mainly
          of dust and has three main segments: an inner torus of particles known
          as the halo, a relatively bright main ring, and an outer gossamer
          ring. The rings have a reddish colour in visible and near-infrared
          light. The age of the ring system is unknown, possibly dating back to
          Jupiter's formation. At least 95 moons orbit the planet; the four
          largest moons—Io, Europa, Ganymede, and Callisto—orbit within the
          magnetosphere, and were discovered by Galileo Galilei in 1610.
          Ganymede, the largest of the four, is larger than the planet Mercury.
          Since 1973, Jupiter has been visited by nine robotic probes: seven
          flybys and two dedicated orbiters, with two more en route.
        </p>
      ),
    },
    {
      planet: "Saturn",
      img: SaturnImage,
      para1: (
        <p>
          Saturn is the sixth planet from the Sun and the second largest in the
          Solar System, after Jupiter. It is a gas giant, with an average radius
          of about nine times that of Earth.It has an eighth the average density
          of Earth, but is over 95 times more massive.Even though Saturn is
          almost as big as Jupiter, Saturn has less than a third its mass.
          Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km),
          with an orbital period of 29.45 years.
        </p>
      ),
      para2: (
        <p>
          Saturn's interior is thought to be composed of a rocky core,
          surrounded by a deep layer of metallic hydrogen, an intermediate layer
          of liquid hydrogen and liquid helium, and an outer layer of gas.
          Saturn has a pale yellow hue, due to ammonia crystals in its upper
          atmosphere. An electrical current in the metallic hydrogen layer is
          thought to give rise to Saturn's planetary magnetic field, which is
          weaker than Earth's, but has a magnetic moment 580 times that of Earth
          because of Saturn's greater size. Saturn's magnetic field strength is
          about a twentieth that of Jupiter. The outer atmosphere is generally
          bland and lacking in contrast, although long-lived features can
          appear. Wind speeds on Saturn can reach 1,800 kilometres per hour
          (1,100 miles per hour). The planet has a bright and extensive system
          of rings, composed mainly of ice particles, with a smaller amount of
          rocky debris and dust. At least 146 moons orbit the planet, of which
          63 are officially named; these do not include the hundreds of moonlets
          in the rings. Titan, Saturn's largest moon and the second largest in
          the Solar System, is larger (and less massive) than the planet Mercury
          and is the only moon in the Solar System that has a substantial
          atmosphere.
        </p>
      ),
    },
    {
      planet: "Uranus",
      img: UranusImage,
      para1: (
        <p>
          Uranus is the seventh planet from the Sun. It is a gaseous
          cyan-coloured ice giant. Most of the planet is made of water, ammonia,
          and methane in a supercritical phase of matter, which astronomy calls
          "ice" or volatiles. The planet's atmosphere has a complex layered
          cloud structure and has the lowest minimum temperature (49 K (−224 °C;
          −371 °F)) of all the Solar System's planets. It has a marked axial
          tilt of 82.23° with a retrograde rotation period of 17 hours and 14
          minutes. This means that in an 84-Earth-year orbital period around the
          Sun, its poles get around 42 years of continuous sunlight, followed by
          42 years of continuous darkness. Uranus has the third-largest diameter
          and fourth-largest mass among the Solar System's planets. Based on
          current models, inside its volatile mantle layer is a rocky core, and
          surrounding it is a thick hydrogen and helium atmosphere. Trace
          amounts of hydrocarbons (thought to be produced via hydrolysis) and
          carbon monoxide along with carbon dioxide (thought to have been
          originated from comets) have been detected in the upper atmosphere.
          There are many unexplained climate phenomena in Uranus's atmosphere,
          such as its peak wind speed of 900 km/h (560 mph),variations in its
          polar cap, and its erratic cloud formation. The planet also has very
          low internal heat compared to other giant planets, the cause of which
          remains unclear.
        </p>
      ),
      para2: (
        <p>
          Like the other giant planets, Uranus has a ring system, a
          magnetosphere, and many natural satellites. The extremely dark ring
          system reflects only about 2% of the incoming light. Uranus's 28
          natural satellites include 18 known regular moons, of which 13 are
          small inner moons. Further out are the larger five major moons of the
          planet: Miranda, Ariel, Umbriel, Titania, and Oberon. Orbiting at a
          much greater distance from Uranus are the ten known irregular moons.
          The planet's magnetosphere is highly asymmetric and has many charged
          particles, which may be the cause of the darkening of its rings and
          moons. Uranus is visible to the naked eye, but it is very dim and was
          not classified as a planet until 1781, when it was first observed by
          William Herschel. About seven decades after its discovery, consensus
          was reached that the planet be named after the Greek god Uranus
          (Ouranos), one of the Greek primordial deities. As of 2024, it had
          been visited up close only once when in 1986 the Voyager 2 probe flew
          by the planet.Though nowadays it can be resolved and observed by
          telescopes, there is much desire to revisit the planet, as shown by
          Planetary Science Decadal Survey's decision to make the proposed
          Uranus Orbiter and Probe mission a top priority in the 2023–2032
          survey, and the CNSA's proposal to fly by the planet with a subprobe
          of Tianwen-4.
        </p>
      ),
    },
    {
      planet: "Neptune",
      img: NeptuneImage,
      para1: (
        <p>
          Neptune is the eighth and farthest known planet from the Sun. It is
          the fourth-largest planet in the Solar System by diameter, the
          third-most-massive planet, and the densest giant planet. It is 17
          times the mass of Earth. Compared to its fellow ice giant Uranus,
          Neptune is slightly more massive, but denser and smaller. Being
          composed primarily of gases and liquids, it has no well-defined solid
          surface, and orbits the Sun once every 164.8 years at an orbital
          distance of 30.1 astronomical units (4.5 billion kilometres; 2.8
          billion miles). It is named after the Roman god of the sea and has the
          astronomical symbol ♆, representing Neptune's trident. Neptune is not
          visible to the unaided eye and is the only planet in the Solar System
          that was not initially observed by direct empirical observation.
          Rather, unexpected changes in the orbit of Uranus led Alexis Bouvard
          to hypothesise that its orbit was subject to gravitational
          perturbation by an unknown planet. After Bouvard's death, the position
          of Neptune was mathematically predicted from his observations,
          independently, by John Couch Adams and Urbain Le Verrier. Neptune was
          subsequently directly observed with a telescope on 23 September 1846
          by Johann Gottfried Galle within a degree of the position predicted by
          Le Verrier. Its largest moon, Triton, was discovered shortly
          thereafter, though none of the planet's remaining moons were located
          telescopically until the 20th century.
        </p>
      ),
      para2: (
        <p>
          The planet's distance from Earth gives it a small apparent size, and
          its distance from the Sun renders it very dim, making it challenging
          to study with Earth-based telescopes. Only the advent of the Hubble
          Space Telescope and of large ground-based telescopes with adaptive
          optics allowed for detailed observations. Neptune was visited by
          Voyager 2, which flew by the planet on 25 August 1989; Voyager 2
          remains the only spacecraft to have visited it. Like the gas giants
          (Jupiter and Saturn), Neptune's atmosphere is composed primarily of
          hydrogen and helium, along with traces of hydrocarbons and possibly
          nitrogen, but contains a higher proportion of ices such as water,
          ammonia and methane. Similar to Uranus, its interior is primarily
          composed of ices and rock; both planets are normally considered "ice
          giants" to distinguish them. Along with Rayleigh scattering, traces of
          methane in the outermost regions make Neptune appear faintly blue. In
          contrast to the strongly seasonal atmosphere of Uranus, which can be
          featureless for long periods of time, Neptune's atmosphere has active
          and consistently visible weather patterns. At the time of the Voyager
          2 flyby in 1989, the planet's southern hemisphere had a Great Dark
          Spot comparable to the Great Red Spot on Jupiter. In 2018, a newer
          main dark spot and smaller dark spot were identified and studied.
          These weather patterns are driven by the strongest sustained winds of
          any planet in the Solar System, as high as 2,100 km/h (580 m/s; 1,300
          mph). Because of its great distance from the Sun, Neptune's outer
          atmosphere is one of the coldest places in the Solar System, with
          temperatures at its cloud tops approaching 55 K (−218 °C; −361 °F).
          Temperatures at the planet's centre are approximately 5,400 K (5,100
          °C; 9,300 °F). Neptune has a faint and fragmented ring system
          (labelled "arcs"), discovered in 1984 and confirmed by Voyager 2.
        </p>
      ),
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div className="text-white" >
      <Section1 />
      <div ref={ref} className="flex flex-col gap-1" >
        {planets.map((p, index) => (
          <div key={index} className="mb-10 md:mb-0" >
            <PlanetComponents
              id={p.planet}
              image={p.img}
              para1={p.para1 || <p>No description available.</p>}
              para2={p.para2}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Planets;
