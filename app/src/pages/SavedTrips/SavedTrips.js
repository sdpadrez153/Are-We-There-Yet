import React, { Component } from "react";
import axios from "axios";
import { Button } from 'reactstrap';
import "./style.css";

class SavedTrips extends Component {

    state = {
        trips: []
    }

    componentDidMount = () => {
        if(!localStorage.getItem("token")){
            this.props.history.replace("/")
        }


        axios.get("/v1/api/save/" + localStorage.getItem("userId"))
            .then((resp) =>{
                this.setState({ trips: resp.data })
            })
    }

    render() {
        return (
            <div className="savedTripsContainer">
                <h2>Saved Trips</h2>
                <table>
                    <tr>
                        <th>Trip</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Trip Info</th>
                    </tr>
                    <tbody>

                    {this.state.trips.map((tripObj, tripInd) => {
                        const dataArray = tripObj.split(":");
                        return (
                            <tr>
                                <td>
                                    {tripInd + 1}
                                </td>
                                <td>
                                    {dataArray[0]}
                                </td>
                                <td>
                                    {dataArray[1]}
                                </td>
                                <td>
                                    <Button>
                                        View Trip
                                    </Button>
                                    
                                </td>
                                <td>
                                    <Button>
                                        Delete Trip
                                    </Button>
                                    
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default SavedTrips;