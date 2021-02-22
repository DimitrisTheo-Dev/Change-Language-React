import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from "../context/ColorContext";

class App extends React.Component {
    state = { language: 'english' };
    onLanguageChange = (language: string) => {
         this.setState({ language });
    };

      render() {
          let color;

          if(this.state.language === 'english') {
              color = 'red';
          } else {
              color = 'primary';
          }
          return (
              <div className="ui container">
                  <div>
                        Select a language:
                       <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                       <i className="flag gr" onClick={() => this.onLanguageChange('greek')}/>
                  </div>
               {/* The Provider creates a new pipe of information every time the value changes*/}
               <LanguageContext.Provider value={this.state.language}>

                   <ColorContext.Provider value={`${color}`}>
                        <UserCreate />
                   </ColorContext.Provider>
               </LanguageContext.Provider>

              </div>
          );
      }
}

export default App;