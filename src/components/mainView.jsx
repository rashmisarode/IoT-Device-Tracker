import React, { PureComponent } from 'react'
import CustomNavBar from './NavBar';


class MainView extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CustomNavBar/>
            
            </div>
        )
    }
}

export default MainView