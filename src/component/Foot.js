import React, { Component } from 'react'

export default class Foot extends Component {
    render() {
        console.log(this.props.val)
        return (
            <div className='box'
            onClick={() => {
                console.log(this.props.val)
            }}>
                <div className='title'>
                    {this.props.val.shoppname}
                </div>
                <div className='img'>
                    <img src= {this.props.val.image}alt="" />
                </div>
            </div>
        )
    }
}
