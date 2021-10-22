import React from 'react'
import Button from './Button'
import Comment from './Comment'

const Post = (props) => {
    const post = props.post
    return (
        <div className="post-container">
            <div className="post-sharer-info">
                <img src={post.acc.pfp} alt="" />
                <h4>{post.acc.name}</h4>
                <p>{post.time}</p>
                <Button
                    type="basic three-dots"
                    img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxMiIgcj0iMSIvPjwvc3ZnPg=="
                />
            </div>
            <div className={`post-content post-${post.contentType}`}>
                {post.contentType === 'text' ? <h1>{ post.content}</h1>: <img src={post.content} alt="" /> }
            </div>

            <div className= "post-likes">
                <p>{`${post.likes[0]},${post.likes[1]} and ${post.likes.length - 2} other people`}</p>
                <p className="post-likes-right">{`${post.comments.length} comments`}</p>
            </div>
            <div className = "post-actions">
                <Button
                    type='long'
                    img = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ikljb25zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTo1LjIwNjYsMDt9Cjwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTExLDI0VjE0SDV2MTJoNnYtMi40bDAsMGMxLjUsMS42LDQuMSwyLjQsNi4yLDIuNGg2LjVjMS4xLDAsMi4xLTAuOCwyLjMtMmwxLjUtOC42YzAuMy0xLjUtMC45LTIuNC0yLjMtMi40ICBIMjBWNi40QzIwLDUuMSwxOC43LDQsMTcuNCw0aDBDMTYuMSw0LDE1LDUuMSwxNSw2LjR2MGMwLDEuNi0wLjUsMy4xLTEuNCw0LjRMMTEsMTMuOCIvPjwvc3ZnPg=='
                >
                    <h3>Like</h3></Button>
                <Button
                    type='long'
                    img = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciA0IiBpZD0iTGF5ZXJfNCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgwLjM1LDI2QzkyLjg4LDI2LDEwMiwzNS4xMiwxMDIsNDcuNjVWNjEuMzRDMTAyLDczLjg3LDkyLjg4LDgzLDgwLjM1LDgzSDc1LjQxbC0yLjMsMS4zMkw1NC44Miw5NC43M1Y4My42MWwtOS4yLS43NEMzNC4wOCw4MiwyNiw3My4xLDI2LDYxLjM0VjQ3LjY1QzI2LDM1LjEyLDM1LjEyLDI2LDQ3LjY1LDI2aDMyLjdtMC0xMEg0Ny42NUMyOS41OCwxNiwxNiwyOS41OCwxNiw0Ny42NVY2MS4zNGMwLDE3LjExLDEyLjE1LDMwLjE3LDI4Ljc5LDMxLjVWMTEyTDc4LjA3LDkzaDIuMjhDOTguNDIsOTMsMTEyLDc5LjQxLDExMiw2MS4zNFY0Ny42NUMxMTIsMjkuNTgsOTguNDIsMTYsODAuMzUsMTZaIi8+PC9zdmc+'
                >
                    <h3>Comment</h3></Button>
                <Button
                    type='long'
                    img = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMTAxODIwO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgNTEiIGlkPSJMYXllcl81MSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiwyOUExLjEyLDEuMTIsMCwwLDEsMS42OSwyOSwxLDEsMCwwLDEsMSwyOFYyN0ExOSwxOSwwLDAsMSwxNyw4LjI0VjRhMSwxLDAsMCwxLDEuNi0uOGwxMiw5YTEsMSwwLDAsMSwwLDEuNmwtMTIsOUExLDEsMCwwLDEsMTcsMjJWMTguMjVBMTguNjYsMTguNjYsMCwwLDAsNC45MywyNS42N0wyLjgxLDI4LjU5QTEsMSwwLDAsMSwyLDI5Wk0xOSw2VjkuMTJhMSwxLDAsMCwxLS44OSwxLDE3LDE3LDAsMCwwLTE1LDE0LjZsLjE2LS4yMUEyMC42OCwyMC42OCwwLDAsMSwxNy45LDE2LjExYTEsMSwwLDAsMSwuNzcuMjYsMSwxLDAsMCwxLC4zMy43NFYyMGw5LjMzLTdaIi8+PC9nPjwvc3ZnPg=='
                >
                    <h3>Share</h3></Button>
            </div>
            <div className='post-comments'>
                <Comment comment = { post.comments[0]}></Comment>

            </div>
            <div className='post-make-comment'>
                <img src="https://scontent.fczl1-2.fna.fbcdn.net/v/t1.6435-9/73038550_2475252235897397_423262868037697536_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFDOL2fhVg2_keKdHOtC-jGtHvdFhISuSW0e90WEhK5JVCVuxOhSrBtsyzCMohPQR_ySolmIepVLp8gvaaj5tOS&_nc_ohc=HqA_hCqhdyEAX-AteN0&_nc_ht=scontent.fczl1-2.fna&oh=9996d854937bd891d87891a4eda3f55e&oe=61433FE0" alt="" />
                <input type="text" name="comment" placeholder="Write a comment..."></input>
            </div>
        </div>
    )
}

export default Post;