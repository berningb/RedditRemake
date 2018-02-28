import React from 'react';
import { Route, Link } from 'react-router-dom'
import SubregionManagement from '../SubregionManagement'
import {connect} from 'react-redux'

import './index.css'



// let SubregionManagementContainer = connect(state => ({
//   getSelectedRegionName: getSelectedRegionName(state)
// }), {
//   getRegionData: getRegionData
// })(SubregionManagement)

const Nav = () => (
  <div>
    <ul>
      <Link className='link' to="/">Subregion Management</Link>
    </ul>

    <main>
      <Route exact path="/" component={SubregionManagement} />
    </main>
  </div>
)
export default Nav