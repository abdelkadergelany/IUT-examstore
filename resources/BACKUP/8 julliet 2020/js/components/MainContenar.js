import React, { Component } from 'react'
import MainContenarHeader from './MainContenarHeader'
import MainContenarFooter from './MainContenarFooter'
import { Switch, Route, Redirect,withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './home'
import Semester from './Semester'
import ResultList from './ResultList'
import {LoadingIndicator} from './LoadingIndicator'
import Login from './Login';
import Register from './Register';
import Favorite from './Favorite';




 class MainContenar extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        //  <Route  path='/department/:dept' component={Semester} />
        //<Route  path='/department/:dept/semester/:value' component={ResultList} />

        //var id = this.props.match.params.id
      //  console.log(this.props)
        return (
            <main id="pageWrapper">
                <MainContenarHeader />

                <div className="banner bg-home"></div>
                <div className="main-container" id="appRoute">
                    <hr />
                    <hr />
                    <LoadingIndicator />
                    <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch >
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/favorite' component={Favorite} />
                        <Route path="/department/:dept/semester/:sem" render={({match}) => (<ResultList sem={match.params.sem}  dept={match.params.dept} />)}/>
                        <Route path="/department/:dept" render={({match}) => (<Semester dept={match.params.dept} />)}/>
                        <Redirect to="/home" />

                    </Switch>

                    </CSSTransition>
                    </TransitionGroup>

                </div>
                <MainContenarFooter />
            </main>
        )
    }
}
export default withRouter(MainContenar);
