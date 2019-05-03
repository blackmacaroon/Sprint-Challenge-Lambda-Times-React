import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  // console.log('tab props', props)
  //create new variable to call name
  let tabbytab = ''
  //if the props tab is the selected tab
  if (props.tab === props.selectedTab){
    //return the name active
    tabbytab='tab active-tab'
  } else {
    //otherwist just the name
    tabbytab='tab'
  }

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={'tabbytab'}
      onClick={() => {
        props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}
export default Tab;
