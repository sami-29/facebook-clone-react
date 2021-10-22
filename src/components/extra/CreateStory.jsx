import React from 'react'

const CreateStory = (props) => {
    const account = props.account
    return (
        <div className = "story-container first">
            <div className="pfp">
                <img src={account.pfp} alt="" />
            </div><div className="nav-button  blue">
                <img className="svg-color" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDE3LjQsMjI0SDI4OFY5NC42YzAtMTYuOS0xNC4zLTMwLjYtMzItMzAuNmMtMTcuNywwLTMyLDEzLjctMzIsMzAuNlYyMjRIOTQuNkM3Ny43LDIyNCw2NCwyMzguMyw2NCwyNTYgIGMwLDE3LjcsMTMuNywzMiwzMC42LDMySDIyNHYxMjkuNGMwLDE2LjksMTQuMywzMC42LDMyLDMwLjZjMTcuNywwLDMyLTEzLjcsMzItMzAuNlYyODhoMTI5LjRjMTYuOSwwLDMwLjYtMTQuMywzMC42LTMyICBDNDQ4LDIzOC4zLDQzNC4zLDIyNCw0MTcuNCwyMjR6Ii8+PC9zdmc+" alt="" />
            </div><div className="create-story">
                <h4>Create a story</h4>
            </div>
        </div>
    )
}

export default CreateStory;