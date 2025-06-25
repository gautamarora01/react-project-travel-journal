import "./app.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data"

function App(){

  const entryData=data.map((element)=>{
    return (
      <Entry
        key={element.id}
        img={{
          src:element.img.src
          ,alt:element.img.alt}
        }
        title={element.title}
        country={element.country}
        googleMapsLink={element.googleMapsLink}
        dates={element.dates}
        text={element.text}
      />
    )
  });

  return (
    <>
      <Header/>
      <main className="container">
        {entryData}
      </main>
    </>
  )
}

export default App;