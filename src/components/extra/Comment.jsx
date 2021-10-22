import React from "react";


const Comment = (props) => {
    const comment = props.comment
    return (
        <div className = 'comment-container'>
            <img src={comment.acc.pfp} alt="" />
            <div className='comment'>
                <h3>{comment.acc.name}</h3>
                <h3>{comment.comment}</h3>
                <div className = "comment-actions">
                    <h2>Like</h2>
                    <h2>Respond</h2>
                    <h2>· 3 d</h2>
                </div>
            </div>
        </div>
    )
}

export default Comment
