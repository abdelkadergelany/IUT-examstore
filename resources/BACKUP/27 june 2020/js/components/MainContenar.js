import React, { Component } from 'react'
import MainContenarHeader from './MainContenarHeader'
import MainContenarFooter from './MainContenarFooter'
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from './home'
import Semester from './Semester'
import Filter from './Filter'
import ResultList from './ResultList'



 class MainContenar extends Component {
    render() {
        //  <Route  path='/department/:dept' component={Semester} />
        //<Route  path='/department/:dept/semester/:value' component={ResultList} />

        //var id = this.props.match.params.id
       // console.log(this.props.match.params.dept)
        return (
            <main id="pageWrapper">
                <MainContenarHeader />
                <div className="banner bg-home"></div>
                <div className="main-container" id="appRoute">
                    <Filter />

                    <Switch location={this.props.location}>
                        <Route exact path='/home' component={Home} />
                        <Route path="/department/:dept/semester/:sem" render={({match}) => (<ResultList sem={match.params.sem}  dept={match.params.dept} />)}/>
                        <Route path="/department/:dept" render={({match}) => (<Semester dept={match.params.dept} />)}/>
                         <Redirect to="/home" />
                    </Switch>

                </div>
                <MainContenarFooter />
            </main>
        )
    }
}
export default MainContenar ;
