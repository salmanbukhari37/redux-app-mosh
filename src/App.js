import logo from './logo.svg';
import './App.css';
import pipe from "lodash/fp";
import { Map } from 'immutable';
import { produce } from "immer";

function App() {
  var book = { title: "Harry Potter" };

  // immutable
  // var book = Map({ title: "Harry Potter" });

  // const publish = (book) => {
  //   return book.set("isPublished", true);
  // }

  // let newbook = publish(book);
  // // console.log(book.get("title"));
  // console.log(newbook.toJS());

  const publish = (book) => {
    return produce(book, draftBook => {
      draftBook.isPublished = true;
    });
  }

  let updated = publish(book);

  console.log(updated, book);

  const str = "   Javascript   ";
  const trim = str.trim();
  const toLowerCase = str.toLowerCase();
  const wrap = type => str => `<${type}>${str}</${type}>`;
  const transform = pipe(trim, toLowerCase, wrap('div')(str));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
