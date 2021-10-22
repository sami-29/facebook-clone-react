import React from 'react'

const Story = (props) => {
    const account = props.account
    return (
        <div className="story-container">
            <div className="story">
                <img src={account.story} alt="" /></div>
            <h4>{ account.name }</h4>
        </div>
    )
}

export default Story;