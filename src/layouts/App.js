import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
