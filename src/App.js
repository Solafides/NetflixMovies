
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={request.fetchOriginals}/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchHorror} isLarge={true}/>
      <Row title="Trending Now" fetchUrl={request.fetchBanner} />
      <Row title="LIVE EVENTS" fetchUrl={request.fetchTrending}/>
      <Row title="Netflix Comedy" fetchUrl={request.fetchGenre}/>
    </div>
  );
}



export default App;
