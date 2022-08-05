import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import {callExpressAPI} from './services.mjs';

function AirportSearchBar() {
    const [id, setId] = useState("");
    const [dest_id, setDest_id] = useState("");
    const [data, setData] = useState([]);

    const { 
      register, 
      handleSubmit, 
      formState: {errors} 
    } = useForm();

    const onSubmit = (data) => {
        console.log('onSubmit called');
        setId(data['origin-search']);
        setDest_id(data['dest-search']);
        callExpressAPI(id, dest_id);
    }   

    useEffect(() => {
        // update the table here
        console.log(id + ', ' + dest_id);
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor="header-search">
            <h2 className="header-bar">Search for flights by origin and destination airport</h2>
        </label>
        
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <label>
                <span className="originSearch">Origin </span>
                <input
                    {...register("origin-search", { 
                      required: true,
                      minLength: {
                        value: 4,
                        message: "Airport codes are 4 letters"
                      }
                    })}
                    placeholder="e.g. KSFO or San Francisco"
                />
            </label>
            <label>
                <span className="destSearch">Destination </span>
                <input
                    {...register("dest-search", { 
                     required: true,
                     minLength: {
                        value: 4,
                        message: "Airport codes are 4 letters"
                     }
                    })}
                    placeholder="e.g. KJFK or New York"
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </label>
            
        </div>
        
        
    </form>
    );
}

export default AirportSearchBar;