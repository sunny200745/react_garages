import React, {Component} from 'react';
import * as service from  '../../common_services/service';

export default class Dashboard extends Component {
    state = {garageList :{}}
    componentWillMount() {
        service.garageList().then( garageList =>{
            
            this.setState({garageList : garageList.data})
        });
    }
    render() {
        const {garageList} = this.state;
        const {features} = garageList; 
        console.debug("features",features)
        return (
            <div className="garageListMainContainer">
                <div className="listing">
                <h1>Available Garages</h1>
                
                    <ul className="garageList">
                        <li>
                            <span className="listTitle bold"> Garage Name </span>
                            <span className="listState bold"> State </span>

                        </li>

                        {
                            features && features.map(function(val) {
                                return (
                                    <li key={val.properties.title} className={val.properties.layers['parking.garage'].data.FreeSpaceLong > 0 ? '': 'No'}>
                                        <span className="listTitle">  {val.properties.title}</span>
                                        <span className="listState"> {val.properties.layers['parking.garage'].data.FreeSpaceLong >0 ? 'Yes' : 'No'} </span>

                                    </li>
                                )
                            })
                        }

                       
                    </ul>
                </div>
            </div>
        )
    }
}