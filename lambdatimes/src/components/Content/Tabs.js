import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log('props', props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {/* mapping through array tabs, passing each as one tab, to be passed to Tab */}
          props.tabs.map((tab) => {
            //passing the single tab (props.tab) AS 'tab' to Tab.js!!
            <Tab tab={props.tab}/>
          })
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tab: PropTypes.string
}
export default Tabs;
