import React from 'react';
import ReactDOM from 'react-dom';
import LeftNavbar from './LeftNavbar';
import MainContenar from './MainContenar';
import { BrowserRouter } from 'react-router-dom';
import { AppendScript } from './AppendScript';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../redux/ConfigureStore'

const store = ConfigureStore();

function Index() {
    AppendScript('./js/myjs.js');

    return (
        <Provider store={store}>
        <BrowserRouter>
            <div id="wrapper" data-scrollable="true">
                <LeftNavbar />

                <MainContenar />
                <div className="backdrop header-backdrop"></div>
                <div className="backdrop sidebar-backdrop"></div>

            </div>
            </BrowserRouter>
            </Provider>

    );
}

if(document.getElementById('root')){
    ReactDOM.render( <Index />, document.getElementById('root'));
}
export default Index;
