import React, { PureComponent } from 'react'
import CustomNavBar from './NavBar';
import DatePickers from './DatePickers';


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
                <DatePickers/>
            
            </div>
        )
    }
}

export default MainView