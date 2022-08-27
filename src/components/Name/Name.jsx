import React from 'react';
// function Name(props) {
//     return (
//         <div className='mt-5 '>
//             <h1>{props.lastname}</h1>
//             <h2>{props.children}</h2>
//             <button type="button" className='btn btn-primary me-md-2 mt-5   ' onClick={props.handleName}>Change name</button>
//         </div>
//     );
// }
class Name extends React.Component{
    render() {
        return(
            <>
                <div className='mt-5 '>
                    <h1>{this.props.lastname}</h1>
                    <h2>{this.props.children}</h2>
                    <button type="button" className='btn btn-primary me-md-2 mt-5   ' onClick={this.props.handleName}>Change name</button>
                </div></>
        )
    }
}
export default Name;