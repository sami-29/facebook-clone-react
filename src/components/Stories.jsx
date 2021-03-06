import React from "react";
import CreateStory from "./extra/CreateStory";
import Story from "./extra/Story";
import Button from "./extra/Button";

const Stories = (props) => {
    const user = props.user

    return (
        <div className = 'stories-container'>
            <CreateStory account={user}/>
            <Story account={user.friends[0]}></Story>
            <Story account={user.friends[1]}></Story>
            <Story account={user.friends[2]}></Story>
            <Story account={user.friends[3]}></Story>

            <Button
                type='basic right-arrow'
                img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiBoZWlnaHQ9Ijk2cHgiIGlkPSJhcnJvd19yaWdodCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgOTYgOTYiIHdpZHRoPSI5NnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMTIsNTJoNjIuMzQ0TDUyLjg4OCw3My40NTZjLTEuNTYyLDEuNTYyLTEuNTYyLDQuMDk1LTAuMDAxLDUuNjU2YzEuNTYyLDEuNTYyLDQuMDk2LDEuNTYyLDUuNjU4LDBsMjguMjgzLTI4LjI4NGwwLDAgIGMwLjE4Ni0wLjE4NiwwLjM1Mi0wLjM5MSwwLjQ5OC0wLjYwOWMwLjA2Ny0wLjEwMSwwLjExNC0wLjIxLDAuMTcyLTAuMzE1YzAuMDY2LTAuMTI0LDAuMTQyLTAuMjQyLDAuMTk1LTAuMzczICBjMC4wNTctMC4xMzUsMC4wODktMC4yNzUsMC4xMjktMC40MTVjMC4wMzMtMC4xMTEsMC4wNzYtMC4yMTcsMC4wOTktMC4zMzFDODcuOTczLDQ4LjUyNSw4OCw0OC4yNjMsODgsNDhsMCwwICBjMC0wLjAwMy0wLjAwMS0wLjAwNi0wLjAwMS0wLjAwOWMtMC4wMDEtMC4yNTktMC4wMjctMC41MTktMC4wNzgtMC43NzRjLTAuMDI0LTAuMTItMC4wNjktMC4yMzEtMC4xMDQtMC4zNDkgIGMtMC4wMzktMC4xMzMtMC4wNjktMC4yNjgtMC4xMjMtMC4zOTdjLTAuMDU4LTAuMTM5LTAuMTM2LTAuMjY1LTAuMjA4LTAuMzk2Yy0wLjA1NC0wLjA5OC0wLjA5Ny0wLjE5OC0wLjE1OS0wLjI5MiAgYy0wLjE0Ni0wLjIyMS0wLjMxNC0wLjQyNy0wLjUwMS0wLjYxNEw1OC41NDQsMTYuODg4Yy0xLjU2Mi0xLjU2Mi00LjA5NS0xLjU2Mi01LjY1Ny0wLjAwMWMtMS41NjIsMS41NjItMS41NjIsNC4wOTUsMCw1LjY1OCAgTDc0LjM0Myw0NEwxMiw0NGMtMi4yMDksMC00LDEuNzkxLTQsNEM4LDUwLjIwOSw5Ljc5MSw1MiwxMiw1MnoiLz48L3N2Zz4="
            />
        </div>
    )
}
export default Stories