import React, {Component} from 'react';

// this works for cases that do not connect to an API
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  return class extends Component{
    render () {
        return (
          <div className={className}>
            <WrappedComponent {...this.props} />
          </div>
        )
    }
  }
}

export default withClass;