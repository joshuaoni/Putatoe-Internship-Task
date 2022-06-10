import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <div className='nav'>
            <div className='flex s-v'>
                <div className='flex'>
                    <div className='s-icon'>
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </div>
                    <div className='search'>
                        <input 
                            placeholder='Search for Products...'
                        />
                    </div>
                </div>
                <div className='white mic'>
                    <FontAwesomeIcon className='' icon={faMicrophone} size="2x" />
                </div>
            </div>
        </div>
    );
}
 
export default Navigation;