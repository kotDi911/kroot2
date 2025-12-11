import TextCard from "../cards/Contacts/TextCard";
import PhotoCard from "../cards/Contacts/PhotoCard";
import {Helmet} from "react-helmet-async";
import {useContacts} from "../store/contactsData";

const RenderCard = ({item}) => {
    return (
        <div className="contacts__grid-card">
                    <TextCard props={item.card}/>
                    <PhotoCard props={item.photo}/>
        </div>
    )
}

const Contacts = () => {
    const cards = useContacts((store) => store.cards)

    return (
        <main className="main contacts">
            <Helmet>
                <title>Contacts - The Kroot</title>
                <meta content="Contacts the Kroot" property="og:title"/>
                <meta content="Contacts the Kroot" property="twitter:title"/>
                <meta
                    name="description"
                    content="Get in touch with The Kroot. Contact information for Tom Ash (Executive Producer) in Los Angeles and Julia Lusenko (Producer, CFO) in Ukraine."
                />
                <meta
                    name="keywords"
                    content="The Kroot, Contact, VFX, Animation, Executive Producer, Producer, CFO, Unreal Engine, Creative Services"
                />
                <meta property="og:description"
                      content="Contact The Kroot team: Tom Ash (Executive Producer) in Los Angeles and Julia Lusenko (Producer, CFO) in Ukraine."/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.thekroot.com/contacts/"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <section className="container-64 p_top contacts">
                <h1 className="h1">Contacts</h1>
                <div className="contacts__grid p-25r">
                    {cards.map((item, i) =>
                        <RenderCard key={i} item={item}/>
                    )}
                </div>
            </section>
        </main>
    )
}
export default Contacts