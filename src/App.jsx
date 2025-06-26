import "./app.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data"

function App(){

  const entryData=data.map((element)=>{
    return (
      <Entry
        key={element.id}
        img={element.img}
        title={element.title}
        country={element.country}
        googleMapsLink={element.googleMapsLink}
        dates={element.dates}
        text={element.text}

        //other way is obj={element}
        //and then in Entry.jsx we can updates each access of props to props.obj
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