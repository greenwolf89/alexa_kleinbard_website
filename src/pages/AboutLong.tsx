import {useState} from 'react'
import {imageUrl} from '../config/images'
import styles from './About.module.css'

const PARAS_PER_PAGE = 2

const PARAGRAPHS = [
    <>I spent my childhood on four and a half acres of beautiful rolling land in Abington, Pennsylvania. My brother David kept care of beehives to pollinate all our flowers. We had a huge vegetable garden, plus apple and cherry trees, blueberry bushes, rhododendrons, mountain laurel, and many other native flowers, and hardwood trees. I first learned the names of plants following my father, Joseph, around our gardens. His hobby and great love was planting flowers. When not trailing after him I was climbing the neighbors' enormous Beech tree or exploring the woods around us.</>,
    <>Birdseye view drawing became a favorite past time early on, especially when I could be found viewing down from the Beech tree or sitting up high on my window ledge looking out through the dogwood trees across our fields to gorgeous flower gardens. Our fields would get covered by bird migrations in Spring, Summer, and Fall. Winter came as quiet sparkling white snow, and let my young eyes see deer, fox, chipmunk, and bird tracks that fascinated me, and inspired my early stitched and painted cloth books filled with flowers, tracks, and flying bird imagery.</>,
    <>My brother Jonathan was passionate about animals, and kept his raven in the room next to me. He also had a pigeon coup and brought home a monkey and other animals over the years. Our place was jumping with life all around, my brother Peter's rabbits and cats and my sister Polly's puppies were in the mix as well. Later I used Ravens, Crows, and Owls to symbolize messengers in my paintings. I always felt nature rescued me when I needed it, so I let nature just lure me into the woods to fill mind, vision, and soul with the wonderful mysteries of outdoor life.</>,
    <>My mother was an amazing painter and puppet maker who had been a star pupil of Albert Barnes, having started to paint while still in her teens. She gave life to five children, then passed away when I was four. I learned about her through her paintings and paper maché puppets. Early on I started making things to help create other visual worlds, by depicting stories on paper and cloth until it became a natural way to express myself. Growing up with four brilliant siblings, all wordsmiths, I found myself somewhat in contrast to them, being drawn toward a more visual way of expressing myself than the writing arts offered.</>,
    <>I traveled across the country starting in my teens, by thumb, truck, car, or later, motorcycle, camping and hiking, sleeping in homemade teepees, tents, hammocks, caves, or just out in the open. In high school my friends and I would camp down on the Jersey shore, in the dunes area, wearing wet suits so as to swim any time of the year. As much as possible I preferred to be out in Mother Nature exploring, her inspiration my muse.</>,
    <>In high school I was lucky to be in a program that took me to France where I was placed with artistic families who took me mountain climbing in the Alps and to museums in Paris. Later in 1972, I was able to buy a $100 train pass to travel through Spain, seeing extraordinary fields of sunflowers for miles and museums filled with amazing art; Hieronymus Bosch at the Prado became my favorite. The last link in that trip was by boat over, and into, the amazing light of Greek Islands. I stayed for weeks watching the fishermen repair their nets before getting back out in their colorful boats, while I camped/lived in caves at night and drew everyday.</>,
    <>I began my art career exhibiting in 1974 by entering juried shows right after college. My first break came when Marcia Tucker, then head curator at the Whitney Museum in New York and later founder of the New Museum, was the juror in a show I entered. She awarded me the big prize, $500, which was very encouraging and I started showing on a regular basis. My husband Jim Roche and I met in 1974, when he came up to The University of the Arts in Philadelphia to give a talk. We immediately were drawn to each others' love for nature, and took off by motorcycle, traveling across the country to see as much as possible, while being immersed in nature's vastness.</>,
    <>In 1976, Anne D'Harnoncourt, head curator at the Philadelphia Art Museum and later Director, came to my loft for a studio visit. The minute Anne walked into my loft all the electricity went off and I had to take the work outside for her to see it. She bought a painting for the museum and one for herself, which was a terrific boost for a very young artist.</>,
    <>At that time I began making low reliefs of animal landscapes in clay forms, which I would then take paper molds from so as to start painting them. This included taking simple mountain forms made in clay and casting them in plaster. These were the beginnings of a whole body of work I continued after I moved to Florida in 1976 to begin life together with Jim Roche. There we created huge vegetable and flower gardens on our little piece of land in Havana, Florida.</>,
    <>In 1978, "Kippy," Marion Bolton Stroud, Director of the Fabric Workshop Museum in Philadelphia, asked me to design a work of art collaborating with the workshop. I chose to draw out a "Sorceress Cape" with rivers running through it connecting to birds and animals. I worked with their designers, printers, and seamstresses. The cape was well received, and later pictured in an Art In America review of the works and the Fabric Workshop, Kippy's dream project. In 1980 I designed "Hug Time Dress" collaborating again with the workshop. It is pictured in An Industrious Art Innovation in Fabric and Print at The Fabric Workshop, edited by Marion Bolton Stroud.</>,
    <>Jim and I traveled as much as possible through the country by motorcycle and later by car and truck after our children were born: JimmyJoe in 1981 and Waylen Walker in 1989. Jim and I are incredibly fortunate to have two extremely bright and talented sons. JimmyJoe continues to perform and make films and Waylen, also a performer, composes captivating songs on the piano.</>,
    <>Traveling encompassed exhibiting art and immersion into the land and rivers across America. Jim, a native Floridian, shared with me his love and knowledge of Florida, which infused in me a desire to learn as much as possible about our surroundings. Already a plant lover, North Florida's rich habitat full of unbelievable biodiversity that I had never seen before, filled my heart and soul with exciting areas of nature to explore and plants to love and learn from.</>,
    <>I continued working in clay and making paper molds from the forms, using paper mulch mixed with Roplex. After the cast forms dried I painted landscapes and river-like imagery on them and began coating the back side with fiberglass for additional strength. These series evolved from mermaids at first, to dancing cactus with legs, on into "harpy bird," an enormous three dimensional autobiographic woman pulled by city and country in different directions, into a large rat truck to symbolize the logging trucks driving by our house everyday, and then tidal waves that washed away things during hurricanes, and so on into even more autobiographical large reliefs. These were exhibited in the late 1970's in Philadelphia at Eyes Gallery and Eric Makler Gallery, in New York City at the New Museum and PSI, and in Winston-Salem at SECCA, as well as many other museums and galleries over time. In 1979, I received a National Endowment for the Arts Fellowship for this work.</>,
    <>In 1982, I received a second NEA grant for a life-sized sculpted relief series that included many characters within large wall relief narratives. This body of work was included in "Southern Narratives" at the Contemporary Arts Museum in Houston, and the Contemporary Museum in New Orleans. Things were going almost too well, I guess.</>,
    <>Later that year, I was in a near death car accident with Jimmy Joe. My Toyota flipped 85 feet in the air and landed on top of me. JimmyJoe was held in place by his car seat to emerge unharmed. Jim had tied it in to secure it more firmly that morning before we left. This became a life changing experience for me. I was so thankful that our little angel was not harmed and I had only suffered minor injuries compared to what could have occurred. A retrospective I saw in NYC of Henri Rousseau paintings was also a pivotal factor in the desire to make the narratives of my life more direct.</>,
    <>Around this time I found working with 3-dimensional paintings, that need to be shipped around the country, could be very difficult because of breakage. Already there was a lot of material out there on "our humans" impact on nature but I wanted to depict them. I decided to focus more on straight oil paint applied on wood to fulfill the psychologically descriptive narratives I was feeling around me and visually seeing in real life. Also in 1982, I began making work for an exhibit that was shown at the Lockes Gallery in Philadelphia in 1986. The first pieces were of businessmen with white doctor-masks on, "Carving Up the Earth," as trembling animals watch in horror. These evolved into paintings of scared wild animals running in fear and being pushed to the brink by human encroachment and fire. One painting, "Slash and Burn," showed animals panicked and running from fire to find safety.</>,
    <>I was reading intense articles about these issues and had just read Peter Beard's book The End Of The Game. Another painting, "Beached Forest" showed how huge logs fall off logging ships and pile up on beaches in Northern Oregon to form a jungle of huge driftwood trees. Jim and I had camped on one of those beaches in 1977. Two paintings, "When All The Rivers Come Together," which shows how water runs through us from Alaska to Florida, and "In this Place Let There Be Plenty and Grace," which is about Alaska on the pivotal edge between</>,
    <>In 1987, I was asked by Jerry Beck, who was director of the Revolving Museum in Boston, to participate in The Chapel Project, a huge site-specific piece at Boston’s city hall that included several other artists. For this project I made a forty-eight foot mural on canvas. I named it “In Sickness and In Health, Till Death do Us Part.” It had three sections: the left panel depicts the garden beautiful and full of native bountiful life, unharmed; the center panel depicts the healing ship with homage to native cultures with Shamans helping to heal with medicinal plants; the right panel has skeleton trees and drowning ships of people glued to their screens - where we are headed if we don’t change our ways. Creating this mural tied together the work from the 1980’s for me.</>,
    <>In 1990, I started a new body of cut-out wooden shaped paintings that I collectively titled Birds Eye View. They showed birds and other wild creatures observing their habitats from the outside looking into their worlds. I had exhibited some earlier small ones in the Lockes Gallery show and now wanted to elaborate on them. At the time my father was very ill, which saddened me, and inspired me to paint in each piece a tunnel that a body was flowing into. I called this body of shaped paintings Just Passing Through. For me this symbolized one’s journey through this universe. Thinking more of how we come into this world and how we go out, I used a fallen tree uprooted across the center of each painting to symbolize ancient wisdom being torn apart and now revealing fully Nature’s fragility.</>,
    <>In 1994, “Kippy,” started inviting artists, curators, writers, scientists, and many other professionals to her new project, Acadia Summer Arts Program, a residency on Mt. Desert Island, Maine. I felt deeply thankful to be invited every other year through 2015. While there I started working on Talking Leaves that formed first as small cut-out shaped pieces on clay board delicately drawn and painted-on to reveal the leaf’s inner skin, the textural veins of each piece, and the fragile wetland that the plants were connected to, all of which are painted vividly on the leaves’ center window look out.</>,
    <>My longtime interest in studying plant medicines, their physical and psychological properties, and the folklore about them from native cultures and early pioneers, has always fascinated me to the point that it became the catalyst for several bodies of work, including Remedies. I began doing graphite drawings to transfer their line onto wooden pieces, to then be cut out and shaped like a known healing plant. These were painted later to show the actual healing plant, with its flowers, and all the pollinators and wildlife that were dependent on that particular healer. I have worked on and off along this general theme showing the work in museums and galleries, including a solo exhibit at The Ogden Museum Of Art in New Orleans. Medicinal Plants and their attendant wildlife continue to be a major catalyst for my work.</>,
    <>In 2005, Jim and I traded three lots in Florida we had purchased in 1980, for a modest studio on a mountain in Northern Georgia. Corridors is a series of photo collages laminated to shaped wood that are then drawn on and painted. These were inspired by observing how much territory animals need to find food, mate, and live in. Each piece is made up of pieced-together photos of the natural corridors the animal needs to survive. The forest surrounding our tree house mountain studio is alive with wild native plants, birds, and multitudes of animals. Although we have been bird watchers for years, this new place became a front row seat to incredible bird song around us from spring till fall, giving me a chance from the screened treehouse porch to be surrounded morning to night with birds mating, nesting, and foraging in the woods around us.</>,
    <>This became the inspiration for the Songbirds Nesting At Twilight series. We were also witnessing the tremendous loss of trees and habitat in North Florida to over-development, pests multiplying due to a hotter planet, lack of water from wetlands being drained, drought, and Atlanta’s sprawl. Cutting down ancient live oaks to put up urban sprawl in the name of progress in and around Tallahassee became developers’ calling cards. As we travelled, I was also seeing deforestation to put up fast temporary development everywhere across the country. We were reading that wood pellet factories all along the east coast were being built to help Europe’s need for fuel, and these became a major cause of deforestation in the eastern USA.</>,
    <>This was deeply disturbing, and ignited even more reasons to create work about this issue. After several years I noticed the bird songs I love coming earlier...but leaving North Georgia sooner...along with a drop in bird counts in our woods. I was also seeing the overgrowth of algae causing harm to fish, reptiles, amphibians, and bird life in the Florida waters and now in the great lakes. As the planet warms faster and we keep polluting our waters, the increase of toxic algae has become another very dangerous occurrence along with monster hurricanes. The Songbird drawings and paintings use green backgrounds as a symbol for overheating in the atmosphere and the rise of toxic algae.</>,
    <>I have always been drawn, from my early years, starting with Kipling’s stories, to books involving nature. One favorite author, the great entomologist, E.O. Wilson, came out with a new very moving book, called Half Earth. The book’s essential message is that we must preserve biodiversity for half the planet in order to survive. He suggests saving these wild places and only allowing scientists to go there while the rest of us observe them virtually. Over many years I have been inspired by nature writers, exploring of nature, and psychological narrative. I have always found it important to use everything in my background as I weave all this together into a tapestry that tells the story of a place, its inhabitants, and its emotion, while hopefully inspiring others to help preserve and protect nature for future generations of life. Heart and Brush, Alexa Kleinbard</>,
]

export default function AboutLong() {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(PARAGRAPHS.length / PARAS_PER_PAGE)
    const start = (page - 1) * PARAS_PER_PAGE
    const visibleParagraphs = PARAGRAPHS.slice(start, start + PARAS_PER_PAGE)

    return (
        <div className={
            styles.page
        }>
            <section className={
                styles.section
            }>
                <div className={
                    styles.artistImageWrap
                }>
                    <img src={
                            imageUrl('artist.jpg')
                        }
                        alt="Alexa Kleinbard"
                        className={
                            styles.artistImage
                        }/>
                </div>
                <div className={
                    styles.text
                }>
                    <h1 className={
                        styles.title
                    }>About the Artist</h1>
                    {
                    visibleParagraphs.map((content, i) => (
                        <p key={
                            start + i
                        }>
                            {content}</p>
                    ))
                }
                    {
                    totalPages > 1 && (
                        <nav className={
                                styles.pagination
                            }
                            aria-label="About text pagination">
                            <button type="button"
                                className={
                                    styles.paginationButton
                                }
                                onClick={
                                    () => setPage((p) => Math.max(1, p - 1))
                                }
                                disabled={
                                    page <= 1
                            }>
                                Previous
                            </button>
                            <span className={
                                styles.paginationInfo
                            }>
                                Page {page}
                                of {totalPages} </span>
                            <button type="button"
                                className={
                                    styles.paginationButton
                                }
                                onClick={
                                    () => setPage((p) => Math.min(totalPages, p + 1))
                                }
                                disabled={
                                    page >= totalPages
                            }>
                                Next
                            </button>
                        </nav>
                    )
                } </div>
            </section>
        </div>
    )
}
