import React, { Component } from 'react';
import Icon from "../../component/icon"
import './index.css';

export default class Icontest extends Component {
  render() {
    return (
          <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAHlBMVEVHcEwyMjIuLi4zMzMzMzMyMjIyMjIyMjIyMjIzMzOib7lxAAAACXRSTlMAgBzY8D5hoL+aQBqvAAABiklEQVRo3u2Yr2+DUBRGW1gB2YmJOpbN1NXOLXVzncQ1czhsXTM3Cayw+9/uB+l4DbzHfd/N1O7x96RfCidNZzNFURRFUZT/xu2L7H5OdBQJcqJWch88EdFOIEi+7ulRtoCoFAi+FxCl8H38c08bWJB1AnzDQyd4T/GnqAN9ltZnQQMK3s4CcENEvxSQ4L4XnCDBoRfUyP2CDJaAIDQFFSBYmYIPIAV0wV62gGiLpaCnhWJmskNiZrKRLfDeMFjguyEe3HtuyIaCEomZiVcU5jTCEYmZSYPEDNwQ0SgFEjOTExIzkxqKGRK20CaokJgBYQvIyl62gBu2lV3Qginwi0LiuGf9Ystdgla4gLMhdt4zwpa5BSUSswtSJGY+YVtPCRokZh5hi2iSAokZP2yHaUENxYwbtiuOoMJSwNrAWuAKW8gTbGULHHGeSMH0hoR5bw1bzhW0wgW2sMXse0vYMr6ghGI2FbbA4370i1z4CJZ/8Qk4MXG/kHd8wev4k/R8zeRG/19TFEUZ5xObLCFBcr89fwAAAABJRU5ErkJggg==" 
            style={{width:'16px',height:'16px'}}
            className='back_color'
          />
    );
  }
}